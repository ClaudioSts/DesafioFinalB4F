import Head from "next/head";
import Image from "next/image";
import React from "react";
import Button from "@mui/material/Button";
//import signUpCompanies from "../styles/signUpCompanies.css";

export default function SignUpCompanies() {
  const [data, setData] = React.useState({
    username: "",
    email: "",
    NIF: "",
    password: "",
    passwordConfirmation: "",
  });

  const { username, email, NIF, password, passwordConfirmation } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const login = "/api/signup/company";

    const answer = await fetch(login, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        NIF: data.NIF,
        password: data.password,
        passwordConfirmation: data.passwordConfirmation,
      }),
    });

    if (answer.status === 400) {
      const json = await answer.json();
      let errorMessage = json.message + "\n";
      let errors = json.errors;
      for (const [key, value] of Object.entries(errors)) {
        errorMessage += `\n${value}`;
      }
      alert(errorMessage);
      // alert("Invalid data. Please verify parameters.");
    }

    if (answer.status === 201) {
      alert("Company account created successfully!");
      window.location = "/";
    }
  };

  return (
    <div className="signupCompany">
      <div>
        <form onSubmit={submitHandler}>
          <h1
            style={{
              color: "#1976d2",
              display: "flex",

              flexDirection: "column",
            }}
          >
            SignUp Company
          </h1>
          <div>
            Name:
            <br />
            <input
              type="text"
              name="username"
              placeholder="username"
              required
              value={username}
              onChange={changeHandler}
              style={{ width: "70%", height: "2rem" }}
            />
            <br />
          </div>
          <div>
            Email:
            <br />
            <input
              name="email"
              placeholder="email"
              required
              value={email}
              onChange={changeHandler}
              style={{ width: "70%", height: "2rem" }}
            />
            <br />
          </div>
          <div>
            NIF:
            <br />
            <input
              name="NIF"
              type="text"
              maxLength="9"
              placeholder="NIF"
              required
              value={NIF}
              onChange={changeHandler}
              style={{ width: "70%", height: "2rem" }}
            />
            <br />
          </div>
          <div>
            Password:
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={changeHandler}
              style={{ width: "70%", height: "2rem" }}
            />
            <br />
          </div>
          <div>
            Confirm Password:
            <br />
            <input
              type="password"
              name="passwordConfirmation"
              placeholder="Confirm Password"
              required
              value={passwordConfirmation}
              onChange={changeHandler}
              style={{ width: "70%", height: "2rem" }}
            />
            <br />
            <br />
          </div>
          <div>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              size="small"
              sx={{ borderRadius: 28 }}
            >
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
