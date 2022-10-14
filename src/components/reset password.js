import { Button } from "@mui/material";

export default function ResetPassword() {
  return (
    <div className="Reset">
      <form>
        <h1
          style={{
            color: "#1976d2",
          }}
        >
          Forgot Password
        </h1>
        Email:
        <br />
        <input
          type="text"
          name="email"
          placeholder="Email"
          required
          style={{ width: "70%", height: "2rem" }}
        />
        <br />
        <br />
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          size="small"
          sx={{ borderRadius: 28 }}
        >
          Reset Password
        </Button>
      </form>
    </div>
  );
}
