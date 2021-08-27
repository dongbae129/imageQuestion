import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ImageContext } from "../context/ImageContext";
import { onChangeState } from "./RegisterPage";
function LoginPage(): JSX.Element {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useContext(AuthContext);

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await axios.post(
      "http://localhost:5000/api/user/login",
      {
        name,
        username,
        password,
      },
      {
        withCredentials: true,
      }
    );
    setAuth({
      userId: result.data.id,
      username: result.data.username,
    });
  };
  return (
    <div>
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
          <button type="submit">로그인</button>
        </form>
      </div>
    </div>
  );
}
export default LoginPage;
