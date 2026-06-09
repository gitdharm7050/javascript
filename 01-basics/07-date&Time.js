 // in js date defines a single moment of time in plateform independent time
// calculated in mili second since jan 1, 1970,utc
// they are working on Temporal proposal
//What is Date? It is a Built-in Object / Constructor Function (part of JavaScript's standard library).

let myDate=new Date() 
console.log(typeof myDate)      // object
console.log(typeof Date)            //function
console.log(typeof new Date)       //object

/* When you run this line, you are saying:
"Hey JavaScript, use your built-in D ate template (Date()) to manufacture a brand new, 
physical Object container (new), and label that container myDate so I can use it later."  */


console.log(myDate)        //output 2026-06-08T10:40:24.544Z
//it is quitly unreadable below are few method to convert it into easy to understand formats



console.log(myDate.toString())            //output   Mon Jun 08 2026 16:32:20 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())       //output  Mon Jun 08 2026
console.log(myDate.toLocaleString())     //output  08/06/2026, 4:32:20 pm


let myCreatedDate=new Date(2026,6,8)        
console.log(myCreatedDate.toDateString())      //output     Wed Jul 08 2026
console.log(myCreatedDate.toLocaleString())     //output    08/07/2026, 12:00:00 am
//observe in JS months start with 0 when we pass separate value as yy,mm,,dd
//or simply  When passing individual numbers, months start with 0 (0 = Jan, 6 = July)


 myCreatedDate=new Date("2026-6-8")        
console.log(myCreatedDate.toDateString())    //output  Mon Jun 08 2026    
console.log(myCreatedDate.toLocaleString())  //output   08/06/2026, 12:00:00 am
// When passing a string, JavaScript uses normal human calendar rules (1 = Jan, 6 = June)


myCreatedDate=new Date(2026-6-8)        
console.log(myCreatedDate.toDateString())    //output     Thu Jan 01 1970 
console.log(myCreatedDate.toLocaleString())  //output      01/01/1970, 5:30:02 am
// TRAP: No quotes means JS does math (2026-6-8 = 2012) and interprets 2012 as milliseconds since 1970.
// FIX: Always use quotes for strings "2026-06-08" or commas for numbers (2026, 5, 8) to define dates.


//======================TimeStamps=============================================================================

const myTimeStamp= Date.now()
console.log(myTimeStamp)    // output  1780972810637        its a value in milisecond
myCreatedDate=new Date(7,8,2026)
console.log(myCreatedDate.getTime())         //output -1792215000000

let newDate=new Date( )
console.log("the current month is", newDate.getMonth()+1) 

