/**
 * ============================================================================
 * JAVASCRIPT DATATYPE SUMMARY - RUNNABLE NOTES
 * ============================================================================
 * Concept: Kis tarah se data ko memory me rakha jata hai aur access kiya jata hai,
 * us basis pe data ke 2 types hote hain:
 * 1. Primitive Datatypes (Call by Value)
 * 2. Non-Primitive / Reference Datatypes (Pass by Reference)
 * ============================================================================
 */

// Helper function for terminal headers
function printSummaryHeader(title) {
    console.log(`\n================== ${title.toUpperCase()} ==================`);
}

// ============================================================================
// CONCEPT: DYNAMICALLY TYPED LANGUAGE
// ============================================================================
/* 💡 JavaScript ek DYNAMICALLY TYPED language hai.
  - Iska matlab yeh hai ki variables ka type 'Runtime' par decide hota hai.
  - Humein explicitly batane ki zaroorat nahi padti ki variable Number hai ya String.
  - Ek hi variable me pehle number aur baad me string store kiya ja sakta hai.
  
  Contrast with TypeScript (Strict Version):
  - const score: Number = 100 // TypeScript me type pehle hi fix karna padta hai (Statically Typed)
*/


// ============================================================================
// SECTION 1: PRIMITIVE DATATYPES (7 Types)
// ============================================================================
printSummaryHeader("1. Primitive Datatypes (Stored in Stack Memory)");

// 1. Number
const score = 100;
const scoreValue = 100.3; // JavaScript me decimals aur integers dono 'Number' hi hain

// 2. Boolean
const isLoggedIn = false;

// 3. Null (Intentional Empty Value)
const outsideTemp = null; // null ka matlab hai totally empty, not even 0 or empty string ""

// 4. Undefined (Declared but not initialized)
let userEmail; // Isme automatically 'undefined' store ho jata hai

// 5 & 6. String & BigInt
const name = "Hitesh";
const bigNumber = 3456543576654356754n; // Kisi bhi bade number ke last me 'n' lagane se woh BigInt ban jata hai

// 7. Symbol (Used to create unique identifiers)
const id = Symbol('123');
const anotherId = Symbol('123');

console.log("Symbol uniqueness check (id === anotherId):", id === anotherId); 
// Output: false 
// Explanation: Symbol ke andar same value ('123') pass karne ke baad bhi dono memory me unique hain.

/* 🧠 MEMORY CONCEPT - STACK (Call by Value):
   Jab aap ek primitive variable ko dusre me assign karte hain, toh original value ki ek "COPY" milti hai.
   Original value memory me change nahi hoti.
*/


// ============================================================================
// SECTION 2: NON-PRIMITIVE / REFERENCE DATATYPES
// ============================================================================
printSummaryHeader("2. Non-Primitive Datatypes (Stored in Heap Memory)");

// 1. Array
const heros = ["shaktiman", "naagraj", "doga"]; // Elements in square brackets, separated by comma

// 2. Object (Key-Value pairs inside curly braces)
let myObj = {
    name: "hitesh",
    age: 22,
};

// 3. Function (Stored inside a variable)
const myFunction = function() {
    console.log("Hello world from inside the function!");
};

// Function ko call karna:
myFunction();

/* 🧠 MEMORY CONCEPT - HEAP (Pass by Reference):
   Non-primitive datatypes Heap memory me store hote hain. Variables ko memory ka direct "REFERENCE" (address) milta hai.
   Agar aap copy banakar badlav karenge, toh original data bhi badal jayega kyunki dono same address ko point kar rahe hain.
*/


// ============================================================================
// SECTION 3: TYPEOF OPERATOR (ECMAScript official behavior)
// ============================================================================
printSummaryHeader("3. Typeof Operator Verification");

console.log("typeof score      :", typeof score);       // number
console.log("typeof isLoggedIn :", typeof isLoggedIn);  // boolean
console.log("typeof userEmail  :", typeof userEmail);   // undefined
console.log("typeof bigNumber  :", typeof bigNumber);   // bigint
console.log("typeof id         :", typeof id);          // symbol

// Interview Questions / Tricky Types:
console.log("typeof outsideTemp:", typeof outsideTemp); // object  <-- (This is a known bug/feature in JS)
console.log("typeof heros       :", typeof heros);       // object  <-- (Arrays are specialized objects)
console.log("typeof myObj       :", typeof myObj);       // object
console.log("typeof myFunction  :", typeof myFunction);  // function <-- (Internally called 'object function')

/*
 🔗 Official ECMA Standard Documentation Link:
 https://262.ecma-international.org/5.1/#sec-11.4.3


  avaScript is a dynamically typed language.

What that means:
Type is determined at runtime — you don’t need to declare a variable’s type explicitly.
A variable can hold values of different types at different times.
Type checking happens while the code is running, not at compile time.*/

