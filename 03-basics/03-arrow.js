/*PART 1: THE CURRENT EXECUTION CONTEXT WINDOW
============================================================================*/


const user = {
    name: "dharmveer",
    age: 22,
    
    myFunction: function () {
        console.log(`hey ${this.name} welcome to the portal`);    // 'this' strictly targets properties bound within the current context scope
        console.log(this); // Exposes the immediate structural context properties map currently in memory
    }
};

user.myFunction(); // Context reads original value -> "dharmveer"
user.name = "rohan"; // Modifying field allocation inside the Heap pointer
user.myFunction(); // Context dynamically registers altered runtime value -> "rohan"


/*============================================================================
// PART 2: GLOBAL RANGE SCOPES (The Ultimate Interview Question)
// ============================================================================ */

console.log(this);    // output {}

/* 🧠 HIGH-YIELD RUNTIME MECHANIC DETECTED:
   - Inside Node.js / Standalone Server Engines: Evaluates to an empty object '{}' 
     because no explicit global execution layout is bound to the system thread module.
   
   - Inside Browser Console Engine: Returns the active 'Window' object layout model 
     (The base platform global execution context mapping environment).
*/


// ============================================================================
// PART 3: STANDALONE EXPRESSION WRAPPERS (The Context Pitfall)
// ============================================================================

// Global context function declaration assignment 

const function2 = function() {
  console.log(this);
     
    
}
function2();
/* ⚠️ THE GLOBAL FUNCTION BEHAVIOR TRAIT:
   When running a non-strict standard function expression globally in a Node environment, 
   'this' no longer returns an empty object '{}'. Instead, the execution context hooks into 
   a massive internal system compilation blueprint container (containing global, clearImmediate, setTimeout utilities).
   Standalone methods do NOT structurally map custom isolated variable descriptors onto 'this'.
*/

//===========================================================
/*=========================arrow function=====================

const function2 = function(){}   ko arrow function banane ke liye function keyword hatana hoga aur paranthesis ke baad arrow lagana hoga */

const function3 = ()=>{
 let username="dharm"
 console.log(this.username) //  undefined    current context function me kaam nhi karta hai chahe o normal ho ya arrow
 console.log(this)          //  {}           arrow function me this ko print karane se empty object aata hai
 }
 function3()



 //======================================================================
 //======================implicit and explicit return====================

 let addTwo =(num1,num2)=>{                      // curly braces use hua to return likhna hi padega
  return num1+num2}

  console.log(addTwo(3,4))


  addTwo =(num1,num2)=> (num1+num2)                //paranthesis use hua to return ka need nhi
 console.log(addTwo(3,4))


addTwo =(num1,num2)=> ("dharm")                //paranthesis use hua to return ka need nhi
 console.log(addTwo(3,4))

