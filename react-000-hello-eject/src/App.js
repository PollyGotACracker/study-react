import logo from "./logo.svg";
import "./css/App.css";
import Button from "./comps/Button";
import Box from "./comps/Box";
import Section from "./comps/Section";

function App() {
  const buttonStyle = {
    backgroundColor: "black",
    border: "none",
    color: "white",
    padding: "12px 16px",
  };

  // Section component 내부는 children 객체로 넘어감
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Section>
        <Button color="white" backgroundColor="노랑">
          클릭하세요
        </Button>
        <Button buttonStyle={buttonStyle}>클릭하세요</Button>
        <Button color="yellow" backgroundColor="green">
          클릭하세요
        </Button>
        <Box />
      </Section>
    </div>
  );
}

export default App;
