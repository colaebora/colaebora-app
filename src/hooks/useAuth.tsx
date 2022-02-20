import { User } from '@ts/entities/User';
import { Gender } from '@ts/enums/Gender';
import { Interest } from '@ts/enums/Interest';
import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type AuthContextData = {
  isGuest: boolean;
  isLoggedIn: boolean;
  isInsideApp: boolean;
  enterAsGuest: () => void;
  logout: () => void;
  handleGoogleLogin: () => Promise<boolean>;
  handleOrgLogin: () => Promise<boolean>;
  user: User | null;
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

  const enterAsGuest = useCallback(() => setIsGuest(true), []);
  const logout = useCallback(() => {
    if (isGuest) setIsGuest(false);
    if (user) setUser(null);
  }, [isGuest, user]);

  const handleGoogleLogin = useCallback(async (): Promise<boolean> => {
    const mockUser: User = {
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
    };
    setUser(mockUser);
    return true;
  }, []);

  const handleOrgLogin = useCallback(async (): Promise<boolean> => {
    const mockOrg: User = {
      id: 1,
      name: 'Saber Viver',
      photo:
        'http://mundocarreira.com.br/wp-content/uploads/2018/03/1-colaboracao.jpg',
      email: 'saverviverrecife@gmail.com',
      gender: Gender.male,
      interests: [Interest.animals, Interest.ecology],
      phone: '81940028922',
      bio: 'É uma instituição privada sem fins lucrativos, fundada em 1983, situada na Ilha de Deus no Recife. Estamos em uma comunidade muito pobre onde a maioria dos moradores são pescadores.',
      role: 'org',
    };
    setUser(mockOrg);
    return true;
  }, []);

  const data: AuthContextData = {
    isGuest,
    isLoggedIn,
    enterAsGuest,
    isInsideApp,
    logout,
    user,
    handleGoogleLogin,
    handleOrgLogin,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
