import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


function Login() {
  
}
  


  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Log in to continue</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
          className="form-control"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className="form-control"
        />
        <br />
        <button onClick={Login} className="btn btn-dark">
          Log In
        </button>
      </div>
    </>
  );
}

export default LoginPage;
