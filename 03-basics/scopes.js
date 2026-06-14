/*PART 1: GLOBAL VS LOCAL SCOPE (BLOCK SCOPE LAWS)
============================================================================*/

/* 🧠 THE REASON LET & CONST WERE INTRODUCED:
   - es6 (2015) se pehle JS me sirf 'var' tha jiska koi block scope control nahi tha.
   - Global Scope: Jo bhi variable brackets ke bahar declare hota hai, wo poore code me kahi bhi accessible hota hai.
   - Block/Local Scope: Curly braces {} ke andar ka area (like inside if-else, loops). Iske andar ke variables bahar leak nahi hone chahiye.
*/

let a = 300; // Global execution boundary assignment

if (true) {
    let a = 10;   // Block Scope instance: confined strictly within this if-block
    const b = 20; // Block Scope instance
    var c = 30;   // ⚠️ SCOPE BREAK BUG: var ignores block boundaries entirely!
    
    console.log(`INNER BLOCK: ${a}`); // output: INNER BLOCK: 10
}

// console.log(a); // output: 300 -> Global 'a' completely independent and unaffected by inner modifications
// console.log(b); // ReferenceError: b is not defined -> Protected! Cannot access outer boundary
console.log(c);    // output: 30 -> ❌ MAJOR BUG: var leaked out of the block, ruining namespace sanity!

/* ⚠️ GLOBAL SCOPE ENVIRONMENT SHIFT (INTERVIEW QUESTION):
   - Browser Console me run karne par Core Global Scope 'Window' object hota hai.
   - Node.js (Backend execution engine) environment me standard global scope ek empty object '{}' hota hai.
*/


/*============================================================================
// PART 2: NESTED SCOPE RESOLUTION & LECLOSURE METAPHOR
// ============================================================================ */

/* 🍦 THE ICE-CREAM PARADOX (Nested Hierarchy Rules):
   - Child blocks/functions apne Parent blocks ke variables ko freely access kar sakte hain.
   - But Parent blocks kabhi bhi Child blocks ke internal variables ko access nahi kar sakte.
   - Metaphor: Chote bachhe (Child functions) bade buzurgon (Parent scope) se ice-cream maang sakte hain, 
     par bade log choton se ice-cream nahi chheen sakte!
*/

function one() {
    const username = "hitesh";

    function two() {
        const website = "youtube";
        console.log(username); // output: hitesh -> Child block accesses parent context variable cleanly
    }
    
    // console.log(website); // ReferenceError: website is not defined -> Parent trying to breach child scope boundary
    two(); // Triggering inner execution execution frame
}
one();


// --- Nested Scoping Example inside If-Else Blocks ---
if (true) {
    const username = "hitesh";
    if (username === "hitesh") {
        const website = " youtube";
        console.log(username + website); // output: hitesh youtube -> Inward tracking allowed
    }
    // console.log(website); // ReferenceError: website is not defined -> Outward breach blocked
}
// console.log(username); // ReferenceError: username is not defined -> Root global boundary safety


/*============================================================================
// PART 3: HOISTING & FUNCTION DECLARATION MECHANICS
// ============================================================================ */



/* 🧠 HOISTING KYA HAI? (Simple Language Me):
   - JavaScript engine code run karne se pehle poori file me se saare functions aur variables ko dhoond kar memory me space allocate kar deta hai.
   - Is behavior ko "Hoisting" bolte hain (jaise code ke top par shift ho jana).
   
   🔥 THE PARADOX (Farq kyu aata hai?):
   - Method A (Pure Function): Pure function directly memory me safe ho jata hai, isliye isko declaration se PEHLE bhi call kar sakte hain.
   - Method B (Function Expression): Jab function ko kisi variable (`let`/`const`) me daal dete hain, toh variable hoisting ke rule ke mutabik jab tak code us line par nahi pahunchta, tab tak wo functional area initialize nahi hota. Isliye pehle call karne par CRASH hota hai.
*/

// --- METHOD A: Pure Function Declaration (Allowed Before Definition) ---

console.log(addone(5)); // output: 6 
// ✓ Kyunki pure function poori tarah file ke top par hoist (scale) ho jata hai.

function addone(num) {
    return num + 1;
}


// --- METHOD B: Function Expression via Variable (Strictly Forbidden Before Definition) ---

// console.log(addTwo(5)); // ❌ Crash: Cannot access 'addTwo' before initialization

const addTwo = function(num) { 
    return num + 2;
}

console.log(addTwo(5)); // output: 7 
// ✓ Only works AFTER the variable is parsed and initialized in memory execution.