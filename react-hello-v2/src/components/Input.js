// 한 줄의 코드는 중괄호와 return 을 생략 가능
// App.js 내 input component 의 nameChange 를 인자로 받음
const Input = ({ nameChange }) => {
  const nameChangeHandler = (e) => {
    // e.target.value 는 handler 가 설정된 input 의 value
    const st_name = e.target.value;
    // console.log(st_name);
    nameChange(st_name);
  };

  // HTML tag에 inline 방식으로 JS 함수 삽입
  return (
    <input
      onChange={nameChangeHandler}
      name="st_name"
      placeholder="이름을 입력하세요"
    />
  );
};

export default Input;
