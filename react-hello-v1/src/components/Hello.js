/**
 * JSX Component 작성 규칙 1
 * 모든 tag 는 반드시 1개의 tag 로 묶어야 한다.
 * div tag 대신 Fragment tag 사용 가능
 *    <React.Fragment></React.Fragment> 또는 <></>
 */
const Hello = () => {
  return (
    <>
      <div>
        <h1>안녕하세요</h1>
        <p>반갑습니다</p>
        <p>우리나라만세</p>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>게시판</li>
          <li>공지사항</li>
          <li>로그인</li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Hello;
