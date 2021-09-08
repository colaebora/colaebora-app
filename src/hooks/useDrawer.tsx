import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useAuth } from './useAuth';

type DrawerContextData = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const DrawerContext = createContext({} as DrawerContextData);

export const useDrawer = (): DrawerContextData => useContext(DrawerContext);

export const DrawerProvider: FC = ({ children }) => {
  const { isInsideApp } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isInsideApp) close();
  }, [close, isInsideApp]);

  const data: DrawerContextData = {
    isOpen,
    open,
    close,
  };

  return (
    <DrawerContext.Provider value={data}>{children}</DrawerContext.Provider>
  );
};
