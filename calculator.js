const prompt = require('prompt-sync')();
function calculator(){
    food=Number(prompt("enter food price"))
    tip=Number(prompt("enter tip"))
    total=tip+food
    console.log("total",total)
}
calculator()
// Arrow Function with explicit return
const sumArrow = (a,b) => {
    return a + b
}
console.log(sumArrow(1,1))
// arrow fuction with implicit return 
const sumArrow1 = (a,b) => a + b
console.log(sumArrow1(1,1))



