import { useState, useCallback } from "react";
import { InitData } from "../data/InitData";
import moment from "moment";
import "../css/Todo.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoMain = () => {
  const [todoContentList, setTodoContentList] = useState([]);

  const todoInsert = useCallback((t_content) => {
    // 함수를 불러왔으므로 실행한 값을 spread
    const data = { ...InitData(), t_content };
    setTodoContentList([...todoContentList, data]);
  });

  const todoDelete = useCallback((uid) => {
    const removeList = todoContentList.filter((item) => {
      return item.id !== uid;
    });
    setTodoContentList(removeList);
  });

  const todoComplete = useCallback((uid) => {
    const completeList = todoContentList.map((item) => {
      if (item.id === uid) {
        // 완료 버튼을 클릭했을 때
        // 완료 일자, 시각이 세팅되어 있으면 clear, 그렇지 않으면 다시 세팅
        item.e_date = item.e_date ? "" : moment().format("YYYY[-]MM[-]DD");
        item.e_time = item.e_time ? "" : moment().format("HH:mm:ss");
      }
      return item;
    });
    setTodoContentList(completeList);
  });

  return (
    <div className="Todo">
      <TodoInput todoInsert={todoInsert} />
      <TodoList
        todoContentList={todoContentList}
        todoDelete={todoDelete}
        todoComplete={todoComplete}
      />
    </div>
  );
};

export default TodoMain;
