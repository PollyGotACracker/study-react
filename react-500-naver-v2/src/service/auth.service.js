// server 에서 데이터를 가져올 때 사용하는 코드 모음
// user 데이터
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

export const logout = async () => {
  if (window.confirm("로그아웃할까요?")) return await fetch("/api/user/logout");
};

const Auth = { getLoginUser, setLogin, logout };
export default Auth;
