import moment from "moment";
import { Container, TextField } from "@mui/material";
import { useState } from "react";
import { useAuthContext } from "../../firebase/AuthProvider";
import { useDBContext } from "../../firebase/DBProvider";

const TodoInput = () => {
  const { loginUser } = useAuthContext();
  const { insertTodoList } = useDBContext();
  const [content, setContent] = useState();
  const onChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      //   alert(`${content}`);
      const todo = {
        email: loginUser?.email,
        sdate: moment().format("YYYY[-]MM[-]DD"),
        stime: moment().format("HH:mm:ss"),
        content: content,
        edate: "",
        etime: "",
      };
      insertTodoList(todo);
    }
  };

  return (
    <Container maxWidth="xl" fixed sx={{ margin: "60px auto" }}>
      <div>
        <TextField
          fullWidth
          variant="outlined"
          label="할 일 입력 후 Enter"
          placeholder="할 일을 입력한 후 Enter..."
          value={content}
          onKeyDown={onKeyDownHandler}
          onChange={onChangeHandler}
        />
      </div>
    </Container>
  );
};

export default TodoInput;
