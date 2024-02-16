// src/components/UserPanel.tsx
import React from 'react';
import GroceryList from './GroceryList';
import BookGroceriesForm from './BookGroceriesForm';

const UserPanel: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">User Panel</h2>
      <GroceryList />
      <BookGroceriesForm />
    </div>
  );
};

export default UserPanel;
