alert("welcome")
// window object is a global object with lots of properties and methods.
// it is automatically created by browser.
// console.log(document.body) // shows what are present in body
// console.dir(document.body.childNodes[1]) // div
// document.body.childNodes[1].innerText="MINT" // div tag chnages to MINT

//by id
// let heading=document.getElementById("heading")
// console.dir(heading)
// //by class
// let headings = document.getElementsByClassName("heading-class")
// console.dir(headings)
// console.log(headings)
// //by tag
// let elements = document.getElementsByTagName("p")
// console.dir(elements)
// // query selector
// let firstEl = document.querySelector("#heading")
// console.dir(firstEl)
// //adding of srings
// let h2 = document.querySelector("h2")
// let h1=document.querySelector("h1")
// console.dir(h2.innerText)
// h2.innerText=h2.innerText+h1.innerText
// // attribute
// let id = h1.getAttribute("id")
// console.dir(id)
// // set attribute value
let but1 = document.querySelector(".btn1")

but1.onclick = () =>{
    document.querySelector(".btn1").innerHTML="Hello"
    alert("button1 was clicked")
}
let but2 = document.querySelector(".btn2")
but2.onclick=()=>{
    alert("button2 was clicked")
}
let div = document.querySelector("div")
div.onmouseover=()=>{
    console.log("you are inside")
}
but1.addEventListener("click",(evt)=>{
    console.log("button1 was clicked")
})

let pressme = document.querySelector(".switch")
let mode="light"
pressme.onclick=()=>{
    if (mode=="light"){
        mode="black"
        document.querySelector("body").style.backgroundColor="black"

   }else{
        mode="light"
        document.querySelector("body").style.backgroundColor="white"
    
        
        
    }
    console.log(mode)
}

document.write(
    2+3==5? "Yes correct answer" : "No wrong answer"
    )

prompt("Please enter your name")
confirm("are you sure")

// for id query selector use #
// for class use . 
 
// type conversion

var a ="55"
var b = 44
var z = parseInt(a)
document.write("<br>"+typeof z+ "<br>" )

var apple="red"
let orange = "yellow"
const banana= "green"

function fruit(){
    document.write(apple+ "<br>")
    document.write(orange+ "<br>")
    document.write(banana+ "<br>")
    
}
fruit()

// push method
let sports= ["cricket","football"]
sports.push("socker")
document.write(sports+ "<br>")

sports.forEach(function(items){
    document.write(items+"<br>")

})

let marks=[[10,20,30],
[40,50,60],
[70,80,90]]
document.write(marks[0][1])

let x=0
while(x<=10){
    document.write("hello everyone"+"<br>")
    x=x+1
}

const targetingAtt = document.querySelector("h1").attributes.id
console.log(targetingAtt)

// spread operator
const games=["cricket","football","tennis"]
const players=["virat","dhoni"]
const coach=["amit","ganguly"]

const group=[...games,...players,...coach]
document.write(group)

// destructuring
const samplenumbers=[1,2,3,4,5,6]
document.write(samplenumbers)
// syntax
const [one,two,three,appple,mango,books] = samplenumbers
document.write(two)



console.log("First code")
console.log("second code")

setTimeout(()=>{
    console.log("Third code")
},3000 )
console.log("fourth code")
console.log("fifth code")

const Register=(para)=>{
    setTimeout(()=>{
        console.log("please register")
        para()
    },2000)
}

const Login=()=>{
    setTimeout(()=>{
        console.log("Please Login")
    },4000)
}
const Thankyou = ()=>{
    setTimeout(()=>{
        console.log("Thank you")
    },5000)
}
// Higher order function
Register(function(){
    console.log("i like apples")
})
Login()
Thankyou()






