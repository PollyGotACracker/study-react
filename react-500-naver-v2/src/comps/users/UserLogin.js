import { useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContextProvider";
import { User } from "../../models/User";

const UserLogin = () => {
  const { loginUser, setLoginUser, userLogin, inputRef } = useUserContext();
  // <Navigate state="값" /> 을 사용하여 redirect 를 수행하면
  // state 에 저장된 path 값을 useLocation() 이 가지고 있다.
  const location = useLocation();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    /**
     * 계산된 property 를 활용하여
     * input tag 의 name 속성을 참조하여
     * 여러 개의 input change event 를 한 개로 처리하기
     */
    // setLoginUser({...loginUser, username:"polly"})
    setLoginUser({ ...loginUser, [name]: value });
  };

  const onClickHandler = async () => {
    await userLogin();
    // 100ms sleep
    await new Promise((r) => setTimeout(r, 100));
    await setLoginUser(new User()); // 로그인 입력박스 내용 지우기

    // cf) useNavigate() -> navigate()
    // 내 도서 페이지에서 로그인할 경우, 현재 페이지인 내 도서 페이지를 유지
    if (location?.state) navigate(location.state);
    else navigate("/");
  };

  return (
    <div className="w3-conatiner w3-padding-24 w3-center">
      <input
        ref={inputRef.usernameRef}
        name="username"
        value={loginUser.username}
        placeholder="USERNAME"
        className="w3-input"
        onChange={onChangeHandler}
      />
      <input
        ref={inputRef.passwordRef}
        name="password"
        value={loginUser.password}
        placeholder="PASSWORD"
        className="w3-input"
        type="password"
        onChange={onChangeHandler}
      />
      <button
        className="w3-button w3-orange w3-block w3-round w3-padding-16 w3-margin-top"
        onClick={onClickHandler}
      >
        로그인
      </button>
    </div>
  );
};

export default UserLogin;
