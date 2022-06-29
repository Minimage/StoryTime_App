import React, { useState, useEffect } from "react";
import axios from "axios";

// https://jsonplaceholder.typicode.com/users
export const Data = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li id="name" key={user.id}>
            {user.name}
            {<br></br>}
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};
