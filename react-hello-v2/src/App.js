import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Body from "./components/Body";
import Input from "./components/Input";
import { useState } from "react";

const App = () => {
  /**
   * react 의 useState 를 이용하여 상태변수와 상태함수 만들기
   * student 는 상태변수, setStudent 는 상태함수
   *
   * 상태변수 = 화면에 값을 표현(rendering)하는 변수
   * 상태함수 = 상태변수를 바꾸는 함수
   */

  // react 의 useState import
  // useState() Hook의 인자로 state 초기값을 넘긴다(() 안의 데이터).
  // [state 변수, 해당 변수를 갱신하는 함수] 를 반환(destructuring)
  const [student, setStudent] = useState({
    name: "홍길동",
    dept: "컴퓨터공학",
    grade: 3,
    tel: "010-111-1111",
    addr: "광주광역시 북구",
  });

  // 홍길동 문자열을 저장할 st_name 변수를 선언
  // st_name 변수값을 변경할 setName 상태함수 선언
  const [st_name, setName] = useState("홍길동");

  const nameChange = (st_name) => {
    console.log("App.js", st_name);

    // setStudent() 함수 사용
    // 인수 전달 과정에서 spread Syntax 사용

    // 상태 객체 변수 student 의 값 변경
    // student.name = st_name;
    setStudent({ ...student, name: st_name });

    // 상태문자열 변수 st_name 의 값 변경
    // st_name= "이몽룡"
    // 화면에 표시되는 부분에 reRendering 요청
    setName("이몽룡");
  };

  // 변수의 값 또는 함수 자체를 전달(std, nameChange)
  return (
    <div className="App">
      <Header />
      <Nav />
      <Body std={student} />
      <Input nameChange={nameChange} />
    </div>
  );
};

export default App;
