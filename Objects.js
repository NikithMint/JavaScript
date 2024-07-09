const prompt = require('prompt-sync')();
// Objects
 const person = {name:"leonardo",
                shirt:"White"
            }
console.log(person.name)
console.log(person.shirt)
// bracket notation
console.log(person['name'])
console.log(person['shirt'])
person.phone="9704623593" // assign object
person['roll no']="221910311057"
console.log(person.phone)
console.log(person)
// person2
const person2={
    name:'Mint',
    shirt:'blue'
}
console.log(person2)
console.log(person2.name)
console.log(person2.shirt)

// arrow function (important)
const introducer=(name, shirt)=> {
    const person3={
        name:name,
        shirt:shirt,
        price : Number(prompt("Enter price")),
        discount: Number(prompt("enter a discount amount"))
    }
    const intro = `hi this is ${person3.name} ironman ${person3.shirt}`

    return intro 
}
console.log(introducer('ironman','red'))
console.log(introducer("hi","bye"))
 











