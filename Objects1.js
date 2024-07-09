const prompt = require('prompt-sync')(); // import 
const introducer=(name, shirt)=> {
    const person3={
        name:name,
        shirt:shirt,
        price : Number(prompt("Enter price")),
        discount: Number(prompt("enter a discount amount")),
        Total_price: function(){
            return this.price-this.discount
        }

    }
    const intro = `hi ${person3.Total_price()} this is ${person3.name} ironman ${person3.shirt} hello ${person3.price} mannn ${person3.discount}`
 
    return intro 
}
console.log(introducer('ironman','red'))
console.log(introducer("hi","bye"))



