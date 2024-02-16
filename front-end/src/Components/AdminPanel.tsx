// src/components/AdminPanel.tsx
import React from 'react';
import AddGroceryForm from './AddGroceryForm';
import ManageInventory from './ManageInventory';

const AdminPanel: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Admin Panel</h2>
      <AddGroceryForm />
      <ManageInventory />
    </div>
  );
};

export default AdminPanel;
