export default function LoginUser() {
  return (
    <div className="Main">
      <div className="loginUser">
        <div className="headuser">
          <h1> User</h1>
        </div>

        <form>
          <div className="userId">
            User:
            <br />
            <input
              id="username"
              name="username"
              placeholder="Username"
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
              placeholder="Password"
              required
            />
            <br />
          </div>
          <button type="submit" className="button">
            Login
          </button>
          <br />
          <span>
            <a href="#" target="_blank" color="purple">
              Forgot Your Password?
            </a>
            <br />
            <a href="#">Not a user?</a>
          </span>
        </form>
      </div>
    </div>
  );
}
