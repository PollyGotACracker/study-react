import BookListData from "../data/BookListData";

/**
 * 함수형 컴포넌트
 */
const BookInput = (props) => {
  // input box 에 입력한 데이터를 BookMain 에 전달하여
  // 무엇인가(..) 처리하기 위하여 state 데이터와 setState() 함수를
  // 전달받았다.
  const { bookData, bookListData, bookInsert, setBookData } = props;

  /**
   * React 에서 input box 처리하는 방법
   * 1. value 속성에 state 변수를 세팅 => input box 가 readonly가 된다.
   * 2. 키보드로 입력한 내용을 state 변수에 담고, 다시 input box 에 나타나게 하기 위하여
   *    onChange() event 를 설정해주어야 한다.
   * 이 때 사용할 onChange event 를 처리할 함수를 선언한다.
   * 이 함수는 키보드로 입력한 데이터를 다시 state 변수에 setting 하는 일만 수행한다.
   */
  const bTitleInputChange = (e) => {
    const value = e.target.value;
    // bookData.b_title = value => X

    const isbn = Number(bookListData[bookListData.length - 1].b_isbn) + 1;
    setBookData({ ...bookData, b_isbn: isbn, b_title: value });
  };

  /**
   * input 에 문자열을 입력하던 중 Enter 를 누르면
   * 처리할 event 핸들러
   *
   * 키보드 눌림 event
   * onKeyDown : 키를 눌렀을 때, 계속 입력할 때 계속해서 반응
   *    => ES5 이후에는 onKeyDown 으로 통합됨
   * onKeyPress : 키를 눌렀을 때, 한번 누르고 나면 event 동작이 멈추는 현상
   *    => KeyPress, KeyDown 은 이벤트가 발생한 후 문자가 입력
   * onKeyUp : 키를 눌렀다 떼는 순간
   *    => 문자가 먼저 입력된 후 이벤트가 발생한다.
   */
  const onKeyDownHandler = (e) => {
    const keyCode = e.keyCode;
    // bTitleInputChange 에서 이미 setBookData 실행
    if (keyCode === 13) {
      if (document.querySelector("input").value === "") {
        alert("값을 입력하세요");
        return false;
      } else {
        /**
         * input box 에 문자열을 입력하는 동안 Enter 를 누르면
         * bookDataList 배열에 데이터를 추가하기
         */
        bookInsert(bookData);
      }
      e.target.select();
    }
  };

  return (
    <div className="container">
      <input
        onChange={bTitleInputChange}
        onKeyDown={onKeyDownHandler}
        value={bookData.b_title}
        name="b_title"
        placeholder="도서명 입력 후 Enter..."
      />
    </div>
  );
};

export default BookInput;
