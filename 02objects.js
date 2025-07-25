

// object literals in this file

//  Object.create : this makes a singleton object

const mySymbol = Symbol('key1'); 
// adding a function to the object

let greeting = function() {
    console.log(`Hello ${JsUser.name}`);
}

const JsUser = {
    name: 'John',
    "Sur Name": 'Doe', // can not be called with dot notation, needs to be called with bracket notation [] , like JsUser["Sur Name"]
    age : 30,
    location: 'USA',
    email : 'John@google.com',
    isLoggedIn: false,
    lastLoginDate: ["Monday", "Tuesday", "Wednesday"],
    [mySymbol] : "secretKey", // syntax to use a symbol as a key, also needs to be called with bracket notation [mySymbol]
    greeting ,
}

// to change a property value

JsUser.name = 'Jane'; // changing name property value
JsUser.email = 'random@xyz.com'; // changing email property value

// console.log(JsUser.email); 

// Object.freeze(JsUser); // this will make the object immutable, no changes can be made to the object

// JsUser.email = 'XYZ@random.com'; 

// console.log(JsUser.email); //still prints og value

// to get a full object printed to console
// console.log(JsUser); 


console.log(JsUser.greeting); // this returns the reference to the function
console.log(JsUser.greeting()); // calling the greeting function

// another way to add a function to the object
JsUser.sayBye = function() {
    console.log(`Bye ${this.name}, see you soon!`);
}

console.log(JsUser.sayBye); // This returns the reference to the function
console.log(JsUser.sayBye()); // calling the new function sayHello

// anonymous function definition is because they are not listed in the actual object body, instead they get added later on