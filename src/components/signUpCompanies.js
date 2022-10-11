import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
//import signUpCompanies from "../styles/signUpCompanies.css";

export default function SignUpCompanies() {

  const [data, setData] = useState({
    username: "",
    email: "",
    NIF: "",
    password: "",
    passwordConfirmation: ""
  })

  const { username, email, NIF, password, passwordConfirmation } = data

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const submitHandler = e => {
    e.preventDefault();
    console.log(data);

    const login = "/api/signup/company"

    fetch(login, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Username: data.username,
        email: data.email,
        NIF: data.NIF,
        password: data.password,
        passwordConfirmation: data.passwordConfirmation
      })
    })
  }

  return (
    <div className="Main">
      <div className="signCompanies">
        <div className="companiesHead">
          <h1>SignUp Company</h1>
        </div>
        <form>
          <div className="userForm">
            Name:
            <br />
            <input
              type="text"
              name="username"
              placeholder="username"
              required
              value={username}
              onChange={changeHandler}
            />
            <br />
          </div>
          <div className="userId">
            Email:
            <br />
            <input
              id="username"
              name="username"
              placeholder="username"
              required
              value={email}
              onChange={changeHandler} />
            <br />
          </div>
          <div className="userId">
            NIF:
            <br />
            <input
              name="NIF"
              placeholder="NIF"
              required
              value={NIF}
              onChange={changeHandler} />
            <br />
          </div>
          <div className="pswdUser">
            Password:
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={changeHandler}
            />
            <br />
          </div>
          <div className="pswdUser">
            Confirm Password:
            <br />
            <input
              type="password"
              name="password"
              placeholder="Confirm Password"
              required
              value={passwordConfirmation}
              onChange={changeHandler}
            />
            <br />
          </div>
          <div>
            <button type="submit" className="button">
              Create Account
            </button>
          </div>
          <div>
            <button
              type="button"
              value="Cancel"
              onclick="window.location=''"
              className="button"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
