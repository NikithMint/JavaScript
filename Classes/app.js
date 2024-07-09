// prototype
// const employee = {
//     calcTax(){
//         console.log("tax rate is 10%")
//     }
// }
// const karanArjun = {
//     salary: 5000,
// }
// const karanArjun1 = {
//     salary: 4000,
// }
// const karanArjun2 = {
//     salary: 3000,
// }
// karanArjun.__proto__=employee

// class Toyatacar{
//     constructor(brand,milage){
//         console.log("creating a new object")
//         this.brandcar=brand
//         this.milagee=milage
//     }
     
//     start(){
//         console.log("start")
//     }
//     stop(){
//         console.log("stop")
//     }

// }

// let fortuner = new Toyatacar("fortuner",12)
// let lexus = new Toyatacar()
// fortuner.start()

class Rectangle{
    constructor(_width,_height,_color){
        console.log("Rectangle is created")
        this.width=_width
        this.height=_height
        this.color=_color
    }
    getarea(){
        return this.width * this.height
    }
    printDescription(){
        console.log(`iam rectangle of ${this.width} x ${this.height} and Iam ${this.color}`)
    }
}
let myRectangle1 = new Rectangle(10,11,"Blue")
let myRectangle2 = new Rectangle(1,2,"Red")
let myRectangle3 = new Rectangle(1,3,"green")
console.log(myRectangle1.getarea())
myRectangle1.printDescription()
