import { User } from '@ts/User';
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
      name: 'José Henrique Leão',
      photo: 'https://github.com/jhleao.png',
    };
    setUser(mockUser);
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
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
