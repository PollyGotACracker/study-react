import "../css/ModalMain.css";
import NaverBookList from "./NaverBookList";

const ModalMain = (props) => {
  // children: BookMain.js 에서 Modal 컴포넌트 사이의 내용
  //           NaverBookList, BookComment
  // ModalMain 컴포넌트의 재사용
  const { header, open, close, width, children } = props;

  return (
    // open: BookMain.js 에서 open 속성의 값(true 또는 false)
    // 전달받은 open의 값에 따라 className 전환
    <div className={open ? "Modal openModal" : "Modal"}>
      {/* className 에 따라 다른 사이즈가 나타나도록 css 설정 */}
      <section className={`section-${width}`}>
        <header>
          {header}
          <button className="close" onClick={close}>
            &times;
          </button>
        </header>
        <main>{children}</main>
        <footer>
          <button className="close" onClick={close}>
            닫기
          </button>
        </footer>
      </section>
    </div>
  );
};
export default ModalMain;
