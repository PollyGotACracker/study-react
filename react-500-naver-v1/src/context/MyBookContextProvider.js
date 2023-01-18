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
      if (result) setMyBookList([...result.MYBOOKS]);
    };
    myBookFetch();
  }, [sessionUser]);

  const props = { myBookList, setMyBookList };

  return (
    <MyBookContext.Provider value={props}>{children}</MyBookContext.Provider>
  );
};
