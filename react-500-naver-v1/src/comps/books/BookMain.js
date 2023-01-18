import CardMain from "../CardMain";
import BookSearchInput from "./BookSearchInput";
import BookList from "./BookList";
import "../../css/Book.css";

const BookMain = () => {
  // setSearch 를 input 에 보내서 해당 컴포넌트가 직접 처리하게 함
  return (
    <CardMain width="70%" maxHeight="800px" header={<BookSearchInput />}>
      <BookList />
    </CardMain>
  );
};

export default BookMain;
