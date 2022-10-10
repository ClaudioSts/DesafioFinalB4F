import Head from "next/head";
import Image from "next/image";
//import signUpUser from "../styles/signUpUser.css";

export default function SignUpUser() {
  return (
    <div className="Main">
      <div className="signUpUser">
        <div className="user">
          <h1> SignUp User</h1>

          <form>
            <div className="userForm">
              Name:
              <br />
              <input
                id="username"
                name="username"
                placeholder="username"
                required
              />
              <br />
            </div>
            <div className="userId">
              Mail:
              <br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
              <br />
            </div>
            <div className="pswdUser">
              Password:
              <br />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                required
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
                id="confirm_password"
                value="Submit"
                onclick="return Validate()"
                required
              />
              <br />
            </div>
            <div>
              <button type="submit" className="button">
                Create/Login
              </button>
            </div>
            <div>
              <input
                type="button"
                value="Cancel"
                onclick="window.location=''"
                className="button"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
