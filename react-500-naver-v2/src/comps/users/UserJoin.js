import { useUserContext } from "../../context/UserContextProvider";

const UserJoin = () => {
  const { loginUser, setLoginUser, userLogin, inputRef } = useUserContext();

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
      <input
        name="repassword"
        value={loginUser.password}
        placeholder="비밀번호 확인"
        className="w3-input"
        type="password"
        onChange={onChangeHandler}
      />
      <input
        name="u_name"
        value={loginUser.u_name}
        placeholder="실제이름"
        className="w3-input"
        onChange={onChangeHandler}
      />
      <input
        name="u_nickname"
        value={loginUser.u_nickname}
        placeholder="별명"
        className="w3-input"
        onChange={onChangeHandler}
      />
      <input
        name="u_email"
        value={loginUser.u_email}
        placeholder="이메일"
        className="w3-input"
        type="email"
        onChange={onChangeHandler}
      />
      <input
        name="u_tel"
        value={loginUser.u_tel}
        placeholder="전화번호"
        type="tel"
        className="w3-input"
        onChange={onChangeHandler}
      />
      <input
        name="u_addr"
        value={loginUser.u_addr}
        placeholder="주소"
        className="w3-input"
        onChange={onChangeHandler}
      />
      <button className="w3-button w3-orange w3-block w3-round w3-padding-16 w3-margin-top">
        회원가입
      </button>
    </div>
  );
};

export default UserJoin;
