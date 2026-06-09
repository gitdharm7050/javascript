
// ============================================================================
// PART 1: STRING SYNTAX & DECLARATIONS
// ============================================================================

const name = "hitesh";
const repoCount = 50;

// ❌ Outdated Stitching Approach (Avoid in Modern Production)
// console.log(name + repoCount + " Value");

// Modern Approach: Template Literals (String Interpolation)
// Uses backticks (``) found below the Escape key. Allows dynamic injection inside ${}
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


// 🔬 String Instantiation via Object Constructor
const gameName = new String('hitesh-hc-com');

console.log(gameName);        // Output: [String: 'hitesh-hc-com']
console.log(gameName[0]);     // Output: h (Accessing character at 0th key index)
console.log(gameName.__proto__);// Output: {} (Exposes internal prototype wrapper object)

/* 🧠 THE UNDER-THE-HOOD ARCHITECTURE:
   Using 'new String()' changes the variable behavior from a primitive string literal 
   into a complete structural Object representation in Heap memory:
   {
     0: "h",
     1: "i",
     2: "t",
     ...
     length: 13
   }
*/


// ============================================================================
// PART 2: THE OBJECT IMMUTABILITY LAW
// ============================================================================

console.log(gameName.length);        // Output: 13 (Length property evaluation)
console.log(gameName.toUpperCase()); // Output: HITESH-HC-COM

/* 🔥 THE PARADOX RESOLVED (CRITICAL INTERVIEW FACT):
   Q. If 'gameName' is converted into a Heap Object via 'new String()', 
      why doesn't calling '.toUpperCase()' mutate the original object's value?
   
   A. JavaScript enforces two absolute architectural boundaries:
      1. BLUEPRINT IMMUTABILITY: String character allocations are permanently locked 
         and non-writable by design specification.
      2. RE-ALLOCATION OPERATION: Prototypes like .toUpperCase(), .trim(), or .slice() 
         extract the memory bytes, execute operations, and generate an independent, 
         brand new primitive instance string. They never write over the original target object.
*/

// Explicit Mutation Test Execution
gameName[0] = "K"; 
console.log(gameName[0]); // Output: 'h' (Mutation safely and silently ignored!)


// ============================================================================
// PART 3: POSITIONING & SUBSTRING EXTRACTORS
// ============================================================================

console.log(gameName.charAt(2));     // Output: t (Evaluates character index pointer)
console.log(gameName.indexOf('t'));    // Output: 2 (Finds first matching character position)

// 🔹 substring(start, end): End index limit is not inclusive
// Edge Case: If given a negative offset value, it converts it to 0 and counts forward.
const newString = gameName.substring(0, 4);
console.log(newString); // Output: hite (Captures indices 0, 1, 2, 3)

// 🔹 slice(start, end): Supports negative parameters
// Negative parameter scans structural limits backwards from the end of the string.
const anotherString = gameName.slice(-8, 4);
console.log(anotherString); // Output: (Returns evaluated backward sliced bounds)


// ============================================================================
// PART 4: CLEANSING, VALIDATION & TOKENIZATION
// ============================================================================

// 🔹 trim(): Strips out leading/trailing white spaces and line-terminators (\n)
const newStringOne = "   hitesh    ";
console.log(newStringOne);        // Output: "   hitesh    "
console.log(newStringOne.trim());  // Output: "hitesh"

// 🔹 replace(target, replacement): Swaps targeted subsets within data arrays
const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', '-')); // Output: https://hitesh.com/hitesh-choudhary

// 🔹 includes(searchString): Evaluates variable matrix down to pure Boolean
console.log(url.includes('sundar')); // Output: false

// 🔹 split(separator): Segregates string instances into partitioned Array tokens
console.log(gameName.split('-')); // Output: [ 'hitesh', 'hc', 'com' ]