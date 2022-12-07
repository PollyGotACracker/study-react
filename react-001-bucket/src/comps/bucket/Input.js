/*
props
Main.js => Input.js
bucketInsert={bucketInsert} : 데이터 insert 함수
bucket={bucket} : 입력한 데이터
*/
const Input = (props) => {
  const { bucket, bucketInsert, setBucket } = props;

  const onKeyDownHandler = (e) => {
    // Enter 를 누르면 keyCode 에 13 이 담긴다.
    // ESC 를 누르면 keyCode 에 27 이 담긴다.
    if (e.keyCode === 13) {
      const content = e.target.value;
      setBucket({ ...bucket, b_content: content });

      // props 를 구조분해하지 않고 바로 사용
      // props.bucketInsert(content);
      bucketInsert();
      e.target.select();
    }
  };

  /**
   * input tag 의 value 속성 성질
   * value 속성은 input box 키보드 입력이 되면
   * 입력된 문자열들을 담아놓는 속성
   * React 에서는 input tag 의 value 속성에 state 변수를 연결해서
   * input 에 문자열이 입력되면 반응하도록 코딩한다.
   *
   * input 의 value 속성에 state 변수를 연결하면
   * input 은 readonly 속성을 갖게 된다.
   *
   * React 에서는 input tag 의 onChange event 를 설정하여
   * 키보드 입력 문자열을 state 변수에 반영하도록 해야 한다.
   */
  const bucketOnChangeHandler = (e) => {
    // e.target: input
    const value = e.target.value;
    console.log(value);
    setBucket({ ...bucket, b_content: value });
  };

  return (
    <input
      value={bucket.b_content}
      onChange={bucketOnChangeHandler}
      onKeyDown={onKeyDownHandler}
      placeholder="버킷에 추가할 내용을 입력하세요"
    />
  );
};

export default Input;