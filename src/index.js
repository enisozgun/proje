import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContextProvider } from "./store/UserContext";
import { BrowserRouter } from "react-router-dom";
import { CourseContextProvider } from "./store/CourseContext";

ReactDOM.render(
  <CourseContextProvider>
    <UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </CourseContextProvider>,
  document.getElementById("root")
);
