import { createContext, useContext, useState, useEffect } from "react";
import { getMyBooks } from "../service/book.service";
import { useUserContext } from "./UserContextProvider";

const MyBookContext = createContext();

export const useMyBookContext = () => {
  return useContext(MyBookContext);
};

export const MyBookContextProvider = ({ children }) => {
  const [myBookList, setMyBookList] = useState([]);
  const { sessionUser } = useUserContext();

  useEffect(() => {
    const myBookFetch = async () => {
      const result = await getMyBooks(sessionUser.username);
      if (result) setMyBookList([...result]);
    };
    myBookFetch();
  }, [sessionUser]);

  const myBookAdd = (isbn) => {
    if (sessionUser?.username) {
      alert("로그인을 다시 수행하세요.");
      return false;
    }
  };

  const props = { myBookList, setMyBookList };

  return (
    <MyBookContext.Provider value={props}>{children}</MyBookContext.Provider>
  );
};
