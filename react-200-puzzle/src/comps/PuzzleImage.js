import { usePuzzleContext } from "../context/PuzzleContext";
import PuzzleItem from "./PuzzleItem";

const PuzzleImage = () => {
  const {
    imgFile,
    setImgFile,
    piece,
    setPiece,
    puzzlePiece,
    setPuzzlePiece,
    puzzleShuffle,
  } = usePuzzleContext();

  // 이미지 업로드 시 url 과 fileName 을 'imgFile' state 변수에 세팅
  const imgOnChangeHandler = (e) => {
    const uploadImgFile = {
      url: URL.createObjectURL(e.target.files[0]),
      fileName: e.target.files[0].name,
    };
    setImgFile(uploadImgFile);
  };

  // 'piece' state 변수에 값 세팅
  const pieceOnChangeHandler = (e) => {
    setPiece(e.target.value);
  };

  // 게임 시작 버튼을 누르면 이미지 파일 여부 검사 후, 이미지 조각 생성
  const imgOnClickHandler = () => {
    puzzleShuffle();
  };

  // 이미지 조각 배열 크기만큼 PuzzleItem 컴포넌트 생성 후 각 요소를 item prop 에 담음
  const PuzzleShuffleList = puzzlePiece.map((item) => (
    <PuzzleItem item={item} />
  ));

  /**
   * PuzzleShuffleList.length > 0
   *  => T  PuzzleShuffleList
   *  => F  imgFile?.url
   *        => T  <img src={imgFile.url} alt={imgFile.fileName} width="500px" />
   *        => F  <div>이미지를 선택하세요</div>
   */
  return (
    <div className="puzzle-wrap">
      <ul className="image-wrap">
        {PuzzleShuffleList.length > 0 ? (
          PuzzleShuffleList
        ) : imgFile?.url ? (
          <img src={imgFile.url} alt={imgFile.fileName} width="500px" />
        ) : (
          <div>이미지를 선택하세요</div>
        )}
      </ul>
      <div>
        <input type="file" accept="image/*" onChange={imgOnChangeHandler} />
      </div>
      <div>
        <input
          type="number"
          placeholder="조각 개수"
          onChange={pieceOnChangeHandler}
          value={piece}
        />
        <button onClick={imgOnClickHandler}>게임 시작</button>
      </div>
    </div>
  );
};

export default PuzzleImage;
