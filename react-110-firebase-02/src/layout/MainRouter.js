import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import EmailLogin from "../comps/EmailLogin";
import GoogleLogin from "../comps/GoogleLogin";
import TodoMain, { TodoMainLoader } from "../comps/todo/TodoMain";
import UserMain from "../comps/UserLogin";
import { useAuthContext } from "../firebase/AuthProvider";

const MainRouterProvider = () => {
  const { loginUser, googleSignOut } = useAuthContext();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "todo",
          loader: (params) => TodoMainLoader(params, loginUser),
          element: <TodoMain />,
        },
        {
          path: "user",
          eleement: <UserMain />,
          children: [
            { path: "join", element: <h1>JOIN</h1> },
            {
              path: "login",
              element: (
                <>
                  {loginUser ? <></> : <EmailLogin />}
                  <GoogleLogin />
                </>
              ),
            },
            { path: "mypage", element: <h1>MYPAGE</h1> },
            {
              path: "logout",
              loader: async ({ params }) => {
                await googleSignOut();
                return redirect("/");
              },
              element: <h1>LOGOUT</h1>,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MainRouterProvider;
