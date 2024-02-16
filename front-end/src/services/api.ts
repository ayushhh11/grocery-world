// src/services/api.ts
const BASE_URL = 'http://localhost:3000'; // Adjust based on your server configuration

export const getGroceryList = async () => {
  const response = await fetch(`${BASE_URL}/user/grocery-list`);
  return response.json();
};

export const addGrocery = async (data: { name: string; price: number }) => {
  const response = await fetch(`${BASE_URL}/admin/add-grocery`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

// Implement other API functions for remove, update, manage inventory, book groceries, etc.
