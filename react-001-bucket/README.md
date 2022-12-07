# React 에서 input tag 처리

- input tag 의 onChange Event 를 설정하여 input box 에 문자열 입력을 처리한다.
- input tag 에 무엇인가 입력되면, 입력된 문자열을 변수에 담아서  
  React 프로젝트의 다른 곳에서 Rendering 등의 처리를 수행한다.
- 이러한 과정을 수행하려면, input tag 의 value 속성과 state 변수를 연결해야 한다.
- 그러나 input tag 의 value 속성에 state 변수를 연결하면 input tag 는 readonly 성질을 갖게 된다.
- 따라서, input tag 의 onChange event 를 설정하여 입력된 문자열을 value 속성에서 getter 하여 다시 state 변수에 setting 해주는 절차가 필요하다.

## state 변수의 배치 setting

- 한 화면에서 여러 번의 state 변수 값이 변경되면, state 변수 값이 변경될 때마다 화면이 다시 Rendering 된다.
- React 에서는 여러 state 변수 변경 코드가 있으면(set...(), set...())  
  반복되는 화면 Rendering 을 막고 성능을 향상시키기 위해 이 함수들을 모아서 한번에 처리한다.
- 일정 시간 동안의 변경 사항을 모아 한번에 처리하는 현상인 'batch 처리(일괄처리)' 때문에 가끔 원하지 않는 결과가 나타나기도 한다.
- 이 batch 처리는 철저하게 비동기 방식이므로 순서가 보장되지 않는다.
