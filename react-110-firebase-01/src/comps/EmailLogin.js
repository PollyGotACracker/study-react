import { Button, Container, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import { useFirebaseContext } from "../provider/FirebaseProvider";

const EmailLogin = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const { loginMsg, emailLogin } = useFirebaseContext();

  const onChangeHandler = useCallback(
    (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    },
    [setUser, user]
  );

  return (
    <Container fixed maxWidth="xl">
      <div>
        <TextField
          name="email"
          value={user.email}
          variant="outlined"
          fullWidth
          margin="dense"
          label="EMAIL"
          onChange={onChangeHandler}
          error={loginMsg.id === "email"}
          helperText={loginMsg.id === "email" ? loginMsg.message : ""}
        />
      </div>
      <div>
        <TextField
          name="password"
          value={user.password}
          variant="outlined"
          fullWidth
          margin="dense"
          label="PASSWORD"
          type="password"
          onChange={onChangeHandler}
          error={loginMsg.id === "password"}
          helperText={loginMsg.id === "password" ? loginMsg.message : ""}
        />
      </div>
      <div>
        {loginMsg.id !== "etc" ? <p>{loginMsg.message}</p> : <></>}
        <Button
          variant="outlined"
          onClick={() => {
            emailLogin(user);
          }}
        >
          Email 로그인
        </Button>
      </div>
    </Container>
  );
};

export default EmailLogin;
