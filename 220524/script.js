//데이터 구조 array
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item From Array
console.log(daysOfWeek);

// Add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek);

//array의 목적은 하나의 variable 안에 데이터의 list를 가지는 것

const player = {
    name: "googoo",
    point: "81",
    fat: true,
};
console.log(player);
console.log(player.name);
player.fat = false;
player.newname = "tomato"; 
player.point = player.point - 50;
console.log(player);