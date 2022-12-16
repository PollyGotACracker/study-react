// Computed Property Names

// num1 변수에 문자열 숫자1 을 저장(할당)
const num1 = "숫자1";

// num1 변수를 [] 로 묶고 새로운 값을 할당
// const 숫자1 = 100 코드를 새로 만들어라
[num1] = 100;
console.log(숫자1); // 100

const name1 = "이름-1";
const age = "나이";
const tel = "전화번호";

// 객체의 속성 키에 - 가 들어갈 수 있게 된다.
const info = {
  [name1]: "홍길동",
  [age]: 30,
  [tel]: "010-111-1111",
};
/*
const info1 = {
  이름-1: "홍길동",
  나이: "30",
  전화번호: "010-111-1111",
};
*/
