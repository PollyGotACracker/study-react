import { Button } from "@mui/material";

/**
 * Material-UI 에서 제공하는 Button 컴포넌트를 사용
 * Button 컴포넌트를 나만의 ButtonComp 로 커스터마이징
 */
const ButtonComp = (props) => {
  /**
   * children props
   * 하위 comps 를 사용할 때
   * <Comps></Comps> 방식으로 구현하고
   * comps 와 comps 사이에 지정한 어떤 것이든지
   *    (문자열, tag, 변수 등 모든 것)
   * 하위 comps 에서
   *    props.children
   * 으로 값을 얻을 수 있다.
   *
   * <comps><p>우리나라</p></comps> 처럼 사용하면
   * comps 컴포넌트에서는 props.children 에
   * <p>우리나라</p> 의 데이터가 통째로 담겨서 전달된다.
   */
  const { text, variant, children } = props;
  /**
   * Button variant 변수에 부모로부터 받은
   * variant 를 전달하기
   *
   * 어떤 변수의 값을 설정하여 UI 를 변경하는 것
   * 함수 등을 사용하여 tag 를 Select 하고
   * Select 된 tag 의 세부 속성들을 직접 핸들링하여
   * style 등을 지정했는데,
   * React 에서는 마치 변수값을 설정하는 것처럼 만들어두고
   * 부모, 형제 컴포넌트들에서 변수의 값을 변경함으로써
   * 요소의 모양을 변경할 수 있다.
   */
  return (
    <Button variant={variant} color="primary">
      {children || text}
    </Button>
  );
};

export default ButtonComp;
