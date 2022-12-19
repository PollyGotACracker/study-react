import { useCallback, useState } from "react";
import uuid from "react-uuid";
import "../css/TodoMain.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { todoListData } from "../data/TodoData";

const TodoMain = (props) => {
  const [TodoListData, SetTodoListData] = useState(todoListData);
  const [TodoItemData, SetTodoItemData] = useState({
    t_id: uuid(),
    t_complete: false,
  });

  const InsertItem = useCallback(() => {
    SetTodoListData([...TodoListData, TodoItemData]);
    // TodoItem id 값 초기화
    SetTodoItemData({ ...TodoItemData, t_id: uuid() });
  });

  // cf) setState()에 값을 전달할 경우
  // 괄호 안에 spread 하지 않으면 제대로 동작하지 않음
  const toggleItem = (e) => {
    const target = e.target;
    const id = target.dataset.id;
    target.classList.toggle("complete");
    const setComplete = TodoListData.map((item) => {
      if (item.t_id === id) {
        item = { ...item, t_complete: !item.t_complete };
      }
      return item;
    });
    SetTodoListData([...setComplete]);
  };

  const deleteItem = (e) => {
    const target = e.target.nextSibling;
    const id = target.dataset.id;
    if (!window.confirm("이 일정을 삭제할까요?")) {
      return false;
    } else {
      const setRemove = TodoListData.filter((item) => item.t_id !== id);
      SetTodoListData([...setRemove]);
    }
  };

  return (
    <section className="Main">
      <header className="Main header">오늘 할 일</header>
      <main className="Main container">
        <TodoInput
          TodoItemData={TodoItemData}
          SetTodoItemData={SetTodoItemData}
          InsertItem={InsertItem}
        />
        <TodoList
          TodoListData={TodoListData}
          toggleItem={toggleItem}
          deleteItem={deleteItem}
        />
      </main>
    </section>
  );
};

export default TodoMain;
