import { input } from "./input";
import React, { useState } from "react";
export default function LoginUser() {
  const [inputs, setInputs] = React.useState({
    User: "",
    Password: "",
  });
  return (
    <div className="loginUser">
      <div className="headuser">
        <h1> User</h1>
      </div>

      <form>
        <div className="userId">
          User:
          <br />
          <input id="username" name="username" onChange={inputs} />
          <br />
        </div>
        <div className="pswdUser">
          Password:
          <br />
          <input
            type="password"
            id="password"
            name="password"
            onChange={inputs}
          />
          <br />
        </div>
        <div className="button1">
          <button type="submit">Login</button>
        </div>
        <span>
          <a href="#" target="_blank" color="purple">
            Forgot Your Password?
          </a>
          <br />
          <a href="">Not a user?</a>
        </span>
      </form>
    </div>
  );
}
