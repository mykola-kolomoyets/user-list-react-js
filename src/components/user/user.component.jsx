import React from "react";
import "./user.styles.css";

const User = (props) => {
  const {
    data: { username, age },
  } = props;
  return (
    <li className="user-item">
      <p>
        Username: <span>{username}</span>
      </p>
      <p>
        Age: <span>{age}</span>
      </p>
    </li>
  );
};

export { User };
