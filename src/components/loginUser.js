import Button from '@mui/material/Button';

export default function LoginUser() {
  return (
    <div>
      <div>
        <div>
          <h1 style={{color: "#1976d2"}}> User</h1>
        </div>
        <form>
          <div >
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
          <div >
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
          <br />
          <Button type="submit" variant='outlined' color='primary' size="small" sx={ { borderRadius: 28 } } >Login</Button>
          <br /><br />
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
