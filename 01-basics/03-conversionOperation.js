let score_1 = 33

//two methods to see datatypes
console.log(typeof score_1)          //normally 
console.log(typeof (score_1))        //passing as a method
/* in dono ka output 

number
number

look closely ye lowercase se start hai */


let score_2=  "3"    
// now we know its string  but if we have to strictly perform an operation on numbers then we can convert it using
let score_2InNumber = Number(score_2)

console.log(typeof score_2InNumber)
 // output  number

 score_2="3abc"
 score_2InNumber = Number(score_2)
 console.log(typeof score_2InNumber)

 //output  number     but kya 3abc number me convert hona chahiye tha???
//lets see isake andar kaun sa number hai..


console.log(score_2InNumber)
//output   NaN  
//                         NaN   means not a number


  /* in JS when we will convert stuff like 3abc to number it will be allowed
  but truly the value in it will be NaN  */
let thisIsNull=null
let nullInNumber=Number(thisIsNull)
console.log(nullInNumber)

let isLogedIn=true
let boolInNumber=Number(isLogedIn)
console.log(boolInNumber)

/* if we would tried the same with null instead of 3abc then the intial datatype
 object gets converted to number and value became 0 instead of NaN

 short note.. 

 "33"=> 33
 "33abc"=> Nan
 true <===>1
 false <====>0
 undefined=> NaN
null=>  0                   */


let hasLogedIn=1
let NumberInbool=Boolean(isLogedIn)
console.log(NumberInbool)

// empty string ===> false 
// string with some value ===> true


let someNumber=33
let numberInString=String(33)          // output 33
console.log(numberInString)
console.log(typeof numberInString)     // output string


//  ***************Opertions**********************

let value =3
let negValue =-value
// console.log(negValue)   output = -3

let str1= "dharm"
let str2=" veer"
let str3= str1+str2
console.log(str3)     //output dharm veer

// some  operations with their output 
console.log("1" + 2)       // output  12
console.log(1 + "2")       // output 12


console.log("1" +2 +3)     //output 123     pahle string dekha to sabko string maan liya
console.log(1 +2 +"3")     // output 33      pahle integer dekha to normal integer wali operation perform ki

 console.log(+true)           //output 1
 //console.log(true+)              this causes error           // error
 console.log(+"")             // 0 


