import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import {
  NoticeMain,
  NoticeList,
  NoticeWrite,
  BBSMain,
  UserMain,
  UserLogin,
  UserJoin,
} from "../comps/Index";

const MainRouter = () => {
  // path=* 는 가장 마지막에 위치한다.
  // 요청한 path 가 없을 때 실행되기 때문(예외처리; 404)
  // root 경로인 Route 로 감싼 하위 Route 의 index 가 해당 root
  return (
    <Routes>
      <Route path="/">
        <Route index element={<h1>홈페이지</h1>} />
        <Route path="/notice">
          <Route index element={<NoticeMain />} />
          <Route path="list" element={<NoticeList />} />
          <Route path="write" element={<NoticeWrite />} />
        </Route>
        <Route path="/bbs" element={<BBSMain />} />
      </Route>
      <Route path="/user" element={<UserMain />}>
        <Route path="login" element={<UserLogin />} />
        <Route path="join" element={<UserJoin />} />
        <Route path="profile/:username" element={<UserJoin />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default MainRouter;
