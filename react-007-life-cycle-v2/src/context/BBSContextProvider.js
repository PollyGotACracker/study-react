import {
  useCallback,
  useEffect,
  useRef,
  useMemo,
  createContext,
  useContext,
  useState,
} from "react";

const BBSContext = createContext();

export const useBBSContext = () => {
  return useContext(BBSContext);
};

/**
 * 선언부  // comp 바깥 영역
 * username State
 * Book State  // state initalize
 * Comps Header  // comp 내부 영역
 * Comps Body  // rendering 되는 return 영역
 * Effect 1번 // mount 할 때 최초 1번 실행되는 useEffect
 * counter set: 0  // useEffect 실행
 * ...
 * Counter Click  // useCallback 실행
 * Comps Header
 * Comps Body  // comp reRendering
 * counter prevSet: 0  // useEffect return 영역
 * counter set: 1  // useEffect 실행
 */

const BBSContextProvider = ({ children }) => {
  const count = useRef(0);
  const [counter, setCounter] = useState(count.current);

  // useState 를 callback 으로 선언하기
  // callback 함수 끝에는 실제 값을 초기화하는 return 이 있어야 한다.
  const [username, setUserName] = useState(() => {
    console.log("username State");
    return "polly";
  });

  const [book, setBook] = useState(() => {
    console.log("Book State");
    return { title: "JS", author: "홍길동", price: 2000 };
  });

  // console 에 Comps Header, Comps Body 가 출력
  // (reRendering)
  //   const counterClick = () => {
  //     console.log("Counter Click");
  //     setCounter(++count.current);
  //   };

  // 함수의 재사용
  // reRendering 시 배열 값 변경 여부를 조회하여 함수 생성
  const onCounterClickHandler = useCallback(() => {
    console.log("Counter Click");
    setCounter(++count.current);
  }, []);

  /**
   * useEffect(cb, [deps])
   * deps 배열이 비어있으면 Mount 될 때 한 번만 실행된다.
   */
  useEffect(() => {
    console.log("Effect 1번");
    return () => {
      console.log("Effect return");
    };
  }, []);

  /**
   * deps 배열이 있는 경우
   * deps 의 상태에 따라 Effect() 가 달리 실행된다.
   * return: 이전 상태가 Unmount 될 때 실행
   * 기본 cb: 상태가 Mount 될 때 실행
   */
  useEffect(() => {
    // componentDidMount
    // + componentDidUpdate(deps 로 설정된 state 가 변경될 때)
    console.log(`counter set: ${counter}`);
    return () => {
      // componentWillUnmount
      console.log(`counter prevSet: ${counter}`);
    };
  }, [counter]);

  // Context 에서 value 로 설정할 props 를 useMemo 로 묶으면
  // 변수, 함수를 선언하고 재사용 가능하다.
  const props = useMemo(
    () => ({
      username,
      book,
      counter,
      onCounterClickHandler,
    }),
    [username, book, counter, onCounterClickHandler]
  );

  return <BBSContext.Provider value={props}>{children}</BBSContext.Provider>;
};

export default BBSContextProvider;
