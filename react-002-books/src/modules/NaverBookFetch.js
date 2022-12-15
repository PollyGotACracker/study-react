import { CLIENT_ID, CLIENT_SECRET } from "../config/NaverSecret";
const NAVER_BOOK_JSON_URL = "/search/book.json";
// const NAVER_CLIENT_ID_KEY = "X-Naver-Client-Id";
// const NAVER_CLIENT_SECRET_KEY = "X-Naver-Client-Secret";

const getQueryData = async (query) => {
  const queryString = `${NAVER_BOOK_JSON_URL}?query=${encodeURIComponent(
    query
  )}`;
  const naverFetchOption = {
    method: "GET",
    headers: {
      "X-Naver-Client-Id": CLIENT_ID,
      "X-Naver-Client-Secret": CLIENT_SECRET,
    },
  };
  const res = await fetch(queryString, naverFetchOption);
  const result = await res.json();
  return result.items;
};

export { getQueryData };
