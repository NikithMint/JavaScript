// function hello(){
// alert("Hello welcom to my webpage")
// }
// // Time out
// setTimeout(hello,2000)// 2000ms = 2s

// callback
function sum(a,b){
    console.log(a+b)
}
function calculator(a,b,sumCallback){
    sumCallback(a,b)
}
calculator(1,2,sum)


// set time out
// const hello = () => {
//     console.log("hello")
// }
// setTimeout(hello,3000)


for(let i=0;i<5;i++){
    let str=""
    for(let j=0;j<5;j++){
        str=str+j
    }
    console.log(str)
}

// Time out 
function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId)
        if (getNextData){
            getNextData()
        }
        
    },2000)
}
getData(1,()=>{
    console.log("getting data2....")
    getData(2,()=>{
        console.log("getting data3.....")
        getData(3)
    })
})







