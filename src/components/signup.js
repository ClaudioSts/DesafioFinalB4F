import Head from "next/head";
import Image from "next/image";
import signUpUser from "../styles/signUpUser.css";

export default function Home() {
  return (
    <div className="signUpUser">
      <div className="userHead">
        <h1> User</h1>
      </div>
      <form>
        <div className="userId">
          User:
          <br />
          <input id="username" name="username" placeholder="" />
          <br />
        </div>
        <div className="userId">
          Mail:
          <br />
          <input id="userMail" name="userMail" placeholder="" />
          <br />
        </div>
        <div className="pswdUser">
          Password:
          <br />
          <input type="password" id="password" name="password" placeholder="" />
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