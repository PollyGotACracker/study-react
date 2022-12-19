import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXmark,
  faSquarePen,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import "../css/TodoList.css";

const TodoList = (props) => {
  const { TodoListData, toggleItem, selectItem, deleteItem } = props;

  // cf) key는 반복되는 요소의 최상위에 존재해야 한다.
  // cf) 같은 이벤트를 부모요소와 자식요소 동시에 걸지 말 것(이벤트 버블링)
  return (
    <ul className="TodoList">
      {TodoListData?.map((item) => {
        return (
          <li className="Item" key={item.t_id}>
            <button className="delete" onClick={deleteItem}>
              {<FontAwesomeIcon icon={faSquareXmark} />}
            </button>
            <button className="update" onClick={selectItem}>
              {<FontAwesomeIcon icon={faSquarePen} />}
            </button>
            <span
              data-id={item.t_id}
              data-complete={item.t_complete}
              onClick={toggleItem}
            >
              {item.t_content}
              <FontAwesomeIcon icon={faCheck} />
            </span>
          </li>
        );
      })}
    </ul>
  );
};
export default TodoList;
