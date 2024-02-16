// src/components/AddGroceryForm.tsx
import React, { useState } from 'react';
import { addGrocery } from '../services/api';

const AddGroceryForm: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addGrocery({ name, price: parseFloat(price) });
    // Refresh the grocery list or update the state accordingly
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Add New Grocery Item</h3>
      <label className="block">
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border p-2" required />
      </label>
      <label className="block">
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="border p-2" required />
      </label>
      <button type="submit" className="bg-blue-500 text-white p-2 mt-2">
        Add Grocery
      </button>
    </form>
  );
};

export default AddGroceryForm;
