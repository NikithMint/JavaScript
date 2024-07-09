const prompt = require('prompt-sync')();
const groceries=['a','b','c','d','e','f','g']
for (let i=0;i<groceries.length;i++){
    for(let j=0;j<1;j++){
        console.log(groceries[i],groceries[i])
        }
}

const numberss=[]
let no_of_numbers=Number(prompt("Enter a Number"))
for (let k=0;k<no_of_numbers;k++){
    numberss.push(k)
}
console.log(numberss)


//using Arrow function
// const double = (no_of_numbers)=>{
//     const numberss=[]
//     for (let k=0;k<no_of_numbers;k++){
//         numberss.push(k)

// }
// console.log(numberss)
// }
// console.log(double(4)) 

// const letterCounter = ()=>{
//     const phrase='hello nikith'
//     console.log(phrase.length)
//     count=0
//     for (const letter of phrase){ // to display the letters
//         console.log(letter)
//     }
//     for(let j=0;j<phrase.length;j++){
//         count=count+1
//         console.log(j)    
//     }
//     return count
// }
// console.log(letterCounter())



// sum of numbers in an array
// const sumarray =(num)=>{
//     let arr=[]
//     for (let j=0;j<num;j++){
//         let inpt=Number(prompt("enter numbers"))
//         arr.push(inpt)
//     }
//     let sum=0
//     for (let ele of arr){
//         sum=sum+ele
//     }
//     console.log(sum)
// }
// let inn=Number(prompt("enter"))
// console.log(sumarray(inn))



// maximum element in an array
const maxelement=(num)=>{
    let arr=[]
    for(let j=0;j<num;j++){
        let inpt=Number(prompt("enter number"))
        arr.push(inpt)
    }
    let x=arr[0]
    for (let ele of arr){
        if (ele>x){
            x=ele
        }
    }
    console.log(x)
}
let inn=Number(prompt("enter"))
console.log(maxelement(inn))

// frequency of number in array

let inpt=String(prompt("enter string "))
a=inpt.split("")
let countt={}
for (const j of a){
 
    if (j in countt){
        countt[j]=countt[j]+1
    }else{
        countt[j]=1
    }
}
console.log(countt)    
console.log(a)
                 
    


