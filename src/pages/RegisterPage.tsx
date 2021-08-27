import axios from "axios";
import React, { useState } from "react";
import "../css/Register.css";

export const onChangeState =
  (setState: React.Dispatch<React.SetStateAction<string>>) =>
  (e: React.ChangeEvent<HTMLInputElement>) =>
    setState(e.target.value);

const RegisterPage = (): JSX.Element => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/user", {
      name,
      username,
      password,
    });
  };
  return (
    <div className="register">
      <h3>Register</h3>
      <form className="registerwrap" onSubmit={onSubmitForm}>
        <input type="text" value={name} onChange={onChangeState(setName)} />
        <input
          type="text"
          value={username}
          onChange={onChangeState(setUsername)}
        />
        <input
          type="password"
          value={password}
          onChange={onChangeState(setPassword)}
        />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};
export default RegisterPage;
