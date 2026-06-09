const intArray=[2,3,4,5,6]
const mixedArray=[1,2,3,'d',"dharm",[8,6,7,0]]
console.log(intArray)
console.log(mixedArray)

/*=================output=========================
        [ 2, 3, 4, 5, 6 ]

[ 1, 2, 3, 'd', 'dharm', [ 8, 6, 7, 0 ] ]


actually in JS array can also store dissimilar elements  */


const myArray=new Array(2,4,6,8)         //inbuilt constructor Array created myArray and length property and various prototypes assigned to myArray
console.log(myArray)                     //output   [ 2, 4, 6, 8 ]

/*=========================various prototype functions====================*/


myArray.push(10) 
console.log(myArray)      //output [ 2, 4, 6, 8, 10 ]       10 gets added to last

myArray.pop() 
console.log(myArray)     //output [ 2, 4, 6, 8 ]                removed the last element


myArray.unshift(20) 
console.log(myArray)   //output   [ 20, 2, 4, 6, 8 ]          unshift adds element to start

myArray.shift(8) 
console.log(myArray)    //output  [ 2, 4, 6, 8 ]          removes first element just like left shift


// =================join()=====================
let newArray=myArray.join()
console.log(typeof newArray)         //output     string
console.log(newArray)                //           2,4,6,8     look closely it not in braces

//what join() does???
//actually joins Adds all the elements of an array into a string, separated by the specified separator string.


//==================slice() and splice()========================

console. log (myArray.slice(0,2))      // output  [ 2, 4 ]
// slice takes the starting index and ending index..it sart coping the elements and stops before ending index and returns the values
//original array remains unchanged

newArray=myArray.splice(0,2)           
console.log(newArray)                 //  output  [ 2, 4 ]
//splice takes start index and no of element to cut , actually it doesnot copy it cuts the value to new array
//original array gets changed
console.log(myArray)             //output    [ 6, 8 ]


/* ============a sudden question in mind  and its answer============

when we have decleared arra as const then how array is changing

This is one of the biggest "gotchas" in JavaScript! It confuses almost everyone at first.
The short answer is: const prevents you from changing the variable reference, but it does not make the data inside an object or array immutable (unchangeable).*/


