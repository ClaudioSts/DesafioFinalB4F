import Head from "next/head";
import Image from "next/image";
//import signUpUser from "../styles/signUpUser.css";

export default function SignUpUser() {


  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  })

  const {username, email, password, passwordConfirmation } = data

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const submitHandler = e => {
    e.preventDefault();
    console.log(data);

    const login = "/api/signup/user"

    fetch(login, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Username: data.username,
        email: data.email,
        password: data.password,
        passwordConfirmation: data.passwordConfirmation
  })
    })
  }

  return (
    <div className="Main">
      <div className="signUpUser">
        <div className="user">
          <h1>SignUp User</h1>

          <form onSubmit={submitHandler}>
            <div className="userForm">
              Name:
              <br />
              <input
                type="text"
                name="username"
                placeholder="username"
                required
                value={username}
              onChange={changeHandler}
              />
              <br />
            </div>
            <div className="userId">
              Email:
              <br />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={email}
              onChange={changeHandler}
              />
              <br />
            </div>
            <div className="pswdUser">
              Password:
              <br />
              <input
                type="password"
                name="password"
                placeholder="password"
                required
                value={password}
              onChange={changeHandler}
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
                value={passwordConfirmation}
                onChange={changeHandler}
              />
              <br />
            </div>
            <div>
              <button type="submit" className="button">
                Create Account
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
