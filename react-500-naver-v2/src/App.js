import "./css/App.css";
import Nav from "./layout/Nav";
import { Outlet } from "react-router-dom";

/**
 * cf)
 * 컴포넌트 내부에 내부 컴포넌트를 선언할 경우...
 * 내부 컴포넌트의 input 값이 변경될 때
 * reRendering 되어 focus 를 잃게 된다(입력 어려움).
 */
function App() {
  return (
    <div className="App w3-container">
      <header className="App-header w3-padding-24">
        <h1>나의 도서정보</h1>
        <p>네이버 openAPI 를 연동한 도서정보</p>
      </header>
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
