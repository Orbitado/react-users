import React, { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.data));
  }, []);

  return (
    <h1>
      {users.map((user) => (
        <ul key={user.id}>
          <Link to={`/${user.id}`}>
            {user.first_name} {user.last_name}
          </Link>
        </ul>
      ))}
    </h1>
  );
};

export default App;
