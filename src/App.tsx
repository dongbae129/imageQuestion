import React from "react";
import { Route, Switch } from "react-router-dom";
import ToolBar from "./components/ToolBar";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
function App(): JSX.Element {
  console.log("App");
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", position: "relative" }}>
      <ToolBar />
      <Switch>
        <Route path="/login" component={LoginPage} exact />
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
