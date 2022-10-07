import Head from "next/head";
import Image from "next/image";
import loginUser from "../styles/loginUser.css";

export default function Home() {
  return (
    <div className="loginUser">
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
        <div className="pswdUser">
          Password:
          <br />
          <input type="password" id="password" name="password" placeholder="" />
          <br />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        <span>
          <a href="#"> Forgot Password?</a>
          <br />
          <a href="">Create account</a>
        </span>
      </form>
    </div>
  );
}
