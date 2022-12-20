# Hook

- 함수 컴포넌트에서 state 와 lifecycle features(생명주기 기능) 를 연동"hook into"할 수 있도록 하는 함수
- 함수의 최상위 레벨에서만 Hook 을 호출해야 한다. 반복문, 조건문, 중첩된 함수 내에서 호출해서는 안된다.
- 일반 자바스크립트 함수가 아닌, 함수 컴포넌트 또는 Custom Hook 내에서만 Hook 을 호출해야 한다.
- \*Custom Hook: 상태 관련 로직을 다른 컴포넌트에서 재사용할 경우. 각 컴포넌트의 state 는 독립적(useSomthing 네이밍)

## useState

- 배열 destructuring 을 사용하여 state 변수를 선언한다.
- 첫 번째 변수는 데이터(something), 두 번째 변수는 데이터를 변경하는 함수(setSomthing)
- 데이터는 함수를 통해서만 변경해야 한다.
- 함수 내의 인수는 데이터의 초기값이다.

## useEffect

- 모든 DOM rendering 및 update 다음에 실행되므로 rendering 후 데이터가 변경되는 경우(side effect)에 사용한다.
- 비동기적으로 실행되어 DOM update 를 차단하지 않는다.
- 메모리 누수를 고려한 clean-up 이 필요한 경우 return 문을 통해 해당 용도의 함수를 반환할 수 있다.
- 두번째 인수(선택)로 배열을 넘겨서 해당 데이터가 변경될 때만 effect 가 실행되도록 할 수 있다.  
  만약 effect 실행 및 clean-up 과정을 단 한번 실행해야 할 경우 빈 배열을 넘겨준다(초기값 유지).

## useCallback

- 반복적으로 호출되는 함수를 memoization 하여 불필요한 rendering 을 방지한다.
- \*memoization: 함수의 이전 계산 결과를 메모리에 저장해둠으로써 반복적인 계산을 막는다.
- 두번째 인수(선택)로 배열 데이터를 넘겨서 해당 데이터가 변경될 때만 callback 이 실행되도록 할 수 있다.
