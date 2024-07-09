const prompt = require('prompt-sync')();
function Nikith(name){
    console.log(name)
    Nikith2()
}
Nikith("Tankashala") // function calling

function Nikith2(){ // no arguments.
    console.log("hello")
}

function Nikith3(hey){
    greet= "hi " + hey + " nice to meet you"
    // or 
    greeting = `hi ${hey}, nice to meet you`
    console.log(greet)
    console.log(greeting)
}
Nikith3("nikith mint")

function sum(a,b){
    console.log(a+b)
}
sum(1,3)




