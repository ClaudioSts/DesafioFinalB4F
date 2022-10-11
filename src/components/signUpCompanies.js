import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Button from '@mui/material/Button';
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
    <div>
      <div>
        
        <form>
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
          <div >
            Email:
            <br />
            <input
              name="email"
              placeholder="email"
              required
              value={email}
              onChange={changeHandler} />
            <br />
          </div>
          <div >
            NIF:
            <br />
            <input
              name="NIF"
              type="text" 
              maxlength="9"
              placeholder="NIF"
              required
              value={NIF}
              onChange={changeHandler} />
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
            />
            <br />
          </div>
          <div>
          <Button type="submit" variant='outlined' color='primary' size="small" sx={{ borderRadius: 28 }} >Create Account</Button>
          </div>
      
        </form>
      </div>
    </div>
  );
}
