// array methods
// 1.Map 2.filter 3.Reduce

[1,2,3,4].map(number=>{
    console.log(number *2)
    console.log("haha")
    console.log("nikith")
})

const filter = (numbers, greaterThan)=>{
    let result=[]
    for (const number of numbers){
        if (number>greaterThan){
            result.push(number)
        }
    }
    return result

}
console.log(filter([1,2,3,4,5,6],3))
// filter functionn
const nums=[1,2,3,4,5,6]
console.log(nums.filter(num => num>=3))

const actors=[{
    name:'nikith',networth:10},
    {name:'Anuradha',networth:100},
    {name:'papaiah',networth:20},
]
console.log(actors.filter(actor=>actor.networth>10))
console.log(actors.filter(actor=> actor.networth>10 && actor.name))
// sum of all networth using reduce function.
let networthh=actors.map(actor=>actor.networth)
console.log(networthh)
const net=networthh.reduce((e,f)=>e+f)
console.log(net)



//reduce.
//reduce takes an argument.
//reduce loops and gives you back the accumulator

const numbers1=[1,2,3]
const numbers2=[2,3,4]
const res=numbers1.reduce((a,b)=>a+b)
const res9s=numbers2.reduce((c,d)=>c*d)
console.log(res)
console.log(ress)





