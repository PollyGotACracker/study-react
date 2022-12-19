import "../css/TodoInput.css";

const TodoInput = (props) => {
  const { TodoItemData, SetTodoItemData, InsertItem } = props;

  const onChangeHandler = (e) => {
    const value = e.target.value;
    SetTodoItemData({ ...TodoItemData, t_content: value });
  };

  const onClickHandler = (e) => {
    const input = e.target.previousSibling;
    InsertItem();
    input.value = "";
    input.focus();
  };

  return (
    <div className="Insert">
      <input className="Insert input" onChange={onChangeHandler} />
      <button className="Insert btn" onClick={onClickHandler}>
        추가
      </button>
    </div>
  );
};

export default TodoInput;
