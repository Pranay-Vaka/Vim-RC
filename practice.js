function grade_calc(student_score, total_possible_score) {
	let student_percentage = (student_score / total_possible_score) * 100
	let grade = ""

	if (student_percentage <= 59) {
		grade = "F"
	}
	
	else if (student_percentage > 59 && student_percentage <= 69) {
		grade = "D"
	}
	
	else if (student_percentage > 69 && student_percentage <= 79) {
		grade = "C"
	}
	
	else if (student_percentage > 79 && student_percentage <= 89) {
		grade = "B"
	}

	else if (student_percentage > 89 && student_percentage <= 99) {
		grade = "A"
	}

	else {
		console.log("You have inputed the wrong value!")
	}

	console.log(`You got a ${grade} (${student_percentage})`)	
}

function test_object() {
	let person = {
		name: "Andrew",
		age: 27,
		lives_in: "Philadelphia"
	} 
	
	console.log(`${person.name} is ${person.age} and lives in ${person.lives_in}`)
	
	person.age += 1

	console.log(`${person.name} is ${person.age} and lives in ${person.lives_in}`)
}

function password_validation(password) {
	if (password.length < 8 || password.toLowerCase().includes("password")) {
		console.log("Password must be at least 8 characters and cannot include the word password")
	}	
		
	else {
		console.log("Success")
	}

}

function counting_algorithm() {
	for (let i = 0; i < 10; i++) {
		console.log(i)
	}
}


function array_looping() {
	let array = ["this", true, "that"]	
	for (let i = 0; i < array.length; i++) {
		console.log(array[i])
	}
}

function object() {
	let Car = { // Store all this information under the variable name Car 
		type: "Toyota", //name:values
		year: 2000,
		get_year: function() { //You can store functions in the object 
			return this.year // To reference a value in the same object, you have to use the this keyword 
		}
	
	}
	
	console.log(Car.get_year()) // Can call using this method 
	
	x = new String() // You can create a data type specific object using the String object or the Boolean object, etc 
	// Not a good idea to use these as they complicate code and slow down exectuion speed
}

function events() {
	// You can make an element do something using this method
	// <element event="some JavaScript"> 
	// <button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>
		// There are other command methods that can be used:
		// onchange - when there is a change in the html element
		// onclick - when the html element has been clicked
		// onmouseover - when the user hovers the mouse over the html element
		// onmouseout - when the user moves the moues away from the html element
		// onkeydown - when the user click a certain key
		// onload - when the page has finally loaded
}

function strings() {
	let string = "Pranay Vaka"
	string.length// Everything is an object in js and so you can access the property of length
	let text = "We are so called \"vikings\"" // You can use \ as an escape character for the apostrophes
	x = 10
	y = "10"
	
	if (x == y) {
		console.log(true)
	}
	
	if (x === y) {
		console.log(false)
	}
	// \n allows for a new line to be made
		//	\r carriage return
		//	\t allows for a tab
	
	//	you can slice a string and it will return that part of the string
	string.slice(1, 3)
	
	// You can use the substring method, but that can't take negative values
	string.substring(1, 3)

	// you can use the substr method, but the second parameter takes the length of the string after the first
		// string
	
	// You can use the replace method to replace certain portions of the text with other text
	string.replace("Pranay", "Nishant")
	// But this is only for the first match
	
	// The split method will split in a given argument
	
}

function arrays() {
	let fruits = ["apple", "banana", "grape", "plum", "mango"]
	// you can loop through the fruits array using the forEach method
	
	fruits.forEach(function (fruit) {
		console.log(fruit)
	})

	// You can push an element onto the list using the push method
	
	fruits.push("tomato")

	// The pop method will take off the last elemet of the list
		// the shift method will take off the first element of the list
	
	// You can create a constant array
	
	const array = [1, 2, 3]
	
	//Const means that you cannot reassign the variable to another list
	// You can howerver change the elements
	

}

function date() {
	let date = new Date() // This will output the date
	
	date = new Date("2021-5-3") // This is called the ISO format and is a strict standard in JS and is a good idea to use	
}


function maths() {
		Math.PI // The Math object can get many values such as pi
		Math.E // Gets eulers number
		let x = Math.PI
		Math.round(x) // Will round the number to the nearest integer
		Math.pow(8, 2) // This will return 8 to the power of 2
		Math.random() // This will return a random number between 0 and 1 that has 17 decimal places
		Math.floor(Math.random * 10) // This will return a random value from 0 to 9
		Math.floor(Math.random() * 11) + 5 // This will return a value from 5, 10
		
		function getRndInteger(min, max) { // This can be used to get a random number every time
				return Math.floor(Math.random() * (max - min) ) + min;
		}
}


