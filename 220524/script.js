// //데이터 구조 array
// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// // Get Item From Array
// console.log(daysOfWeek);

// // Add one more day to the array
// daysOfWeek.push("sun");

// console.log(daysOfWeek);

// //array의 목적은 하나의 variable 안에 데이터의 list를 가지는 것

// const player = {
//     name: "googoo",
//     point: "81",
//     fat: true,
// };
// console.log(player);
// console.log(player.name);
// player.fat = false;
// player.newname = "tomato"; 
// player.point = player.point - 50;
// console.log(player); 

// //function 어떠한 코드를 캡슐화 하여서 여러번 실행할 수 있게 해줌
// function sayHello(nameOfPerson, age){
//     console.log("Hello! my name is " + nameOfPerson + " and I'm " + age);
// }

// sayHello("googoo", 17);
// sayHello("hotdog", 17);
// sayHello("smallplash", 6);
// sayHello("ruin", 5);
// sayHello("plash", 6);

// //argument(인수): function을 실행하는 동안 어떤 정보를 function에 보낼 수 있는 방법.

const player = {
    name: "gogoo81",
    sayHello: function (otherPersonsName) {
        console.log("hello! " + otherPersonsName + " nice to meet you");
    },
}

console.log(player.name);
player.sayHello("googoo81");
player.sayHello("plash")