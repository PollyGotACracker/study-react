import { useCallback, useState } from "react";
import "../css/Book.css";
import Modal from "./ModalMain";
import BookInput from "./BookInput";
import BookList from "./BookList";
import BookComment from "./BookComment";
// ctrl + spacebar 로 자동완성
// {} 만 입력하고 안에서 사용하면 자동완성
import { getQueryData } from "../modules/NaverBookFetch";
// default 로 export 한 모듈과, 이름으로 export 한 모듈을 동시에 가져오기
import { BookData } from "../data/BookListData";
import NaverBookList from "./NaverBookList";

const BookMain = (props) => {
  // 임시로 만들어진 List 데이터를 가져와서 state 배열 생성
  // List 를 보여줄 때 사용할 데이터
  const [bookListData, setBookList] = useState([]);
  // 도서 하나의 데이터
  // input box 에 입력한 내용을 임시 저장할 변수
  const [bookData, setBookData] = useState(BookData);
  const [naverBookListData, setNaverBookListData] = useState([]);
  const [openModal, setOpenModal] = useState({
    input: false,
    naver: false,
    comment: false,
  });

  /*
  아래 naverFetch 함수는 BookMain.js 컴포넌트가 렌더링 될 때마다 새롭게 생성된다.
  이미 기존에 생성된 함수가 있음에도 함수를 새로 만들고, 기존의 함수는 삭제한다.
  생성->삭제->생성->삭제... 하는 반복이 계속적으로 일어날 것이다.
  매번 똑같은 함수를 반복적으로 생성, 삭제하는 것은 매우 비효율적이다.

  const naverFetch = async (b_title) => { 
      const result = await getQueryData(b_title);
      setNaverBookListData(result);
      modalOpenToggle("naver");
    };
*/

  /**
   * 반복적으로 생성, 삭제가 이루어지는 함수를
   * Callback Memoization(콜백 메모이제이션) 함수로 생성한다.
   * useCallback() :
   * React 의 Hook(함수 컴포넌트에서 state 와 lifecycle features(생명주기 기능) 를 연동하는 함수) 중 하나
   * Memoization 된 Callback 을 반환
   *
   * Memoization: 동일한 계산, 동일한 객체 및 함수 생성 등이 일어나는 경우
   * 이전에 계산된 결과를 메모리에 저장해두고, 동일한 계산의 반복을 제거하여 실행 속도를 개선하는 기술
   * => 동적 계획법의 핵심 기술
   */
  const naverFetch = useCallback((b_title) => {
    const fetchBook = async () => {
      // input 검색어를 받아서 NaverBookFetch.js 에서 fetch
      const result = await getQueryData(b_title);
      // 네이버 도서검색 리스트 데이터 세팅
      setNaverBookListData(result);
      modalOpenToggle("naver");
    };
    fetchBook();
  }, []);

  // [] 안의 값이 변할 경우 useCallback 내부 함수를 다시 생성
  const bookInsert = useCallback(
    (bookData) => {
      setBookList([...bookListData, bookData]);
      modalOpenToggle("naver");
    },
    [bookListData, bookData, openModal]
  );

  // BookInput 에서 Enter 를 눌렀을 때 호출되는 함수
  const bookSearch = (b_title) => {
    // naverFetch() 라는 Callback 메모이제이션 함수를 호출
    naverFetch(b_title);
  };
  // BookList 에서 td 를 클릭할 때 호출되는 함수
  const bookComment = (book) => {
    // modal 에 해당 도서의 데이터(book) setting
    setBookData({ ...bookData, ...book });
    modalOpenToggle("comment");
  };

  // name 은 각각 input, naver, comment
  // initial value 는 모두 false
  // openModal 객체를 spread 한 후 그 다음 속성을 덮어쓰기
  // [name] : 속성(키) name
  // !openModal[name] : openModal 객체의 속성 name 값의 반대(true <> false)
  const modalOpenToggle = (name) => {
    setOpenModal({ ...openModal, [name]: !openModal[name] });
  };

  // useEffect(async () => {
  //   const result = await getQueryData("자바스크립트");
  //   return Promise.all(result);
  // }, []);

  return (
    <div className="Book">
      <BookInput
        bookData={bookData}
        setBookData={setBookData}
        bookSearch={bookSearch}
      />
      <BookList bookListData={bookListData} bookComment={bookComment} />
      <Modal
        header="네이버 도서 정보 검색 결과"
        open={openModal.naver}
        close={() => modalOpenToggle("naver")}
        width="1200"
      >
        <NaverBookList
          bookListData={naverBookListData}
          bookInsert={bookInsert}
        />
      </Modal>
      <Modal
        header="독서 소감"
        close={() => modalOpenToggle("comment")}
        open={openModal.comment}
      >
        <BookComment bookData={bookData} />
      </Modal>
    </div>
  );
};

export default BookMain;
