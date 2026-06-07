//kis tarah se data  ko memory me rakha jata hai aur access kiya jata hai us basis pe data ke  2 type hai
//    1. primitive     2. non primitive


//  Primitive :  these are call by value

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
//const score:Number = 100          //typescript me jo ki javascript ka strict version hai
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null          // null matlab totally empty no value not even 0
let userEmail;                  //userEmail is undefined variable here

const id = Symbol('123')           //
const anotherId = Symbol('123')

console.log(id === anotherId);   //output is false...means even he have stored same value in two different variables, but used symbol datatype so they have became unique

const bigNumber = 3456543576654356754n  //for bigInt just add n at last of number



// Reference (Non primitive):    pass by reference

// these are types:  Array, Objects, Functions

 const heros = ["shaktiman", "naagraj", "doga"];    //array element  in braces seperated by comma
 
 
 let myObj = {
   name: "hitesh",
  age: 22,
 }
//objects ko curly braces me as key value pair declear karte hai,we can also declear them directly without creating variable let myObj = 
//      {
//           name: "hitesh",
//           age: 22,
//       }

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myFunction)
//we can store the function also in a variable 

//console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


/*  avaScript is a dynamically typed language.

What that means:
Type is determined at runtime — you don’t need to declare a variable’s type explicitly.
A variable can hold values of different types at different times.
Type checking happens while the code is running, not at compile time.*/



