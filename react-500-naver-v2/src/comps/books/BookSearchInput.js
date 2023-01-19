import { useBookContext } from "../../context/BookContextProvider";

/**
 * React input 의 활동 방법
 * 일반적인 html 의 input 은 키보드로 입력한 내용을 바로 보여주고
 * 입력한 내용을 value 속성에 저장한다.
 *
 * React 에서 input 은 onChange event handler 에 의해 키보드 입력값을
 * 가로채고, 가로챈 입력값을 state 변수에 저장하고,
 * state 변수에 저장된 값을 input box 에 보여주는 형태이다.
 *
 */
const KEY_CODE_ENTER = 13;
const BookSearchInput = () => {
  const context = useBookContext();
  const { search, setSearch, naver_search } = context;
  /**
   * 키보드로 입력하는 도중 Enter 를 누르면
   * 1. input box 에 담겨있는 데이터를 검색 함수로 보내기
   *        input box 에 담겨있는 데이터는? e.value 에 저장되어 있다.
   *        가. props.naver_search(e.value)
   *        나. props.naver_search(props.search)
   * 2. props.naver_search 가 state 에 담긴 데이터를 알아서 처리
   *
   * 3. 굳이 props.naver_search() 에 인자를 전달할 필요가 없다.
   *    입력한 text는 자동으로 state 변수에 저장되기 때문이다.
   *    데이터는 이미 준비되어 있으므로 함수 호출만 하면 된다.
   */
  const onKeyDownHandler = (e) => {
    if (e.keyCode === KEY_CODE_ENTER) {
      naver_search();
    }
  };

  const onSearchChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <input
      className="w3-input w3-border w3-round"
      placeholder="검색어 입력..."
      value={search}
      onChange={onSearchChangeHandler}
      onKeyDown={onKeyDownHandler}
    />
  );
};

export default BookSearchInput;
