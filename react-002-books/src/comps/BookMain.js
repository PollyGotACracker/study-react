import { useEffect, useState } from "react";
import "../css/Book.css";
import Modal from "./ModalMain";
import BookInput from "./BookInput";
import BookList from "./BookList";
// ctrl + spacebar 로 자동완성
// {} 만 입력하고 안에서 사용하면 자동완성
import { getQueryData } from "../modules/NaverBookFetch";
// default 로 export 한 모듈과, 이름으로 export 한 모듈을 동시에 가져오기
import BookListData, { BookData } from "../data/BookListData";
import NaverBookList from "./NaverBookList";

const BookMain = (props) => {
  // 임시로 만들어진 List 데이터를 가져와서 state 배열 생성
  // List 를 보여줄 때 사용할 데이터
  const [bookListData, setBookList] = useState(BookListData);
  // 도서 하나의 데이터
  // input box 에 입력한 내용을 임시 저장할 변수
  const [bookData, setBookData] = useState(BookData);
  const [naverBookListData, setNaverBookListData] = useState([]);
  const [openModal, setOpenModal] = useState({
    input: false,
    naver: false,
  });
  /**
   * useEffect(함수, []) 형식의 사용
   * - 화면이 최초 rendering 될 때 "한번만" 실행하라
   */
  useEffect(() => {
    const fetchBook = async () => {
      const result = await getQueryData("자바스크립트");
      /**
       * async await 로 수신한(만들어낸) 데이터들을 return 하고자 할 때
       * 아무리 이전 코드에서 await 를 하여도 return 은 await 가 안된다.
       * 그래서 모든 데이터가 완성된 후(Promise.all()) return 하도록 만들어준다.
       *
       * 어떤 함수로부터 return 받은 데이터에 Pending 이라는 단어가 보이면(Promise{<pending>})
       * return 문에서 Promise.all() 을 먼저 실행하라.
       */
      setNaverBookListData(result);
      console.log(result);
    };
    fetchBook();
  }, []);

  const modalOpenToggle = (name) => {
    // [name] : true
    // 이 코드가 실행되는 원리
    // name 변수에 "naver" 라는 문자열이 전달되어오면 naver: true 가 만들어진다.
    // name 변수에 "input" 라는 문자열이 전달되어오면 input: true 가 만들어진다.
    // name 변수에 "naver" 라는 문자열이 전달되어오면
    //    naver: !openModal["naver"] == true 와 false 를 반전
    setOpenModal({ ...openModal, [name]: !openModal[name] });
  };

  const bookInsert = (data) => {
    setBookList([...bookListData, data]);
    setBookData({ ...bookData, b_title: null });
  };

  // useEffect(async () => {
  //   const result = await getQueryData("자바스크립트");
  //   return Promise.all(result);
  // }, []);

  return (
    <div className="Book">
      <div>{bookData.b_title}</div>
      <BookInput
        bookData={bookData}
        bookListData={bookListData}
        setBookData={setBookData}
        bookInsert={bookInsert}
      />
      <BookList bookListData={bookListData} />
      <div>
        <button onClick={() => modalOpenToggle("input")}>입력창</button>
        <button onClick={() => modalOpenToggle("naver")}>네이버</button>
      </div>
      <Modal open={openModal.input} close={() => modalOpenToggle("input")}>
        <BookInput bookData={bookData} setBookData={setBookData} />
      </Modal>
      <Modal
        open={openModal.naver}
        close={() => modalOpenToggle("naver")}
        width="1200"
      >
        <NaverBookList bookListData={naverBookListData} />
      </Modal>
    </div>
  );
};

export default BookMain;
