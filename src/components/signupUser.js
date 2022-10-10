import Head from "next/head";
import Image from "next/image";
//import signUpUser from "../styles/signUpUser.css";

export default function SignUpUser() {
  return (
    <div className="signUpUser">
      <div className="userHead">
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
          Mail:
          <br />
          <input type="email" id="email" name="email" placeholder="" required />
          <br />
        </div>
        <div className="pswdUser">
          Password:
          <br />
          <input type="password" id="password" name="password" placeholder="" required />
          <br />
        </div>
        <div className="pswdUser">
          Confirm Password:
          <br />
           <input type="password" name="password" placeholder="Confirm Password" id="confirm_password" value="Submit" onclick="return Validate()" required />
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
