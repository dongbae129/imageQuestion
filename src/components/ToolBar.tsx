import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../css/ToolBar.css";
const ToolBar = (): JSX.Element => {
  const [auth, setAuth] = useContext(AuthContext);
  const onClickLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/user/logout",
        {},
        {
          withCredentials: true,
        }
      );
      setAuth(null);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="ToolBarWrap">
      <button>
        <Link to="/">HOME</Link>
      </button>
      {auth.username ? (
        <button onClick={onClickLogout}>LOGOUT</button>
      ) : (
        <>
          <button>
            <Link to="/login">LOGIN</Link>
          </button>
          <button>
            <Link to="/register">REGISTER</Link>
          </button>
        </>
      )}
    </div>
  );
};
export default ToolBar;
