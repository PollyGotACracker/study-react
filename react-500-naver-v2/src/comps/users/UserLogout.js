/**
 * UserLogout 컴포넌트는 무엇인가 보여주는 역할이 아니다.
 * 로그아웃 메뉴를 클릭하면 실제 로그아웃을 실행하고
 * root(/) 로 redirect 를 실행할 것이다.
 *
 * MainRouter.js 의 loader 에서 userLogoutSend 호출 ->
 * loader 에서 return "LOGOUT" 하면 useLoaderData() 에 담김
 * (이때 return 되는 곳은 element 로 지정된 컴포넌트이다.)
 */

import { useEffect } from "react";
import { useUserContext } from "../../context/UserContextProvider";
import { logout } from "../../service/auth.service";
import { useLoaderData, useNavigate } from "react-router-dom";
import { User } from "../../models/User";

export const userLogoutSend = () => {
  logout();
};

const UserLogout = () => {
  const { setSessionUser } = useUserContext();
  const navigate = useNavigate();
  const param = useLoaderData();

  useEffect(() => {
    (async () => {
      if (param === "LOGOUT") {
        setSessionUser(new User());
        navigate("/");
      }
    })();
  }, [setSessionUser, param, navigate]);
};

export default UserLogout;
