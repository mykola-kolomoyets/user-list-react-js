import React, { useState } from "react";

import { UserForm, UserList } from "./components";

function App() {
  const [users, setUsers] = useState([]);

  const onSubmitHandler = (newUser) => {
    setUsers((prev) => [...prev, newUser]);
  };

  return (
    <div className="container">
      <UserForm onSubmit={onSubmitHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