function boolean_handler() {
		let bool = true // This is a boolean
		let string = "true"
		if (bool == string) { // This will compare both of the values and will return true because they don't have to be the same data type 
				console.log(x)
		}

		if (bool !== string) { // This will return true as they are not the same data type which the triple equal to sign will require in order for this to be correct
				console.log("This is false") // The triple equal to sign is also called the strict comparison 
		}
}

function switch_test() {
		let x = 2
		switch (x) { // You can switch between cases depending on what is in this switch parameter 
				case 1:
						console.log("This is case 1") // This parameter is if case is 1 
						break
				case 2:
						console.log("This is case 2") // This will be executed because x == 2
						break
				default: // This will run if none of the cases are true
						console.log("This is default case") // You don't need to put this as the last part of the switch cases
						break
	
		}
}

function loops() {
		for (let i = 0; i <= 10; i++) { // This will count numbers from 0 to 10
					console.log(i)
		}

		let obj = {
				fname: "Pranay",
				lname: "Vake",
				age: 16,
		}

		for (let i in obj) { // This will iterate through the object keys
				console.log(i) // This will output the key names
				console.log(obj[i]) // This will return the values 
		// This can be used for the arrays as well, however it is better to use the foreach function or the for of as this does not regard the indexs
			
		}
		

		let array = [1, 2, 3]	
		for (let i of array) {
				console.log(i) // This will output the element in the array 
		}
		
		let i = 0
		while (i < 10) { // This is how you use a while loop
				console.log(i)
				i ++		
		}

		let text = ""
		do { // This is how you use a do while loop
				text += "The number is" + i
				i ++
		}
		while  (i < 10)
}

function type_of() {
		console.log(typeof "string") // This will return the data type of the variable that follows it
		console.log(typeof 3.14)
		console.log(typeof 3)
}


function re() {
		// People ususally use the search and replace methods in this
		let string = "This is string that has been typed by Pranay Vaka"
		let n = string.search("Pranay") // This will search for the index at which this word starts
		n = string.search(/pranay/i) // Does a case insensitve search
		n = string.replace(/pranay/i, "Nishant") // Does a case insensitive search and replaces that word with Nishant
		// g does global matching
		// m does multiline matching	
}

function errors(){
	// try lets you test a block of code for errors
	// catch lets you handle those errors
	// throw lets you create your own errors 
	// finally lets you write some code that executes regardless of the result of previous code
	let x = "5";
	try {
		if (ifNaN(x)) {
			throw "This is not a number";	
		}
	}
	catch(err) {
		console.log(err);
	}
	// There are 6 types of errors
	// EvalError, there is an error in the eval function (this doesn't exist in some newer versions of js)
	// RangeError when a number is out of range
	// ReferenceError, when an illegal reference has been made
	// SyntaxError, when a syntax error has occured 
	// TypeError, when a type error has occured
	// URIError, when an error in the URI has occured

}

function scope() {
	// There are 3 types of scopes in js - block scope, local scope and global scope
	// The block scope was introduced recently and limits variables to work in only the block of code they have been declared in 
	for (let i = 0; i <= 10; i++) {
		console.log(i); // The variable i is limited to the for loop block scope
	}

	// The local scope that is limited to the function it was declared in 
	function local() {
		x = 69; // The variable x can't be used anywhere else but the function local()
	}

	// global scope is when the variable has been declared outside of any function or block scope 
}

function hoisting {
	// In js, the variable can be used and then declared later
	// this can't be used with let and const as they are hoisted to the beginning of the function, but then is not initialized
	// This can then only really be used with var
	// It's not a good idea to use hoisting, as a lot of developers don't know about this trick and it does not really work with all declarations
}

function strict() {
	// "use strict";  is a directive that is placed at the beginning of a script or a function that tells it to be in strict mode
	// For example, in strict mode you can't use undeclared variables, and many more things. So this helps you write cleaner code
	
	"use strict"; // this is the directive that makes the function go to strict mode
	function something() {
		x = 5; // This variable can't be used as it has not been declared yet
	}

}

function arrows() {
	hello_world = function() {
		return "hello world"; // You can make this shorter using the arrow function 
	}
	
	hello_world = () => {
		return "hello world"; // You can make this even shorter 
	}

	hello_world = () => "hello world"; // This is the most optimum when it comes to the arrow function

}

function classes() {
	
	class Car { // This is the class name
		constructor(name, year) { // This is how you use the constructor for js, you don't need to put this as the first parameter
			this.name = name; // Instead of self, this is used
			this.year = year;
		}

		age(x) { // You don't need to use the name function to declare a method  
			return x - this.year;
		}
	}

	let my_car = new Car("Toyota", 2009); // An object is now declared, and in order to declare it, you should use the keyword new
	console.log(`My car is ${my_car.age(2021)} years old`);
}

