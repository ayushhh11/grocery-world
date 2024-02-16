// src/components/BookGroceriesForm.tsx
import React, { useState } from 'react';
import { bookGroceries } from '../services/api';

const BookGroceriesForm: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await bookGroceries({ groceryIds: selectedItems });
    // Refresh the grocery list or update the state accordingly
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-lg font-semibold mb-2">Book Groceries</h3>
      {/* Implement logic to display available groceries and allow users to select them */}
      {/* Add checkboxes or any UI elements for selecting items */}
      <button type="submit" className="bg-green-500 text-white p-2 mt-2">
        Book Selected Groceries
      </button>
    </form>
  );
};

export default BookGroceriesForm;
