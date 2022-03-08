import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../store/UserContext";
import Header from "./Header";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const userContext=useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    };
    fetch(
      "https://smapi.eu-west-3.elasticbeanstalk.com/user/token",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        if (isLoading === false) {
          const message = data.message;
          if (message === "Username or password is incorrect") {
            alert("Invalid credentials")
            setIsLoading(true);
          } else {
            userContext.login(data)
            if (data.roleId != null) {
              navigate("/profile");
            }
          }
        }
      });
  }, [isLoading]);
   function SubmitHandler(event) {
    event.preventDefault();
    setIsLoading(false);
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
        <button onClick={SubmitHandler} className="btn btn-dark">
          Log In
        </button>
      </div>
    </>
  );
}

export default LoginPage;
