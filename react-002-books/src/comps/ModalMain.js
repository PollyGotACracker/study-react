import "../css/ModalMain.css";

const ModalMain = (props) => {
  // children: BookMain.js 에서 Modal 컴포넌트 사이의 내용
  // ModalMain의 재사용
  const { open, close, width, children } = props;

  return (
    <div className={open ? "Modal openModal" : "Modal"}>
      {/* className 에 따라 다른 사이즈가 나타나도록 css 설정 */}
      <section className={`section-${width}`}>
        <header>
          <h1>HEADER</h1>
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
