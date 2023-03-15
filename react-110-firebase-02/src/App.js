import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./layout/Nav";
import { firebaseApp } from "./firebase/FirebaseConfig";

console.log("Config", firebaseApp);

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Nav />
      <Outlet />
    </div>
  );
};

export default App;
