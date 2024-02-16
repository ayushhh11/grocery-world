// src/App.tsx
import React from 'react';
import Header from './components/Header';
import { AppProvider } from './context/AppContext';
import AdminPanel from './components/AdminPanel';
import UserPanel from './components/UserPanel';

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="container mx-auto p-4">
        <Header />
        <hr className="my-4" />
        <div>{/* Render AdminPanel or UserPanel based on the role */}</div>
      </div>
    </AppProvider>
  );
};

export default App;
