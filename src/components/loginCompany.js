export default function LoginCompany() {
  return (
    <div className="Main">
      <div className="loginCom">
        <div className="headcom">
          <h1> Company</h1>
        </div>

        <form>
          <div className="comId">
            Company:
            <br />
            <input
              id="username"
              name="username"
              placeholder="username"
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
