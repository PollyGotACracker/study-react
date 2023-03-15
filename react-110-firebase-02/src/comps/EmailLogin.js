import { Button, Container, TextField, Box } from "@mui/material";
import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuthContext } from "../firebase/AuthProvider";

const EmailLogin = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const { loginMsg, emailLogin } = useAuthContext();
  // ?변수=값 형식의 query 를 가져오는 함수
  const [queryString] = useSearchParams();
  // ?login=값 형식의 query 에서 값 부분을 추출하여 login 변수에 할당
  const login = queryString.get("login");

  const onChangeHandler = useCallback(
    (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    },
    [setUser, user]
  );

  return (
    <Container fixed maxWidth="xl">
      {login === "required" ? (
        <Box
          component={"div"}
          sx={{
            mt: "15px",
            mb: "20px",
            p: "16px",
            display: "block",
            backgroundColor: "red",
            borderRadius: "10px",
            color: "yellow",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          권한이 없습니다. 로그인 하세요.
        </Box>
      ) : (
        <></>
      )}
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
