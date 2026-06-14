/*PART 1: THE CORE ARCHITECTURE & EXECUTION CONTRACT
============================================================================*/

function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName     // ⚠️ Only Function REFERENCE (Batata hai function wahan rehta hai, but execute nahi hota)
// sayMyName()   // Function EXECUTION (Parentheses lagate hi code thread trigger ho jata hai)


/*============================================================================
// PART 2: PARAMETERS VS ARGUMENTS & RETURN LAWS
// ============================================================================ */

/* 🧠 THE CORE INTERVIEW DISTINCTION:
   - Parameters: Function definition banate waqt jo inputs specify karte hain (e.g., number1, number2).
   - Arguments: Function call karte waqt jo actual values pass ki jaati hain (e.g., 3, 5).
*/

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result                  // Unreachable Code Rule: Return ke baad is block me niche likha hua koi bhi code kabhi execute nahi hota.
    return number1 + number2          // Clean approach: Direct expression return karke memory footprint save hota hai.
}

const result = addTwoNumbers(3, 5);   // Ab 'result' variable ke paas genuine functional data value (8) hold par hai.
console.log("Result: ", result);      // output: Result:  8


/*============================================================================
// PART 3: DEFAULT PARAMETERS & FALSY CONDITIONALS
// ============================================================================ */

function loginUserMessage(username = "sam") { // ES6 Default Value: Agar user argument pass nahi karega, toh "sam" automatically fallback context ban jayega.
    
    // ⚠️ THE UNDEFINED TRAP: Agar default value na ho aur argument blank chodh dein, toh username 'undefined' ho jata hai.
    // In JS, 'undefined' and empty strings are structurally treated as FALSY values.
    
    if (!username) {                      // Professional/Clean syntax: !username automatically falsy state ko true block me switch kar deta hai.
        console.log("PLease enter a username");
        return                            // Blank return lagane se execution context yahin block terminate kar deta hai.
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("hitesh")); // output: hitesh just logged in
console.log(loginUserMessage());         // output: sam just logged in (Default configuration triggers)


/*============================================================================
// PART 4: REST OPERATOR IN PARAMETER HANDLING
// ============================================================================ */

/* ⚡ SPREAD VS REST PARADOX CRACKED:
   - Three dots (...) hi spread operator hain aur yehi rest operator hain.
   - Farq sirf use case ka hai: Jab elements ko bikhairna ho toh 'Spread', jab khule huye elements ko ek bundle/Array me pack karna ho toh 'Rest'.
*/

function calculateCartPrice(val1, val2, ...num1) {
    return num1 // Rest operator (...) saare multi-value parameters ko ek cohesive pure Array me combine kar deta hai.
}

console.log(calculateCartPrice(200, 400, 500, 2000));
/* 🔬 HIGH-YIELD INTERVIEW SCAN:
   - val1 captures -> 200
   - val2 captures -> 400
   - ...num1 packs the rest into an array -> [ 500, 2000 ]
   output: [ 500, 2000 ]
*/


/*============================================================================
// PART 5: PASSING OBJECTS & TYPE SAFETY TRAPS
// ============================================================================ */

const user = {
    username: "hitesh",
    prices: 199 // ⚠️ TRAP: Object structure me property key 'prices' hai (plural)
}

function handleObject(anyobject) {
    // Standalone function expressions ko internally nahi pata hota ki aane waale object ka architecture safe hai ya nahi.
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user) // output: Username is hitesh and price is undefined -> Property key typo check stays silent!

// Direct object injection format to secure configuration context:
handleObject({
    username: "sam",
    price: 399
}); // output: Username is sam and price is 399


/*============================================================================
// PART 6: PIPING ARRAYS THROUGH FUNCTIONS
// ============================================================================ */

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1]; // Generic binding: bracket notation direct matching array targets ko index mapping se pipe karta hai.
}

console.log(returnSecondValue(myNewArray)); // output: 400

// Array literal allocation dynamic injection:
console.log(returnSecondValue([200, 400, 500, 1000])); // output: 400