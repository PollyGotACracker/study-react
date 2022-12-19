import { useCallback, useEffect } from "react";
import "../css/TodoList.css";

const TodoList = (props) => {
  const { TodoListData, toggleItem, deleteItem } = props;

  // cf) key는 반복되는 요소의 최상위에 존재해야 한다.
  // cf) 같은 이벤트를 부모요소와 자식요소 동시에 걸지 말 것
  return (
    <ul className="TodoList">
      {TodoListData?.map((item) => {
        return (
          <div className="Item" key={item.t_id}>
            <button className="delete" onClick={deleteItem}>
              &#10060;
            </button>
            <span
              data-id={item.t_id}
              data-complete={item.t_complete}
              onClick={toggleItem}
            >
              {item.t_content}
            </span>
          </div>
        );
      })}
    </ul>
  );
};
export default TodoList;
