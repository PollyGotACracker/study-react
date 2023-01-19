import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { BookMain, MyBookMain, UserMain } from "../comps/Index";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <BookMain /> },
      { path: "books", element: <BookMain /> },
      { path: "books/mybook", element: <MyBookMain /> },
      {
        path: "user",
        children: [
          { path: "login", element: <UserMain /> },
          { path: "join", element: <h1>회원가입</h1> },
          { path: "logout", element: <h1>로그인</h1> },
          { path: "mypage", element: <h1>마이페이지</h1> },
          { path: "find/id", element: <h1>아이디 찾기</h1> },
          { path: "find/password", element: <h1>비밀번호 찾기</h1> },
        ],
      },
    ],
  },
]);

export default MainRouter;
