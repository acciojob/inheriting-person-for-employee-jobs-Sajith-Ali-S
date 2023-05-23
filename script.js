
function Person(name,age){
	this.name = name;
	this.age = age;
}

Person.prototype.greet = function (){
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
}


//Inherit the Person prototype in the Employee prototype.
function.Employee(name,age,jobTitle){
	Person.call(this,name,age);
	this.jobTitle = jobTitle;
}

//Add a method to the Employee prototype called jobGreet()
//that logs a greeting with the person's job title.
Employee.prototype.jobGreet = function() {
    console.log("Hello, my name is " + this.name + ", I am " + this.age + " years old, and my job title is " + this.jobTitle + ".");
}


Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

