import { Outlet } from "react-router-dom";

// <Outlet /> 영역에 하위 경로의 파일이 include
// NodeJS 와 Pug 에서 조건을 줬던 것과 달리 쉽게 구현된다!
const UserMain = () => {
  return (
    <>
      <h1>User 페이지</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default UserMain;
