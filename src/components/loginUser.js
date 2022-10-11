import Button from '@mui/material/Button';
import { useState } from 'react';


export default function LoginUser() {


  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const { email, password } = data

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const submitHandler = e => {
    e.preventDefault();
    console.log(data);

    const login = "/api/login/user"

    fetch(login, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password
  })
    })
  }

  return (
    <div>
      <div>
        <div>
          <h1 style={{ color: "#1976d2" }}> User</h1>
        </div>
        <form onSubmit={submitHandler}>
          <div >
            Email:
            <br />
            <input
              type="text"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={changeHandler}
            />
            <br />
          </div>
          <div >
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
          <br />
          <Button type="submit" variant='outlined' color='primary' size="small" sx={{ borderRadius: 28 }} >Login</Button>
          <br /><br />
          <span>
            <a href="#" target="_blank" color="purple">
              Forgot Your Password?
            </a>
            <br />
            <a href="#">Not a user?</a>
          </span>
        </form>
      </div>
    </div>
  );
}
