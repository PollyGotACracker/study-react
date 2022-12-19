import "../css/TodoInput.css";

const TodoInput = (props) => {
  const { TodoItemData, SetTodoItemData, insertItem, BtnMode } = props;

  const onChangeHandler = (e) => {
    const value = e.target.value;
    SetTodoItemData({ ...TodoItemData, t_content: value });
  };

  const initForm = (input) => {
    delete input?.dataset?.id;
    input.value = "";
    input.focus();
  };

  const onKeyDownHandler = (e) => {
    const input = e.target;
    const keyCode = e.keyCode;
    if (keyCode === 13) {
      e.preventDefault();
      if (input.value) {
        const id = input?.dataset?.id;
        insertItem(id);
        initForm(input);
      }
    }
  };

  const onClickHandler = (e) => {
    const input = e.target.previousSibling;
    if (input.value) {
      const id = input?.dataset?.id;
      insertItem(id);
      initForm(input);
    }
  };

  return (
    <form className="Form">
      <input
        className="Form input"
        placeholder="일정을 입력하세요..."
        spellCheck="false"
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
      />
      <button className="Form button" type="button" onClick={onClickHandler}>
        {BtnMode}
      </button>
    </form>
  );
};

export default TodoInput;
