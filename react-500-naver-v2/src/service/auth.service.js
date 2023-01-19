import { User } from "../models/User";

// login 된 사용자 정보 가져오기
const getLoginUser = async () => {
  const response = await fetch("/api/user/session");
  const result = await response.json();
  console.log("Session", result);
  if (result?.CODE_NUM > 200) return null;
  return result;
};

const setLogin = async (loginUser) => {
  const user = new User(loginUser.username, loginUser.password);

  const fetchOption = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  const response = await fetch("/api/user/login", fetchOption);
  const result = await response.json();
  // if (result?.CODE_NUM === 400 && result?.SUB_CODE === "USERNAME") {
  //   alert(`${loginUser.username} 은 가입된 사용자가 아닙니다.`);
  // } else if (result?.CODE_NUM === 400 && result?.SUB_CODE === "PASSWORD") {
  //   alert(`비밀번호를 확인해주세요.`);
  // } else {
  //   return result;
  // }

  return result;
};

const Auth = { getLoginUser, setLogin };
export default Auth;
