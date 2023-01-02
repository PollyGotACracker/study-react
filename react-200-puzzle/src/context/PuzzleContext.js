import { createContext, useContext, useState } from "react";

const PuzzleContext = createContext();

const usePuzzleContext = () => {
  return useContext(PuzzleContext);
};
const PuzzleContextProvider = ({ children }) => {
  const [puzzlePiece, setPuzzlePiece] = useState([]);
  const [imgFile, setImgFile] = useState({});
  const [piece, setPiece] = useState(4);

  const puzzleShuffle = () => {
    if (!imgFile.url) {
      alert("이미지를 먼저 선택해주세요");
      return false;
    }

    // piece 값 크기의 배열을 생성 후 이미지 조각 스타일 값을 객체로 담아
    // 'puzzlePiece' state 변수에 세팅
    const pieceArray = Array(piece)
      .fill(0)
      .map((_, index) => {
        // posX, posY: style 의 backgroundPositionX, Y 값
        const pieceInfo = { posX: ((index + 1) % piece) * -100 };
        return pieceInfo;
      });
    setPuzzlePiece([...pieceArray]);
  };

  const props = {
    imgFile,
    setImgFile,
    piece,
    setPiece,
    puzzlePiece,
    setPuzzlePiece,
    puzzleShuffle,
  };

  return (
    <PuzzleContext.Provider value={props}>{children}</PuzzleContext.Provider>
  );
};

export { PuzzleContextProvider, usePuzzleContext };
