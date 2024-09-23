'use client'
import { useEffect, useState } from "react";

const User = () => {
  const [users, setUsers] = useState([]); // Updated to setUsers for better naming consistency
  
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data); // Ensure we're setting the response data properly
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    
    getUser();
  }, []);
  
  return (
    <>
      <h2>User List | Fetch Data API</h2> 
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username}
          </li>
        ))}
      </ul>
    </>
  );
};

export default User;
