import { useBBSContext } from "../context/BBSContextProvider";

console.log("선언부");

/**
 * JS 코드의 Top Level Area
 * 여기는 전체적으로 사용하는 변수, 함수를 선언하는 곳
 * 물론 여기에서 어떤 코드를 실행할 수도 있지만
 * 보통은 선언부만 작성한다.
 */
const clickHandler = () => {
  // 함수 실행 전에는 console X
  console.log("clickHandler");
};

const BBS = () => {
  // comps header 의 코드들은 Top Down 방식으로 실행된다.
  console.log("Comps Header");
  const { username, book, counter, onCounterClickHandler } = useBBSContext();

  return (
    <>
      <h1>여기는 BBS 메인 화면</h1>
      <h2>{username}</h2>
      {console.log("Comps Body")}
      <h2 onClick={onCounterClickHandler}>counter: {counter}</h2>
      <h2>도서명: {book.title}</h2>
    </>
  );
};

export default BBS;
