import React, { useState } from "react";
import "./App.css";

function App(props) {
  const firstName = useFormInput("Dave");
  const lastName = useFormInput("Spring");

  return (
    <React.Fragment>
      <div>
        First Name: <br />
        <input {...firstName} />
        <br />
        <h4>{firstName}</h4>
        <br />
        Last Name: <br />
        <input {...lastName} />
        <br />
        <h4>{lastName}</h4>
      </div>
    </React.Fragment>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return { value, onChange: handleChange };
}

export default App;
