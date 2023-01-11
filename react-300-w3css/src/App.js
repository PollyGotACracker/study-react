import styled from "styled-components";
import { useState, useRef } from "react";
import uuid from "react-uuid";
import TodoItem from "./TodoItem";

/**
 * JS backtick
 * 키워드 ` 어떤 내용, 문자열 등등 ` 과 같은 코드는
 * 키워드.setter(어떤 내용을 매개변수로 전달) 하는 JS 고유 코드
 *
 * cf)
 * 함수형 컴포넌트는 함수명을 컴포넌트의 이름으로 사용한다...
 * React Styled-Components(Tagged Template Literals) 를 사용,
 * 미리 디자인된 컴포넌트를 생성...
 *    const 함수명 = styled.a`...` 또는 styled('a')`...`
 *    HTML element tag 는 styled 객체의 helper method(method 처럼 작동)이다.
 *    여기서 template literal 은 함수의 인자인 문자열이다.
 */

// div tag 에 속성이 부여된 컴포넌트
// div box 를 만들고 자체적으로 className 을 생성하서 부착하고
// style sheet 를 별도로 분리하여 충돌하지 않도록 만든다.
// 또한 다른 3rd party css 와 충돌도 최소화 시켜준다.
const Box = styled.div`
  width: 50%;
  margin: 0 auto;
  border: 1px solid #aaa;
`;

// const Box = styled.create("div").setChunk(`
//   width: 50%;
//   margin: 0 auto;
//   border: 1px solid #aaa;
// `);

const getNewTodo = (v) => {
  console.log("newTodo", v);
  // enter 시 content 는 "" 로 초기화
  return {
    id: uuid(),
    content: "",
    complete: false,
  };
};

const App = () => {
  const inputRef = useRef(null);

  /**
   * todo state 를 최초로 만들 때
   * useState hook 에게 getNewTodo 함수를 전달했다.
   * getNewTodo() : 함수의 (return) 값
   * getNewTodo: 함수 자체를 보낸다, 함수의 Reference 를 보낸다.
   *    useState 가 내부에서 함수를 Callback 형식으로 실행하고
   *    결과를 받아서 state 를 최초로 만든다.
   *
   * useState() 함수를 잘못 사용하면
   *    state 변수가 무한반복으로 재생성되는 현상이
   *    발생하기도 한다.
   *    이때 직접 객체 값을 useState() 에서 사용하지 않고
   *    외부에서 함수를 만든 다음, reference 로 주입하면
   *    무한 반복 현상을 방지할 수 있다.
   */

  // input box 와 연관된 state 변수
  // useState 안의 callback 은 실행시키지 않는다(무한실행할 수 있음)
  const [todo, setTodo] = useState(getNewTodo);
  // 리스트로 보여질 state (배열)변수
  const [todoList, setTodoList] = useState([]);

  const todoDelete = (id) => {
    // 다음 명령문에 대하여 reFormat(자동정렬) 적용하지 않기
    // prettier-ignore
    const resultTodoList
     = todoList.filter((todo) => todo.id !== id);
    setTodoList([...resultTodoList]);
  };

  const todoComplete = (id) => {
    // Array.map : 대상이 되는 배열과 반환되는 배열의 길이는 같다.
    // id 가 같을 경우, item(todo) 객체에서 complete 값만 반전하고 나머지 속성은 spread
    // id 가 다를 경우, item 객체 그대로 반환
    // todoList 길이만큼 반복
    const resultTodoList = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    setTodoList([...resultTodoList]);
  };

  // todoList 데이터를 감시하고 있다가
  // 변화가 생기면 list 를 생성하라
  // todoList 를 화면에 보이도록 만들어라
  const todoListView = todoList.map((todo) => (
    <TodoItem
      className="w3-ul w3 border"
      key={todo.id}
      id={todo.id}
      complete={todo.complete}
      todoDelete={todoDelete}
      todoComplete={todoComplete}
      item={todo.content}
    />
  ));

  // input box 에 입력하는 text 를 todo state 에 담아라
  const onChangeHandler = (e) => {
    const value = e.currentTarget.value;
    setTodo({ ...todo, content: value });
  };

  // input box 에서 enter 가 입력되면
  // (todo 에 데이터가 담겨있을 것이다)
  // todo state 에 담겨있는 데이터를 todoList state 에 추가하라
  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      // cf) 새로 추가하는 todo 요소를 리스트의 앞에 놓으면 위에서부터 추가된다.
      setTodoList([todo, ...todoList]);
      inputRef.current.select();
      setTodo(getNewTodo("함수 호출"));
    }
  };

  return (
    <>
      <header className="w3-container w3-green w3-padding-16 w3-center">
        <h1>나의 홈페이지</h1>
        <p>나의 홈페이지 방문을 환영합니다</p>
      </header>
      <section className="w3-container w3-padding-16">
        <Box className="w3-card-4">
          <header className="w3-container w3-blue w3-center w3-padding-16 w3-sand">
            <input
              ref={inputRef}
              value={todo.content}
              onChange={onChangeHandler}
              onKeyDown={onKeyDownHandler}
              placeholder="TODO"
              className="w3-input w3-border w3-round-large"
            />
          </header>
          <div className="w3-container w3-padding-16 w3-ul">{todoListView}</div>
          <footer className="w3-container w3-blue w3-center w3-padding-16 w3-sand">
            <address>CopyRight &copy; bitterns96@gmail.com</address>
          </footer>
        </Box>
      </section>
    </>
  );
};

export default App;
