// src/context/AppContext.tsx
import React, { createContext, useState } from 'react';

type Role = 'admin' | 'user';

interface AppContextProps {
  role: Role;
  toggleRole: () => void;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC = ({ children }) => {
  const [role, setRole] = useState<Role>('user');

  const toggleRole = () => {
    setRole((prevRole) => (prevRole === 'admin' ? 'user' : 'admin'));
  };

  return <AppContext.Provider value={{ role, toggleRole }}>{children}</AppContext.Provider>;
};
