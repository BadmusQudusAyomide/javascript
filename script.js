// console.log('Hello');
// console.log("I like Pizza");

// window.alert("Heeeeeee");
// document.getElementById("h").textContent ="hy";
// document.getElementById("ppp" ).textContent="I hate pizza"

// alert('Hello');
// console.log(100);
// console.log("Hello World");
// console.log(20, "Hello", true);
// const x = 100;
// console.log(x)
// console.error("Alert");
// console.log("warning");
// console.table({ name: "Brad", email: "qudusay192Agmail.com" });
// console.group("simple")
// console.log(x)
// console.error("Alert");
// console.log("warning");
// console.groupEnd();

// const styles = 'padding: 10px background-color:white; color:green';
// console.lo g('%cHello World', styles);

// var, let, const

// let firstName = "Qudus";
// let lastname = "Badmus";
// console.log(firstName, lastname);
// let age = 30;
// console.log(age);

// age = 31;
// console.log(age);

// let score = 1;
// console.log(score);

// if (true) {
//     score = score + 1;

// }
// console.log(score);
// const x = 100;
// console.log(x)

// const arr = [1, 2, 3, 4];
// arr.push(5);
// console.log(arr);
// const person = {
//     name: "brad"
// };
// person.name = "John";
// person.email = "qus@gmail.com";
// console.log(person);

// let a, b, c;

// const d = 10, e = 20, f = 30;

// console.log(d);

// // DATA TYPES
// const firstName = "Qudus Ayomide";

// const output = "firstName";

// console.log(firstName, typeof output);

// const age = 30;
// const input = age;
// console.log(age, typeof input);

// const owoyemi = true;

// const love = owoyemi;
// console.log(owoyemi, typeof love);

// const owoyemi1 = undefined;

// const love2 = owoyemi1;
// console.log(owoyemi1, typeof love);

// const name = "Owoyemi";
// const age = 30;

// heap
// const person = {
//     name: "Ajeyemi",
//     age: 20
// }

// let newName = name;
// newName = "Ademide";
// let newPerson = person;
// newPerson.name = "Ayomide";

// console.log(name, newName, newPerson);

// convert of type
// let amount = "100";

// // change string to number
// // amount = parseInt(amount);
// // amount = +amount;
// // amount = Number(amount);
// console.log(amount, typeof amount);

// change a number to string
// let am = 100;
// // am = am.toString();
// am = String(am)

// console.log(am, typeof am)

// let am = 99.5;
// // am = am.toString();
// am = parseFloat(am );

// console.log(am, typeof am)

// let am = 100;
// // am = am.toString();
// am = Boolean(am);

// console.log(am, typeof am)
// let am = "hello";
// // am = am.toString();
// am = parseInt(am);

// console.log(am, typeof am)

// Operators

// let x
// x = 5 + 5;
// x = 5 - 5;
// x = 5 * 5;
// x = 5 / 5;
// x = 5 % 5;

// console.log(x);
// // concatenation

// y = "Hello" + " " + "Owoyemi";

// console.log(y)

// // Exponent
// z = 2 ** 3;

// console.log(z)
// Increment
// a = 1;
//  a = a + 1;
// // x++;

// console.log(a)

// b = 1;
//  b = b - 1;
// // x++;

// console.log(b)

// Assignment
// x = 10;
//   Comparison Operators
// v = 2 == 4;

// console.log(v);
// Typeof
// v = 2 === 2;

// console.log(v);

// g = 2 != 3;
// console.log(g)


// g = 2 > 3;
// console.log(g)

// g = 2 < 3;
// console.log(g)
// g = 2 >= 3;
// console.log(g)

// Type Coeresion

// let h;
// h = 5 + "5";
// h = 5 + Number("5");
// h = 5 * "5";
// h = 5 / "5";
// h = 5 * null;
// h = 5 + null;
// h = Number(true);
// h = Number(false);
// h = 5 + true;
// h = 5 + false;
// x = 5 + undefined;

// console.log(h, typeof h)



// Strings
// let x

// const name = "John";
// const age = 30;
// x ="Hello, My name is " + name + " and i am " + age + " years old"
// console.log(x)

// let x

// const name = "John";
// const age = 30;
// // x ="Hello, My name is " + name + " and i am " + age + " years old"
// x = `Hello, my name is ${name} and i am ${age} years old`;
// console.log(x)

// let x;

// const name = "John";
// const age = 30;
// // x ="Hello, My name is " + name + " and i am " + age + " years old"
// const s = new String("Hello world");
// x = typeof s;

// x = s.length;
// // access value by key
// x = s[1];

// x = s.__proto__;

// x = s.toUpperCase();
// x = s.toLowerCase();
// x = s.charAt(0);

// x = s.indexOf("d")
// x = s.substring(1, 4);  
// x = s.substring(7);  
// x = s.slice(-11, -6); 
// x = "           Hello World";
// x = s.trim() 
// x = s.replace('world', 'owoyemi');
// x = s.includes("Hello");
// x = s.valueOf();

