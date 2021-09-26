import React, { useState, useRef } from "react";
import "./user-form.styles.css";

import { Input, Button, Modal } from "./../UI";

const UserForm = (props) => {
  // const [username, setUsername] = useState("");
  // const [age, setAge] = useState("");
  const [isError, setIsError] = useState(false);

  const usernameRef = useRef();
  const ageRef = useRef();

  // const onChangeUsernameHandler = (event) => {
  //   setUsername(event.target.value);
  // };

  // const onChangeAgeHandler = (event) => {
  //   setAge(event.target.value);
  // };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    const age = ageRef.current.value;
    if (!username.length || !age.length) {
      setIsError(true);
      return;
    }
    if (!username.length || !age.length) {
      setIsError(true);
      return;
    }
    props.onSubmit({ username, age });
    // setUsername("");
    // setAge("");
    usernameRef.current.value = "";
    ageRef.current.value = "";
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
          // value={username}
          // onChange={onChangeUsernameHandler}
          reference={usernameRef}
        />
        <Input
          id="age"
          label="Age"
          type="number"
          placeholder="Enter Age"
          // value={age}
          // onChange={onChangeAgeHandler}
          reference={ageRef}
        />
        <Button type="submit" label="Add User" />
      </form>
    </>
  );
};

export { UserForm };
