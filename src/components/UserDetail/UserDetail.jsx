import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./UserDetail.css";
const UserDetail = () => {
  const [user, setUser] = useState([]);
  const [show, setShow] = useState(false);
  const params = useParams();
  const userId = parseInt(params.id);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => {
        const foundUser = data.data.find((user) => user.id === userId);
        setUser(foundUser);
      });
  }, []);

  const handleId = () => {
    setShow(!show);
  };

  return (
    <>
      <img src={user.avatar} alt="" />
      <h2>
        {user.first_name} {user.last_name}
      </h2>
      <p>{user.email}</p>
      <button onClick={handleId}>{show ? user.id : <p>Id</p>}</button>
    </>
  );
};

export default UserDetail;
