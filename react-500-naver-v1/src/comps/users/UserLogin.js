import { useUserContext } from "../../context/UserContextProvider";

const UserLogin = () => {
  const { loginUser, setLoginUser, userLogin } = useUserContext();

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
        name="username"
        value={loginUser.username}
        placeholder="USERNAME"
        className="w3-input"
        onChange={onChangeHandler}
      />
      <input
        name="password"
        value={loginUser.password}
        placeholder="PASSWORD"
        className="w3-input"
        type="password"
        onChange={onChangeHandler}
      />
      <button
        className="w3-button w3-orange w3-block w3-round w3-padding-16 w3-margin-top"
        onClick={() => {
          userLogin();
        }}
      >
        로그인
      </button>
    </div>
  );
};

export default UserLogin;
