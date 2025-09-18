import { Button, TextField } from "@mui/material";

function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      <TextField
        id="outlined-basic"
        label="email"
        variant="outlined"
        type="email"
      />
      <TextField
        id="outlined-basic"
        label="password"
        variant="outlined"
        type="password"
      />
      <Button variant="contained">Login</Button>
    </div>
  );
}

export default LoginPage;
