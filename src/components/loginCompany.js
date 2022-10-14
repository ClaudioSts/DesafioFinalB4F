import Button from "@mui/material/Button";
import { useState } from "react";
import CustomLinkWithModal from "./modal/customLinkWithModal";
import SignUpCompanies from "./signUpCompanies";

export default function LoginCompany() {
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

    const login = "/api/login/company";

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
      localStorage.setItem("isCompany", true);
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
            Company
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
              placeholder="password"
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
          <span>
            <CustomLinkWithModal
              linkTitle="Forgot your password?"
              modalTitle="Forgot Password"
            ></CustomLinkWithModal>
            <br />
            <CustomLinkWithModal linkTitle="Not an user?" modalTitle="">
              <SignUpCompanies></SignUpCompanies>
            </CustomLinkWithModal>
          </span>
        </form>
      </div>
    </div>
  );
}
