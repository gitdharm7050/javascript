const accountId = 2456;
let accountEmail = "dharm@gmail.com";
var accountPassword = 1234;
accountCity = "patna";
// always string in quotes

let accountState;              // if we print an uninitialized variable it prints undefined

                                /*f you try to print a variable that has neither a 
                                keyword (let, var, const) nor an assigned value, JavaScript
                                 will instantly crash with a ReferenceError.*/

accountHolder = "dharmveer";
//accountId=2                    not allowed const cant be changed
accountCity = "sheikhpura";
console.log(accountId);
console.table([
  accountId,
  accountEmail,
  accountCity,
  accountPassword,
  accountState,
  accountHolder,
]);

/* constant declear ka ek tareeka hai 
using const...
but variable ka do tareeka let and var
but var ke andar scope ka problem hota hai
so prefer not to use it */
