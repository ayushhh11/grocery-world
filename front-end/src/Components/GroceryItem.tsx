// src/components/GroceryItem.tsx
import React from 'react';

interface GroceryItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const GroceryItem: React.FC<GroceryItemProps> = ({ id, name, price, quantity }) => {
  return (
    <div className="border p-4 mb-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p>Price: ${price}</p>
      <p>Available Quantity: {quantity}</p>
      {/* Add buttons for actions (book for user, edit/remove for admin) */}
    </div>
  );
};

export default GroceryItem;
