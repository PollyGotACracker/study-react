import { usePuzzleContext } from "../context/PuzzleContext";

// item: puzzlePeice 배열의 각 요소(조각)
const PuzzleItem = ({ item }) => {
  // imgFile: 이미지 파일 정보(url, fileName)
  const { imgFile, piece } = usePuzzleContext();

  const imgStyle = {
    background: `url(${imgFile.url})`,
    backgroundSize: "500px 500px",
    backgroundPositionX: `${item.posX}px`,
    backgroundPositionY: "0px",
    width: `${500 / (piece / 2)}px`,
    height: `${500 / (piece / 2)}px`,
  };

  return (
    <li>
      <img style={imgStyle} />
    </li>
  );
};
export default PuzzleItem;
