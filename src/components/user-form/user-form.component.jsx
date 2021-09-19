import React, { useState } from "react";
import "./user-form.styles.css";

import { Input, Button, Modal } from "./../UI";

const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [isError, setIsError] = useState(false);

  const onChangeUsernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const onChangeAgeHandler = (event) => {
    setAge(event.target.value);
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    if (!username.length || !age.length) {
      setIsError(true);
      return;
    }
    props.onSubmit({ username, age });
    setUsername("");
    setAge("");
  };

  return (
    <>
      <Modal
        title="An Error occured"
        content="Enter valid data please"
        success={false}
        visible={isError}
        onClick={() => setIsError(false)}
      />
      <form className="user-form" onSubmit={onFormSubmitHandler}>
        <Input
          id="username"
          label="Username"
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={onChangeUsernameHandler}
        />
        <Input
          id="age"
          label="Age"
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={onChangeAgeHandler}
        />
        <Button type="submit" label="Add User" />
      </form>
    </>
  );
};

export { UserForm };
