

// UTILITY FUNCTION: Just a helper to print clear section headers in your terminal
function printHeader(title) {
    console.log(`\n--- ${title.toUpperCase()} ---`);
}

// ============================================================================
// SECTION 1: NORMAL & EXPECTED COMPARISONS
// ============================================================================
printHeader("1. Normal Comparisons");

console.log("2 > 1  :", 2 > 1);   // Expected: true
console.log("2 >= 1 :", 2 >= 1);  // Expected: true
console.log("2 < 1  :", 2 < 1);   // Expected: false
console.log("2 == 1 :", 2 == 1);  // Expected: false
console.log("2 != 1 :", 2 != 1);  // Expected: true

/* 💡 SUMMARY: When comparing the same datatypes (Numbers with Numbers), 
  JavaScript works exactly like standard mathematics.
*/


// ============================================================================
// SECTION 2: STRING VS NUMBER COMPARISON (Implicit Coercion)
// ============================================================================
printHeader("2. String vs Number (Implicit Coercion)");

console.log('"2" > 1  :', "2" > 1);    // Output: true
console.log('"02" > 1 :', "02" > 1);   // Output: true

/* 🔬 UNDER THE HOOD:
  - When comparing a String with a Number using relational operators (>, <, >=, <=), 
    JavaScript automatically converts the string into a number first.
  - "2" becomes numeric 2, and "02" becomes numeric 2.
  - Thus, 2 > 1 evaluates to true.
*/


// ============================================================================
// SECTION 3: THE TRICKY NULL COMPARISONS
// ============================================================================
printHeader("3. The Tricky 'null' Comparisons");

console.log("null > 0  :", null > 0);   // Output: false
console.log("null == 0 :", null == 0);  // Output: false
console.log("null >= 0 :", null >= 0);  // Output: true

/* 🔬 UNDER THE HOOD (The Reason for this confusing behavior):
  
  1. Relational Comparisons (>, <, >=, <=) work differently than Equality (==).
     - For >, <, >=, <=, JavaScript converts null into a number, which evaluates to 0.
     - Therefore:
       • null >= 0  becomes  0 >= 0  which is TRUE.
       • null > 0   becomes  0 > 0   which is FALSE.
       
  2. Loose Equality Check (==) does NOT convert null to a number.
     - The Abstract Equality Comparison Algorithm specifies that 'null' is only 
       loosely equal (==) to 'undefined' and nothing else.
     - Therefore:
       • null == 0  is FALSE.
*/


// ============================================================================
// SECTION 4: THE UNPREDICTABLE UNDEFINED
// ============================================================================
printHeader("4. The Unpredictable 'undefined'");

console.log("undefined == 0 :", undefined == 0); // Output: false
console.log("undefined > 0  :", undefined > 0);  // Output: false
console.log("undefined < 0  :", undefined < 0);  // Output: false

/* 🔬 UNDER THE HOOD:
  - In relational comparisons (>, <), JavaScript tries to convert 'undefined' into a number.
  - Converting 'undefined' to a number results in NaN (Not-a-Number).
  - Rule of JavaScript: Any comparison with NaN (whether >, <, >=, <=, or ==) always returns FALSE.
  - In loose equality (==), as mentioned before, 'undefined' only equals null or itself.
*/


// ============================================================================
// SECTION 5: STRICT EQUALITY (===) VS LOOSE EQUALITY (==)
// ============================================================================
printHeader("5. Strict Equality (===) vs Loose Equality (==)");

console.log('"2" == 2  :', "2" == 2);   // Output: true (Coerces type: converts string "2" to number 2)
console.log('"2" === 2 :', "2" === 2);  // Output: false (Strict check: checks Value AND Datatype)

/* 💡 PRO-TIP / BEST PRACTICE:
  - '==' (Loose Equality): Allows implicit type conversion before checking values.
  - '===' (Strict Equality): Checks both the value AND the data type without conversion.
  - To avoid unpredictable issues with null, undefined, or type coercion, ALWAYS use '===' in professional code!
*/