import Head from "next/head";
import Image from "next/image";
import signUpCompanies from "../styles/signUpCompanies.css";

export default function Home() {
  return (
    <div className="signCompanies">
      <div className="companiesHead">
        <h1> Form</h1>
      </div>
      <form>
        <div className="userId">
          Name:
          <br />
          <input id="username" name="username" placeholder="" required/>
          <br />
        </div>
        <div className="userId">
         NISS:
          <br />
          <input type="number" placeholder="x11" min="0" max="99999999999" required/>
          <br />
        </div>
        <div className="pswdUser">
          Password:
          <br />
          <input type="password" id="password" name="password" placeholder="" required/>
          <br />
        </div>
        <div className="pswdUser">
          Confirm Password:
          <br />
          <input type="password" name="password" placeholder="Confirm Password" id="confirm_password" required />
          <br />
        </div>
        <div>
          <button type="submit">Create/Login</button>
        </div>
        <div>
        <input type="button" value="Cancel" onclick="window.location=''"/>
        </div>
      </form>
    </div>
  );
}