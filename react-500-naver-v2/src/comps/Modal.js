import { useBookContext } from "../context/BookContextProvider";
import { useUserContext } from "../context/UserContextProvider";
import { addMyBooks } from "../service/book.service";

const Modal = () => {
  const { bookDetail, setBookDetail, modalOpen, setModalOpen } =
    useBookContext();
  const { sessionUser } = useUserContext();

  const onClickCloseHandler = () => {
    setModalOpen(!modalOpen);
  };

  const onChangeHandler = (e) => {
    setBookDetail({ ...bookDetail, [e.target.name]: e.target.value });
  };

  const onClickHandler = async () => {
    const username = sessionUser.username;
    await addMyBooks(bookDetail, username);
  };

  return (
    <div className={modalOpen === false ? "modal" : "modal open"}>
      <input name="isbn" value={bookDetail.isbn} />
      <input name="title" value={bookDetail.title} />
      <input name="author" value={bookDetail.author} />
      <input name="publisher" value={bookDetail.publisher} />
      <input name="link" value={bookDetail.link} />
      <input name="image" value={bookDetail.image} />
      <input name="discount" value={bookDetail.discount} />
      <input name="price" value={bookDetail.price} />
      <input
        name="odate"
        value={bookDetail.odate}
        placeholder="구입일"
        onChange={onChangeHandler}
        type="date"
      />
      <button type="button" onClick={onClickHandler}>
        저장
      </button>
      <button type="button" onClick={onClickCloseHandler}>
        닫기
      </button>
    </div>
  );
};

export default Modal;
