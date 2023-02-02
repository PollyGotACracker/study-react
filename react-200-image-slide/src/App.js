import logo from "./logo.svg";
import "./App.css";
import { images } from "../src/modules/images";
import { useState } from "react";

const IMAGE_WIDTH = 500;

function App() {
  const [position, setPosition] = useState(0);

  const imagePrev = () => {
    let newPosition = position + IMAGE_WIDTH;
    if (position === 0) {
      newPosition = IMAGE_WIDTH * (images.length - 1) * -1;
    }
    setPosition(newPosition);
  };
  const imageNext = () => {
    let newPosition = position - IMAGE_WIDTH;
    if (position <= IMAGE_WIDTH * (images.length - 1) * -1) {
      newPosition = 0;
    }
    setPosition(newPosition);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="image-view">
        <div
          style={{ transform: `translateX(${position}px)` }}
          className="image-box"
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
              alt={index * 2}
              key={index * 2}
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
