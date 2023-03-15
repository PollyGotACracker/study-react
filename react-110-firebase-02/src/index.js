import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainRouterProvider from "./layout/MainRouter";
import { AuthContextProvider } from "./firebase/AuthProvider";
import { DBContextProvider } from "./firebase/DBProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DBContextProvider>
        <MainRouterProvider />
      </DBContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
