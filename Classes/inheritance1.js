class Person{
    constructor(name){
        this.name=name
        this.species="homo species"
    }
    eat(){
        console.log("eat")
    }
    sleep(){
        console.log("sleep")
    }
    work(){
        console.log("do nothing")
    }
}
class Engineer extends Person{
    constructor(name){
         //  to invoke parent class constructor
        super(name)
        
     
    }
    
    work(){
        console.log("solve problems, build something")
    }
}
class Doctor extends Person{
    work(){
        console.log("treat patients")
    }
}

let nikith=new Engineer("nikith")
nikith.work()