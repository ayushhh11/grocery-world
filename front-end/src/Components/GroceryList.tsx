// src/components/GroceryList.tsx
import React, { useEffect, useState } from 'react';
import { getGroceryList } from '../services/api';
import GroceryItem from './GroceryItem';

const GroceryList: React.FC = () => {
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {
    const fetchGroceries = async () => {
      const data = await getGroceryList();
      setGroceries(data);
    };

    fetchGroceries();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Available Grocery Items</h2>
      {groceries.map((grocery) => (
        <GroceryItem key={grocery.id} {...grocery} />
      ))}
    </div>
  );
};

export default GroceryList;
