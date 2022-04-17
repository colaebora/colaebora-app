import { AuthService } from '@services/auth.service';
import { User } from '@ts/entities/User';
import { Gender } from '@ts/enums/Gender';
import { Interest } from '@ts/enums/Interest';
import * as AppAuth from 'expo-app-auth';
import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { AsyncStorage } from 'react-native';
import { EMPTY_ADDRESS } from './useAddressWIzard';

export type registeredType = 'isRegistered' | 'isNotRegistered';

type AuthContextData = {
  isGuest: boolean;
  isLoggedIn: boolean;
  isInsideApp: boolean;
  enterAsGuest: () => void;
  logout: () => void;
  handleGoogleLogin: () => Promise<void>;
  handleOrgLogin?: () => Promise<boolean>;
  user: User | null;
  registered: registeredType | null;
  googleToken: string | null;
};

const MOCK_USER: User = {
  id: 1,
  name: 'Marlon Santos',
  photo:
    'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
  email: 'marlon.santos87@gmail.com',
  gender: Gender.male,
  interests: [Interest.animals, Interest.ecology],
  phone: '81940028922',
  bio: 'Engenheiro civil, pai e louco por cachorros',
  role: 'user',
  address: EMPTY_ADDRESS,
};

const MOCK_ORG: User = {
  id: 1,
  name: 'Saber Viver',
  photo:
    'http://mundocarreira.com.br/wp-content/uploads/2018/03/1-colaboracao.jpg',
  email: 'saberviverrecife@gmail.com',
  gender: Gender.male,
  interests: [Interest.animals, Interest.ecology],
  phone: '81940028922',
  bio: 'É uma instituição privada sem fins lucrativos, fundada em 1983, situada na Ilha de Deus no Recife. Estamos em uma comunidade muito pobre onde a maioria dos moradores são pescadores.',
  role: 'org',
  address: EMPTY_ADDRESS,
};

const CONFIG = {
  issuer: 'https://accounts.google.com',
  scopes: ['openid', 'profile', 'email'],
  clientId:
    '613674537010-ivmeahrd1g3l78gtckt9h7d093bog5ge.apps.googleusercontent.com',
  // (Platform.OS === 'ios'
  //   ? process.env.GOOGLE_OAUTH_IOS_CLIENTID
  //   : process.env.GOOGLE_OAUTH_ANROIDD_CLIENTID) ?? '',
};

const AuthContext = createContext({} as AuthContextData);

export const useAuth = (): AuthContextData => useContext(AuthContext);

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const isLoggedIn = useMemo(() => Boolean(user), [user]);
  const [isGuest, setIsGuest] = useState(false);
  const isInsideApp = useMemo(
    () => isLoggedIn || isGuest,
    [isLoggedIn, isGuest]
  );
  const [registered, setRegistered] = useState<registeredType | null>(null);
  const [googleToken, setGoogleToken] = useState<string | null>(null);
  const enterAsGuest = useCallback(() => setIsGuest(true), []);
  const logout = useCallback(() => {
    if (isGuest) setIsGuest(false);
    if (user) setUser(null);
  }, [isGuest, user]);

  const StorageKey = '@colaebora:GoogleOAuthKey';

  const cacheAuthAsync = useCallback(
    async (authState) =>
      AsyncStorage.setItem(StorageKey, JSON.stringify(authState ?? '')),
    []
  );

  const signInAsync = useCallback(async () => {
    const authState = await AppAuth.authAsync(CONFIG);
    await cacheAuthAsync(authState);
    const colaResponse = await AuthService.googleLogin(
      authState.idToken as string
    );
    if (colaResponse?.status === 404) {
      setRegistered('isNotRegistered');
      setGoogleToken(authState.idToken);
    }
    if (colaResponse?.status === 200) {
      setRegistered('isRegistered');
    }
    return colaResponse;
  }, [cacheAuthAsync]);

  const checkIfTokenExpired = useCallback(
    ({ accessTokenExpirationDate }) =>
      new Date(accessTokenExpirationDate) < new Date(),
    []
  );

  const refreshAuthAsync = useCallback(
    async ({ refreshToken }) => {
      const authState = await AppAuth.refreshAsync(CONFIG, refreshToken);
      console.log('refreshAuth', authState);
      await cacheAuthAsync(authState);
      return authState;
    },
    [cacheAuthAsync]
  );

  const getCachedAuthAsync = useCallback(async () => {
    const value = await AsyncStorage.getItem(StorageKey);
    if (value) {
      const authState = JSON.parse(value);
      if (checkIfTokenExpired(authState)) {
        return refreshAuthAsync(authState);
      }
      return authState;
    }
    return null;
  }, [checkIfTokenExpired, refreshAuthAsync]);

  const signOutAsync = useCallback(async ({ accessToken }) => {
    try {
      await AppAuth.revokeAsync(CONFIG, {
        token: accessToken,
        isClientIdProvided: true,
      });
      await AsyncStorage.removeItem(StorageKey);
    } catch (e) {
      alert(`Failed to revoke token: ${e.message}`);
    }
  }, []);

  useEffect(() => {
    (async () => {
      const cachedAuth = await getCachedAuthAsync();
      if (cachedAuth && !user) {
        setUser(cachedAuth);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGoogleLogin = useCallback(async (): Promise<void> => {
    await signInAsync();
  }, [signInAsync]);

  // const handleOrgLogin = useCallback(async (): Promise<boolean> => {
  //   setUser(MOCK_ORG);
  //   return true;
  // }, []);

  const data: AuthContextData = {
    isGuest,
    isLoggedIn,
    enterAsGuest,
    isInsideApp,
    logout,
    user,
    handleGoogleLogin,
    // handleOrgLogin,
    registered,
    googleToken,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
