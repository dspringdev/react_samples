import React, { useState } from "react";
import "./App.css";

function App(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <React.Fragment>
      <div>
        First Name: <br />
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <br />
        <h4>{firstName}</h4>
        <br />
        Last Name: <br />
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <br />
        <h4>{lastName}</h4>
      </div>
    </React.Fragment>
  );
}

export default App;
