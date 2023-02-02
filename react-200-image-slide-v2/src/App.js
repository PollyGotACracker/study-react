import logo from "./logo.svg";
import "./App.css";
import { images } from "../src/modules/images";
import { useState } from "react";

function App() {
  const [position, setPosition] = useState(true);

  const imagePrev = () => {
    setPosition(false);
  };
  const imageNext = () => {
    setPosition(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="image-view">
        <div
          className={
            position ? "image-box animation-left" : "image-box animation-right"
          }
        >
          {images.map((image, index) => (
            <img
              src={image}
              width="100%"
              height="100%"
              alt={index}
              key={index}
            />
          ))}
          {images.map((image, index) => (
            <img
              src={image}
              width="100%"
              height="100%"
              alt={`2_${index}`}
              key={`2_${index}`}
            />
          ))}
        </div>
      </div>
      <div className="button-box">
        <div className="button" onClick={imagePrev}>
          Prev
        </div>
        <div className="button" onClick={imageNext}>
          Next
        </div>
      </div>
    </div>
  );
}

export default App;
