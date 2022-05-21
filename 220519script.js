// 콘솔에게 메세지를 보내는 코드
const a = 9;
const b = 3;
let myName = "googoo81"; //JS는 camelcase방식으로 코드를 작성함

console. log(a * b);
console. log(a + b);
console. log(a / b);
console. log("hello " + myName);

myName = "hyeanwoo";

console. log("My original name is " + myName);
//작은 따옴표('')도 사용가능 주의사항은 시작한걸로 닫아야함
//variable: 값을 저장하거나 유지하는 역할
//constant: 상수(c에선 int)
//
//const와 let의 차이점 :
// const = constant(상수) = 값이 바뀔 수 없음. (대부분은 const 사용)
// let = 새로운 것을 생성할때 사용하는 것 = 값을 바꿀 수 있음
// +@ TIL: const와 let을 읽고 규칙을 안다면 코드 작성자의 의도 파악 가능 (코드가 무엇을 할지 알 수 있음.)

//let과 const 존재전에는 var만 존재했었음 (let이랑 비슷함)
// 문제점: 작성자가 코드를 잘못 작성해도 경고를 안띄워줌.(이젠 절대 사용하지 않는 코드)
// 정리: 항상 const를 사용. 가끔은 let. var는 절대 안됨.