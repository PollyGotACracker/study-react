const BookList = (props) => {
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>도서명</th>
            <th>저자</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default BookList;
