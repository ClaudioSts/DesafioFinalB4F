import Head from "next/head";
import Image from "next/image";
//import signUpUser from "../styles/signUpUser.css";
import React from "react";
import Button from "@mui/material/Button";

export default function SignUpUser() {
  const [data, setData] = React.useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const { username, email, password, passwordConfirmation } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(data);

    const login = "/api/signup/user";

    const answer = await fetch(login, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: data.username,
        email: data.email,
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
    }

    if (answer.status === 201) {
      alert("User account created successfully!");
      window.location = "/";
    }
  };

  return (
    <div style={modalStyle}>
      <div>
        <div>
          <form onSubmit={submitHandler}>
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
              />
              <br />
            </div>
            <div>
              Email:
              <br />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={email}
                onChange={changeHandler}
              />
              <br />
            </div>
            <div>
              Password:
              <br />
              <input
                type="password"
                name="password"
                placeholder="password"
                required
                value={password}
                onChange={changeHandler}
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
                value={passwordConfirmation}
                onChange={changeHandler}
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
    </div>
  );
}
