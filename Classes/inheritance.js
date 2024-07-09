class Person{
    constructor(name,phone){
        this.name=name
        this.mobile_no=phone
        console.log("this is constructor 1")
        
    }
    getPersonalDetails(){
        
        console.log("name",this.name,"\nmobile:",this.mobile_no)
    }
    getsalary(){
        console.log("salary",this.salary,"\ncompany:",this.company)
    }
}
class Employee extends Person{
    constructor(name,phone,salary,company){
        console.log("this is constructor 2")
        super(name,phone)
        this.salary=salary
        this.company=company
        
    }
    hey(){
        console.log("hey")
    }
}

// obj = new Employee("nikith",900,14,"hcl")
// obj.getPersonalDetails()
// obj.getsalary()
obj1 = new Person("mint",500)
obj1.getPersonalDetails()
