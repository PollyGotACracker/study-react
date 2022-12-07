/*
props
List.js => Item.js
bucket={bucket} : 입력한 데이터
key={bucket.b_seq} : bucket 데이터의 b_seq 값
bucketDelete={bucketDelete} : 데이터 delete 함수
bucketUpdateView={bucketUpdateView} 
    : 데이터가 갱신되었을 때 reRendering 함수
*/
const Item = (props) => {
  const { bucket, bucketDelete, bucketUpdateView } = props;

  const updateHandler = (e) => {
    const tr = e.target.closest("TR");
    const bucketId = tr.dataset.id;
    const content = e.target.textContent;
    bucketUpdateView(bucketId, content);
  };

  const deleteHandler = (e) => {
    const tr = e.target.closest("TR");
    const bucketId = tr.dataset.id;
    if (window.confirm(`${bucketId}를 삭제할까요?`)) {
      bucketDelete(bucketId);
    }
  };

  return (
    <tr data-id={bucket.b_seq}>
      <td>{bucket.b_date}</td>
      <td>{bucket.b_time}</td>
      <td onClick={updateHandler}>{bucket.b_content}</td>
      <td className="delete" onClick={deleteHandler}>
        &times;
      </td>
    </tr>
  );
};

export default Item;
