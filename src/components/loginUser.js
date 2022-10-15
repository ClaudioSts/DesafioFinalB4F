import Button from "@mui/material/Button";
import { height } from "@mui/system";
import { useState } from "react";
import CustomLinkWithModal from "./modal/customLinkWithModal";
import ResetPassword from "./reset password";
import SignUpUser from "./signupUser";

export default function LoginUser() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(data);

    const login = "/api/login/user";

    const answer = await fetch(login, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });

    if (answer.status === 200) {
      const json = await answer.json();
      localStorage.setItem("token", json.token);
      localStorage.setItem("username", json.username);
      window.location = "/";
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div>
      <div>
        <div>
          <h1
            style={{
              color: "#1976d2",
              display: "flex",
              alignItems: "left",
              justifyContent: "left",
            }}
          >
            {" "}
            User
          </h1>
        </div>
        <form onSubmit={submitHandler}>
          <div>
            Email:
            <br />
            <input
              type="text"
              name="email"
              placeholder="Email"
              required
              value={email}
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
          <br />
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            size="small"
            sx={{ borderRadius: 28 }}
          >
            Login
          </Button>
          <br />
          <br />
          <span display="flex" justifyContent="center" alignItems="center">
            <CustomLinkWithModal
              linkTitle="Forgot your password?"
              modalTitle=""
            >
              <ResetPassword />
            </CustomLinkWithModal>
            <br />
            <div className="linkSignup">
              <CustomLinkWithModal linkTitle="Not an user?" modalTitle="">
                <SignUpUser></SignUpUser>
              </CustomLinkWithModal>
            </div>
          </span>
        </form>
      </div>
    </div>
  );
}
