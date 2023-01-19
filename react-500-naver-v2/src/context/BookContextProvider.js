import { createContext, useContext, useState } from "react";
import { Book } from "../models/Book";

const BookContext = createContext();

export const useBookContext = () => {
  return useContext(BookContext);
};

export const BookContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [bookList, setBookList] = useState([]);
  const [bookDetail, setBookDetail] = useState(new Book());
  const [modalOpen, setModalOpen] = useState(false);

  const naver_search = async () => {
    const respo = await fetch(`/api/book/search?search=${search}`);
    const result = await respo.json();

    // error CODE 가 없으면 result 데이터 세팅
    if (!result?.CODE) {
      setBookList([...result]);
    }
  };

  const propsStore = {
    search,
    setSearch,
    bookList,
    setBookList,
    bookDetail,
    setBookDetail,
    modalOpen,
    setModalOpen,
    naver_search,
  };

  return (
    <BookContext.Provider value={propsStore}>{children}</BookContext.Provider>
  );
};
