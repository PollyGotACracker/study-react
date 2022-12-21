import { Link, useNavigate } from "react-router-dom";

const NoticeList = () => {
  /**
   * 일반적인 a tag 처럼 사용할 때는 Link 를 사용하면 되고
   * script(click event)에서 document.location.href 처럼 사용할 때는
   * useNavigate() 함수를 이용하여 변수를 선언하고 변수에 경로를 지정하면 된다.
   *
   * nav(-1) : 뒤로가기 1번
   * nav(-2) : 뒤로가기 2번
   * nav(1) : 앞으로가기 1번
   * nav(2) : 앞으로가기 2번
   * nav(URL) : URL 로 점프하기 location.href
   * nav(URL, {replace:true}) loaction.replace(URL)
   *
   * cf) window.location / document.location
   * 모바일에서는 동작이 약간 다르다
   * document.location 을 자주 사용
   */
  const nav = useNavigate();
  const navWriteHandler = () => {
    nav("/notice/write");
  };
  return (
    <>
      <p>공지사항 리스트 보이기</p>
      <Link to="/notice/write">공지사항 작성</Link>
      <button onClick={navWriteHandler}>글쓰기</button>
    </>
  );
};

export default NoticeList;
