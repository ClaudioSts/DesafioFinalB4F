import Button from "@mui/material/Button";
import { useState } from "react";
import CustomLinkWithModal from './modal/customLinkWithModal';
import SignUpCompanies from './signUpCompanies';



export default function LoginCompany() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);

    const login = "/api/login/company";

    fetch(login, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
  };

  return (
    <div>
      <div>
        <div>
          <h1 style={{ color: "#1976d2" }}>Company</h1>
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
            <CustomLinkWithModal linkTitle="Forgot your password?" modalTitle="Forgot Password">

            </CustomLinkWithModal>
            <br />
            <CustomLinkWithModal linkTitle="Not an user?" modalTitle="Sign Up Company">
              <SignUpCompanies></SignUpCompanies>
            </CustomLinkWithModal>
          </span>
        </form>
      </div>
    </div>
  );
}
