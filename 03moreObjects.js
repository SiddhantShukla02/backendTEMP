// singleton    : object made from constructor function is a singleton


const tinderUser = new Object(); // creating an empty object, same as const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Alice"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // { id: '123abc', name: 'Alice', isLoggedIn: false }

const regularUser = {
    email : "some@gmail.com",
    fullName: {
        userFullName:{
            firstName: "John",
            lastName: "Doe"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);  nesting objects

//  ? is used to check if the property exists, if it does not exist it will return undefined instead of throwing an error
// much like an if-else statement

// to combine two objects

const obj1 = {
    1: "one",
    2: "two"
}

const obj2 = {
    3: "three",
    4: "four"
}

// const obj3 = { obj1 , obj2 }; // this will create an object with obj1 and obj2 as properties , and not combine them

// console.log(obj3); 


// console.log(obj4); 

// can also use Object.assign to combine objects

// const obj5 = Object.assign({}, obj1, obj2); // this will combine the two objects into one object

// the {} is a good practice and it ensures that it creates a new object instead of modifying the first object
// not using the {} will modify the first object and return it with all the values of whatever objects are passed in


const obj4 = { ...obj1, ...obj2 }; // this will combine the two objects into one object using the spread operator, used mostly

// for data extraction from databases, it generally comes in the form of an array of objects, like:

const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

// console.log(tinderUser); 

// console.log(Object.keys(tinderUser)); 

// .entries returns an array of key-value pairs
// .values returns an array of values
// .hasOwnProperty checks if the object has a specific property , syntax: tinderUser.hasOwnProperty('id') output: true in this case


// -------------------------------------------------------------------------------------------------------------------------------------


const course = {
    name: "JavaScript Basics",
    price: 1000,
    instructor: "John Doe",
    duration: "4 weeks"
}

// destructuring the object means extracting the properties of the object into variables and 
// renaming them if needed into easy to use variables

const { instructor: i1} = course;

console.log(i1); 