function myFunction(msg,n){ // msg parameter
    console.log(msg,n)
}
myFunction("hello",10) 
function sum(x,y){
    s=x+y
    return s
}
console.log(sum(5,5))

// count the no of vowels

let countvowels=(st)=>{
    
    let count=0
    for(let ele of st){
        if (ele=="a" || ele=="e" || ele=="i" || ele=="o" || ele=="u"){
            count=count+1
        }
    }
    console.log(count)
}
countvowels("nikith")

