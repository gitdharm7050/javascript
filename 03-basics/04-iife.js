//IIFE immidiatly invoked functions: invoked just after function declaration 


function dharm(){
    console.log("Database connected")
}
dharm();

// this is normally how can we invoke a function just after declaration


// To make IIFE use two paranthesis, in first paranthesis we wrapp whole function declaration and second is function call.
// IMPORTANT: Always end the previous line with a semicolon (;) before an IIFE, otherwise the compiler won't know where the context ends.

(function chai(){
    // Named IIFE
    console.log("Database connected")
})();

((name) => {
    // Unnamed/Arrow IIFE with parameters
    console.log(`Database connected to ${name}`)
})("cloud server");



/* WHY USE IIFE?
1. To prevent Global Scope Pollution: Variables declared inside IIFE don't clash with global variables.
2. Immediate Execution: Useful for initialization logic (like DB connections) that should run once immediately.
3. Privacy: Creates a private scope for variables that shouldn't be accessible from the outside.
*/