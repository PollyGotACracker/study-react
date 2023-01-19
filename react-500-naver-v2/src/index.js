import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import ProviderMain from "./context/ProviderMain";
import { RouterProvider } from "react-router-dom";
import MainRouter from "./layout/MainRouter";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <ProviderMain>
      <RouterProvider router={MainRouter} />
    </ProviderMain>
  </React.StrictMode>
);
