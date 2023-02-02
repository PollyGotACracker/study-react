import logo from "./logo.svg";
import "./App.css";
import { images } from "../src/modules/images";
import { useState } from "react";

const IMAGE_WIDTH = 500;

function App() {
  const [position, setPosition] = useState(0);
  const [mouseX, setMouseX] = useState(0);

  const onDragOverHandler = (e) => {
    e.preventDefault();
    e.currentTarget.style.opacity = "0.4";
  };

  // 드래그가 끝난 시점의 이벤트
  //
  const onDragEndHanlder = (e) => {
    const box = e.currentTarget;
    box.style.opacity = "1";
    // if (e.clientX < IMAGE_WIDTH * 0.5) {
    //   setPosition(position - IMAGE_WIDTH);
    // } else if (e.clientX > IMAGE_WIDTH * 0.5) {
    //   setPosition(position + IMAGE_WIDTH);
    // }

    // e.pageX < mouseX:
    //    ** 드래그 시 이미지는 이동하지 않으므로 기준점은 같음 **
    //    e.pageX 는 dragEnd 좌표. mouseX 는 mouseDown 좌표
    // position:
    //    현재 보여지는 이미지의 left 모서리(0 ~ -3500, 최소값은 마지막 이미지의 left -3500)
    // -1 * (images.length - 1) * IMAGE_WIDTH:
    //    이미지 개수 -1 에서 이미지 width * -1 (-3500)

    // 오른쪽->왼쪽 드래그, 다음 이미지로 넘어가기
    // 현재 이미지 left 좌표에서 - 500
    // translate 에서 오른쪽 이미지는 왼쪽보다 값이 더 작으므로 오른쪽 이미지로 넘어간다.
    if (e.pageX < mouseX && position > -1 * (images.length - 1) * IMAGE_WIDTH) {
      setPosition(position - IMAGE_WIDTH);
    }
    // 왼쪽->오른쪽 드래그, 이전 이미지로 넘어가기
    // 현재 이미지 left 좌표에서 + 500
    // translate 에서 왼쪽 이미지는 오른쪽보다 값이 더 크므로 왼쪽 이미지로 넘어간다.
    else if (e.pageX > mouseX && position < 0) {
      setPosition(position + IMAGE_WIDTH);
    }
  };

  // 마우스 클릭 이벤트 : image-view 클릭
  // pageX : 가려진 부분을 포함한 요소의 가장 왼쪽 모서리 기준 X좌표
  const onMouseDownHandler = (e) => {
    setMouseX(e.pageX);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div
        className="image-view"
        draggable="true"
        onDragOver={onDragOverHandler}
        onDragEnd={onDragEndHanlder}
        onMouseDown={onMouseDownHandler}
      >
        <div
          className="image-box"
          draggable="false"
          style={{ transform: `translateX(${position}px)` }}
        >
          {images.map((image, index) => (
            <img
              draggable="false"
              src={image}
              width="100%"
              height="100%"
              alt={index}
              key={index}
            />
          ))}
          {/* {images.map((image, index) => (
            <img
              draggable="false"
              src={image}
              width="100%"
              height="100%"
              alt={`2_${index}`}
              key={`2_${index}`}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default App;
