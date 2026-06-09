// in JS we can also push a whole array into another array

const arr1=[2,3,6,8,0]
const arr2=[1,3,5,7,9]

arr1.push(arr2)
console.log(arr1)     // output [ 2, 3, 6, 8, 0, [ 1, 3, 5, 7, 9 ] ]


//======================concate()===============================

// concate merges two array into a new aaray and returns it
const arrA=[2,3,4,5,6,7]
const arrB=[90,78,67,54]
const arrC=arrA.concat(arrB)
console.log(arrC)                   /*output   

[
  2,  3,  4,  5,  6,
  7, 90, 78, 67, 54
]
  */

/*=======================spread(...)==================
SPREAD (...): The modern, preferred standard for concatenation
It "spreads" every individual element into the new array.*/
const biggerArray=[...arrA,...arrB]
console.log(biggerArray)                      /*output   

[
  2,  3,  4,  5,  6,
  7, 90, 78, 67, 54
]
  */




//==================flate()===========================
// it breaks down the level like an array inside another array it takes out all sigle elements at same level


const l_LeveleArr=[2,4,5,[0,3,6,[5,3,9]]]
console.log(l_LeveleArr.flat(Infinity))
/*_________________output______________________
[
  2, 4, 5, 0, 3,
  6, 5, 3, 9
]*/



/*sometime when we are extracting data from net we get in another data structure 
so then if want to check wether they are array we can check..using

===============Array.isArrray()====================*/

console.log(Array.isArray("dharmveer"))
//output          false


/*we can convert it using
==================Array.from()======================*/

console.log(Array.from("dharmveer"))
/*  output
 [
  'd', 'h', 'a',
  'r', 'm', 'v',
  'e', 'e', 'r'
]  
  
*/

//we can also make array from variables;

const num1=100
const num2=200
const num3=300
const num4=400

console.log(Array.of(num1,num2,num3,num4))
//output     [ 100, 200, 300, 400 ]


//things become intresting when we pass object

console.log(Array.from({name:"dharmveer"}))    //  output   []
/*  it returned empty array because it does not know wether keys to array
or values to array */