// x = s.split(' ');

// console.log(x);

// const myString = "developer";

// let myNewString;
// // SOlutin 1
// // myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
// // Solutiion 2
// // myNewString = myString[0].toUpperCase() + myString.substring(1);

// myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`; 

// // console.log(myNewString)

// let x;

// const num =  new Number(5.4527);

// x = num.toString();
// x = num.toString().length;

// x = num.toFixed(2);
// x = num.toPrecision(3);
// x = num.toExponential(2);
// x = num.toLocaleString('en-US');
// x = num.valueOf()

// console.log( x)

// let x;
// x = Math.sqrt(9);
// x = Math.abs(-5)
// x = Math.round(4.2)
// x = Math.ceil(4.2)
// x = Math.floor(4.9)
// x = Math.pow(2, 3)
// x = Math.min(4, 5, 3)
// x = Math.max(4, 5, 3)
// x = Math.random();
// x = Math.floor(Math.random() * 1000 + 1);
// console.log(x)

// Sum

// const x = Math.floor(Math.random() * 100 + 1);
// const y = Math.floor(Math.random() * 50 + 1);

// const sum = x + y;
// const sumOutput = `${x} + ${y} = ${sum}`;
// console.log(sumOutput);


// // Diffrerce
// const x = Math.floor(Math.random() * 100 + 1);
// const y = Math.floor(Math.random() * 50 + 1);

// const diff = x - y;
// const diffOutput = `${x} - ${y} = ${diff}`;
// console.log(diffOutput);

// Product
// const x = Math.floor(Math.random() * 100 + 1);
// const y = Math.floor(Math.random() * 50 + 1);

// const prod = x * y;
// const prodOutput = `${x} * ${y} = ${prod}`;
// console.log(prodOutput);


// let x;


// let d = new Date();

// x = d.toString()

// x = d.valueOf();
// x = d.getFullYear()
// x = d.getMonth() + 1;

// x = d.getDate();
// x = d.getDay();
// x = d.getMinutes();
// x = d.getMilliseconds();
// x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

// x = Intl.DateTimeFormat('en-US').format(d);
// x = Intl.DateTimeFormat('en-UK').format(d);
// x = Intl.DateTimeFormat('default').format(d);
// x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);
// x = d.toLocaleString('default', { month: 'short' });
// x = d.toLocaleString('default', {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric',
//     timeZone: 'America/New_York',
   
// });
// console.log(x);

// ARRAY
//    Array Literal
// const numbers = [12, 45, 33, 29, 39];

// // Array Constructor
// const fruits = new Array('apple', 'grape', "orange")

// console.log(fruits)

// let x;

// const numbers = [12, 45, 33, 29, 39];
// const mixed = [12, "Hello", true, null];

// // Array Constructor
// const fruits = new Array('apple', 'grape', "orange")

// x = numbers[0];
// x = numbers[0] + numbers[3];
// x = `My Favourite food is an ${fruits[2]}`;

// x = numbers.length;

// fruits[2] = 'pear';
// // fruits.length = 2; 
// fruits[3] = "strawberry";
// fruits[fruits.length] = "blueberry";
// fruits[fruits.length] = "peach";
// x = fruits;
// console.log(x)


//  Array Method
// let x;
// const arr = [34, 55, 95, 20, 15];
// arr.push(100);
// arr.pop()
// arr.unshift(99);
// arr.shift();
// arr.reverse();
// x = arr.includes(200);
// x = arr.indexOf(340);
// x = arr.slice(1)
// // x = arr.splice(1, 4);
// // x = arr.splice(3, 1);
// x = arr.splice(1, 4).reverse().toString().charAt(0);
// console.log(x);


// let x;
// const fruits = ["apple", "pear", "orange"];
// const berries = ["strawberry", "blueberry", "rasberry"];
// fruits.push(berries);
// x = fruits[3][1];
// const allFruits = [fruits, berries];

// x = allFruits[1][0]; 

// x = fruits.concat(berries);
// //   Spread Operator
// x = [...fruits, ...berries];
// // Flatten Array
// const arr = [1, 2, [3, 4], 5, [6, 7], 8];
// x = arr.flat();


// // Static Method on  Array object
// x = Array.isArray("hello");

// x = Array.from("12345");

// const a = 1;
// const b = 3;
// const c = 3;
// x = Array.of(a,b,c)
// console.log(x); 

// 1
// const arr = [1, 2, 3, 4, 5];
// arr.reverse()
// arr.push(0)
// arr.unshift(6);
// Another Method
// arr.push(6) 
// arr.unshift(0)
// arr.reverse()
// console.log(arr);



// 2
// const arr = [1, 2, 3, 4, 5]
// const arr2 = [5, 6, 7, 8, 9, 10]
// // Solution 1
// const arr3 = arr.slice(0, 4).concat(arr2);
// // Solution 2
// const arr4 = [...arr, ...arr2];
// arr4.splice(4, 1);
// console.log(arr4)

