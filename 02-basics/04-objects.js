//const tinderUsr= new Object()               this is a singleton object
// we can also perform nesting in a object

const tinderUsr={
    email: "abc@g.com",
    name: {
        fullName:{
            userFullName:{
                firstName: "dharm",
                lastName: "Veer",
            }

        }
    }

};


//========ascessing the levels=================
//we can accsess simply using dot operator at each level


console.log(tinderUsr.name) /*output fullName: { userFullName: { firstName: 'dharm', lastName: 'Veer' } }  } */

 console.log(tinderUsr.name.fullName)   // output  { userFullName: { firstName: 'dharm', lastName: 'Veer' } }
console.log(tinderUsr.name.fullName.userFullName)    //output    { firstName: 'dharm', lastName: 'Veer' }

//  sometimes we can see a "?" after a property when we unsure wether it exist or not
// console.log(tinderUsr.name.fullName?.userFullName)      if full name not exist then it will take care

//==========================methods to combine more objects===============


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const combineed1={obj1,obj2,obj4} // ❌ method A: Bad Stitching syntax: const testObj = { obj1, obj2 }; -> Standard Nesting error occurs.
console.log(combineed1)

/* output
{
  obj1: { '1': 'a', '2': 'b' },
  obj2: { '3': 'a', '4': 'b' },
  obj4: { '5': 'a', '6': 'b' }
}  */


  const obj3 = {...obj1, ...obj2}  // Method B: Spread Operator (...) -> The definitive modern production standard layout
console.log(obj3);       // output  { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

  // method 3: Object.assign(target, ...sources)
// Mentor Pro-Tip: Passing an explicit empty object {} guarantees structural target mapping isolation.
const combinedObjA = Object.assign({}, obj1, obj2); // output { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// --- DATABASE SIMULATION WINDOW ---
// Database responses consistently land inside a flat Array filled with Object components:
const dbResponse = [
    { id: 1, email: "h@gmail.com" },
    { id: 2, email: "v@gmail.com" },
    { id: 3, email: "d@gmail.com" }
];
// agar hame pahle user ka emil chahiye to...
console.log(dbResponse[1].email); // Output: v@gmail.com

//====================data extraction from an object===========

//if you want list of keys
console.log(Object.keys(tinderUsr))  // output     [ 'email', 'name' ]           array of keys

//if you want list of values
console.log(Object.values(tinderUsr))

// if you want array of key value pairs
console.log(Object.entries(tinderUsr))

 // we can also ask an object if it contains a value or property or not before using it to ave program from crashing
console.log(tinderUsr.hasOwnProperty("name"))    // output    true
console.log(tinderUsr.hasOwnProperty("logged"))   // output   false



//========================object destructuring=======================

const course = {
    courseName: "JS in Hindi",
    price: "free",
    courseInstructor: "Hitesh"
};
//Standard read requires repetitive pointer paths: course.courseInstructor.
// Solution: Object Destructuring syntax extract fields cleanly into root scope

const{courseInstructor}=course
console.log(courseInstructor);   // output  Hitesh

// we can make even more easier

const{courseInstructor: instructor}=course
console.log(instructor);   // output   Hitesh

// ⚛️ React Analogy Snapshot (How destructuring simplifies props internally)
// Standard props signature setup: const Navbar = (props) => { props.company }
// Modern structural setup using internal destructuring: const Navbar = ({ company }) => { company }

/**
 * 🔗 GLOBAL API REFLECTION:
 * JSON structures parsed from web protocols behave like anonymous objects without explicit titles.
 * Notice: String keys inside authentic JSON data boundaries require raw double quotes surrounding boundaries.
 * * Example Layout standard format:
 * {
 * "name": "hitesh",
 * "course": "JS in Hindi",
 * "price": "free"
 * }
 */