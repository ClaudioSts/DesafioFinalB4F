import Head from "next/head";
import Image from "next/image";
//import signUpCompanies from "../styles/signUpCompanies.css";

export default function SignUpCompanies() {
  return (
    <div className="Main">
      <div className="signCompanies">
        <div className="companiesHead">
          <h1> SignUp Company</h1>
        </div>
        <form>
          <div className="userId">
            Name:
            <br />
            <input id="username" name="username" placeholder="username" />
            <br />
          </div>
          <div className="userId">
            NISS:
            <br />
            <input id="niss" name="niss" placeholder="NISS" required />
            <br />
          </div>
          <div className="pswdUser">
            Password:
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
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
