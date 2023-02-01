import ContactMain from "./comps/ContactMain";
import "./css/main.css";

export const loader = async () => {
  // cf) proxy 경로의 끝에는 slash 삭제, fetch 경로 끝은 포함
  const res = await fetch("/api/list");
  const result = await res.json();
  return { contacts: result, hello: "반갑습니다" };
};

const App = () => {
  return (
    <div className="App">
      <header className="App Header">
        <h1>Hello Contact!!</h1>
        <p>Hello My Contact React and Spring 2023</p>
      </header>
      <ContactMain />
    </div>
  );
};

export default App;
