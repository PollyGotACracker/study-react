# React UIUX Project

- since 2022.12.05

## React Project 를 위한 도구 설치

```
npm install -g yarn
npm install -g create-react-app
```

## React Virtual DOM

- React 는 상태변수를 감시하여 데이터가 변경되면 전체 UI를 새로운 가상DOM(virtual DOM)에 reRendering,  
  이전의 가상DOM 과 서로 비교한 후 변경된 부분만 실제DOM(real DOM) 에 반영한다(동기화).
- view-state 연결에서, state 데이터가 변경되면 view 는 해당 state 만 변경된다.

## React 기본 사용법

- react 폴더명은 대문자, underbar(\_) 사용 불가. 소문자와 dash(-) 사용
- 경로에 확장자가 없어도 import 가능
- 컴포넌트명은 첫글자를 대문자로 설정
- 컴포넌트 내 최상위 변수는 컴포넌트 파일명과 동일하게 설정(HTML tag 와 중복 방지)

## JSX(JavaScript XML)

- HTML tag 의 class 대신 className 사용
- JS 문법 사용: 큰따옴표`""` 대신 중괄호`{}` 사용  
  HTML tag 에 inline 방식으로 JS 함수 삽입

## Props

- 부모 컴포넌트가 자식 컴포넌트에게 객체 형태로 요소 전달

## [state와 props의 차이점](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md)

- props(properties) 와 state 는 일반 JavaScript 객체로, 두 객체 모두 렌더링 결과물에 영향을 주는 정보를 갖고 있다.
- props는 (함수 매개변수처럼) 컴포넌트에 전달되는 반면 state는 (함수 내에 선언된 변수처럼) 컴포넌트 안에서 관리된다.
