const score =100
const balance=new Number(100)
console.log(balance)    //output  [Number: 100]     ye explicitly bta rha ki ye number hai
console.log(score)        //      100

console.log(balance.toString().length) //output 3     ye number ko string bna deta hai jisase number ke pas string wali properties aa jati hai
console.log(balance.toFixed(2))   //output 100.00     ye bade no ko decimal ke badd only 2 digits tak fix kar deta hai 
//pro tip always use toFixed when developing a e commerce site because customers dont want exact precise value

let otherNumber=23.8966    
console.log(otherNumber.toPrecision(3))   //output 23.9
/* Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
@param precision — Number of significant digits. Must be in the range 1 - 21, inclusive.*/  


otherNumber=123.8966         
console.log(otherNumber.toPrecision(3))    //output 124   jab hamne bola 3 precision to isane 3 value ko precise rakha aur baki ko round off kiya

 otherNumber=1765423.8966 
console.log(otherNumber.toPrecision(3))    //output 1.77e+6     isane 3 precision value di baki exponential di


const hundred=100000000
console.log(hundred.toLocaleString('en-IN'))   // output 10,00,00,000           it puts comma on basis of indian standerd..by default it puts on american standerds




//======================maths====================================


// The 'Math' library comes built-in with JavaScript as a highly powerful global object.
console.log("Math Object blueprint:", Math); 
console.log("Value of PI Constant :", Math.PI); // Output: 3.141592653589793

// 1. Math.abs(value): Absolute Value evaluation
// Turns absolute negative parameters to positive. Positive stays positive.
console.log("Math.abs(-4) :", Math.abs(-4)); // Output: 4
console.log("Math.abs(4)  :", Math.abs(4));  // Output: 4

// 2. Math.round(value): Standard Round-off behavior
console.log("Math.round(4.3) :", Math.round(4.3)); // Output: 4
console.log("Math.round(4.6) :", Math.round(4.6)); // Output: 5

// 3. Math.ceil(value) vs Math.floor(value)
// Ceil chooses the top ceiling integer value if slightly above boundary.
// Floor strictly locks calculations down to the lowest base integer.
console.log("Math.ceil(4.2)  :", Math.ceil(4.2));  // Output: 5
console.log("Math.floor(4.9) :", Math.floor(4.9)); // Output: 4

// 4. Min and Max matching tools
console.log("Math.min array scan :", Math.min(4, 3, 6, 8, 1)); // Output: 1
console.log("Math.max array scan :", Math.max(4, 3, 6, 8, 1)); // Output: 8


// ============================================================================
// PART 5: MATH.RANDOM SYNTAX & ALGORITHMIC FORMULA
// ============================================================================
printHeader("5. Randomization Laws");

// Math.random() consistently shifts calculations dynamically between inclusive 0 and 1.
console.log("Default Random range (0-1) :", Math.random());

// Shifting decimals one index left by multiplying by 10
// Adding 1 safeguards the engine from encountering a 0.0 value (e.g., in dice or lottery games).
console.log("Random scaled up by 10     :", (Math.random() * 10) + 1);
console.log("Random forced floor result :", Math.floor(Math.random() * 10) + 1);

/* 🎯 THE UNIVERSAL SPECIFIC RANGE FORMULA (CRITICAL INTERVIEW INSIGHT):
   When you require a custom random value between a strict minimum and maximum limit, 
   the algorithm scales dynamically using this standard calculation:
   
   Math.floor(Math.random() * (max - min + 1)) + min
*/

const min = 10;
const max = 20;

const targetedRandomValue = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Universal Random value between ${min} and ${max} :`, targetedRandomValue);

console.log(`\n================= RUN COMPLETED SUCCESSFULLY =================`);
