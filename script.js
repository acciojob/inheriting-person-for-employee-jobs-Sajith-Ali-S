Person.__proto__.greet = function(){
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
}
Employee.__proto__.greet = greet;
// complete this js code
function Person(name, age) {
this.name=name;
this.age=age;
}
Employee.__proto__.jobGreet = function(){

    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`)
}

function Employee(name, age, jobTitle) {
    this.name=name;
    this.age=age;
    this.jobTitle=jobTitle;
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