// Object Literals

// let x;

// const person = {
//     name: "john",
//     age: 30,
//     isAdmin: true,
//     address: {
//         street: "123 Maint S",
//         city: "Nigeria",
//         state: "MA",
//     },
//     hobbies: ["music", "sports "]
// };

// x = person.name;
// x = person["age"];
// x = person.address.state;
// x = person.address.city;
// x = person.hobbies[0];
// x = person.name = "jane Doe";
// person["isAdmin"] = false;
// delete person.age;

// person.hasChildren = true;

// person.greet = function () {
//     console.log(`My, name is ${this.name}`)
// }

// person.greet();

// const person2 = {
//     "first name": "Brad",
//     "last name":  "Traversy",
// }
// x = person2["firstname"]
// x = person;
// console.log(x)
// let x;
// const todo = new Object();

// todo.id = 1;
// todo.name = "Owoyemi"
// todo.age = "45"
// todo.completed = false;
// x = todo;

// const person = {
//     address: {
//         coords: {
//             lat: 42.9384,
//             lng: -71.3232,
//         },
//     },
// };
// x = person.address.coords.lat;
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };

// const obj3 = { ...obj1, ...obj2 }
// const obj4 = Object.assign({}, obj1, obj2);

// const todos = [
//     { id: 1, name: "Owoyemi" },
//     { id: 2, name: "Pick from school" },
//     { id: 3, name: "Love" }
// ]

// x = todos[0].name;

// x = Object.keys(todo).length;
// x = Object.values(todo);
// x = Object.entries(todo);
// x = todo.hasOwnProperty("boyfriend")
// console.log(x);
// const firstName = "John"
// const lastName = "Doe"
// const age = 30;

// const person = {
//     firstName,
//     lastName,
//     age,
// };
// console.log(person.age);

// // Desrtcuturing
// const todo = {
//     id: 1,
//     title: "Take out trash",
//     user: {
//         name: "Ayo"
//     },
// };
// const id = todo.id;
// const {
//     id: todoid,
//     title,
//     user: { name }, 
// } = todo;
// console.log(todoid);

// // Decstuctive arrays
// const numbers = [23, 67, 33, 49];

// const [first, second, ...rest] = numbers;

// console.log(first, second, rest)




// // JSON
// const post = {
//     id: 1,
//     title: "post One",
//     body: "This is the body",
// };
// // Converting to Json string 
// // This is how youn send data to the server
// const str = JSON.stringify(post);


//  console.log(str.id)
// // Parse JSON 
// // Changing it back
// const obj = JSON.parse(str);

// console.log(obj.id)
// const posts = [
//     {
//         id: 1,
//         title: "post One",
//         body: "This is the body",
//     },
//     {
//         id: 2,
//         title: "post One",
//         body: "This is the body",
//     },
//     {
//         id: 3,
//         title: "post One",
//         body: "This is the body",
//     },
//     {
//         id: 4,
//         title: "post One",
//         body: "This is the body",
//     },

// ];

// const str2 = JSON.stringify(posts)
// console.log(str2)


// Object Challenge
// Step 1
// const Libary = [
//     {
//         title: "how to Love",
//         author: "Badmus Qudus Ayomide",
//         status: 
//             {
//                 own: true,
//                 read: false,
//                 reading: false
//             },
        
//     },

//     {
//         title: "how to Run",
//         author: "Badmus Qudus Ayomide",
//         status: 
//             {
//                 own: true,
//                 read: false,
//                 reading: false
//             },
        
//     },

//     {
//         title: "how to Hate",
//         author: "Badmus Qudus Ayomide",
//         status: 
//             {
//                 own: true,
//                 read: false,
//                 reading: false
//             },
        
//     }
// ]
// // Step 2
// Libary[0].status.read = true;
// Libary[1].status.read = true;
// Libary[2].status.read = true;



// // step 3
// const { title: firstBook } = Libary[0];



// //  Step 4
// const LibaryJSON = JSON.stringify(Libary);

// console.log(LibaryJSON)




// //  Functions, Scope and Execution Context
// function sayHello(){
//     console.log("Hello World")
// }
// sayHello();

// function add(num1, num2) {
//     console.log(num1 + num2)
// }

// add(5, 10);
// function subtract(num1, num2) {
//     return num1 - num2;
// }
// const result = subtract(10, 2);

// console.log(result, subtract(20,5));


// PARAMS AND AURGUments
// Default Parameters
function registerUser(user = "Bot") {
    // if (!user) {
    //     user = "Bot"
    // }
    return user + " is regisstered";
    
}

console.log(registerUser())

// Rest Parameters

function sum(...numbers) {
    let total = 0;

    for (const num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5));

// Objects as params
function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`;

}
const user = {
    id: 1,
    name: "John",
};

console.log(loginUser(user))
console.log(
    loginUser({
        id: 2,
        name: "sara"
    })
);

// Array as parameters 
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];
    console.log(item)
}
getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])