// Base URL
const BASE_URL = "https://jsonplaceholder.typicode.com";

// 📡 Fetch all users
export const fetchUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`);

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

// 📡 Fetch single user by ID
export const fetchUserById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};