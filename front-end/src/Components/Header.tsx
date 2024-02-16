// src/components/Header.tsx
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Header: React.FC = () => {
  const { role, toggleRole } = useContext(AppContext);

  return (
    <div className="bg-gray-800 p-4 text-white">
      <h1 className="text-2xl font-bold">Grocery World</h1>
      <button className="text-sm p-2 bg-gray-600" onClick={toggleRole}>
        Switch to {role === 'admin' ? 'User' : 'Admin'}
      </button>
    </div>
  );
};

export default Header;
