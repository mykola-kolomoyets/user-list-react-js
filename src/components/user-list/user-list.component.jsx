import React from "react";
import { User } from "./../user";

import "./user-list.styles.css";

const UserList = (props) => {
  const { users } = props;

  if (!users.length) return <p className="no-users">No users yet!</p>;

  const allUsers = users.map((user) => (
    <User data={user} key={Math.random().toString()} />
  ));

  return (
    <>
      <h2 className="users-title">All the users</h2>
      <ul className="user-list">{allUsers}</ul>
    </>
  );
};

export { UserList };
