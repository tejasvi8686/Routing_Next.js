'use client'
import { useEffect, useState } from "react";

const User = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    async function getUser() {
      const userData = await fetch("https://jsonplaceholder.typicode.com/users");
    
      setUser(await userData.json());
    }
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
