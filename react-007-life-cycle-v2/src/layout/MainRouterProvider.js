import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import BBS from "../comps/BBS";
import BBSContextProvider from "../context/BBSContextProvider";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <h1>나의 홈페이지에 오신 것을 환영합니다.</h1> },
      {
        path: "bbs",
        element: (
          <BBSContextProvider>
            <BBS />
          </BBSContextProvider>
        ),
      },
    ],
  },
]);

const MainRouterProvider = () => {
  return <RouterProvider router={MainRouter} />;
};
export default MainRouterProvider;
