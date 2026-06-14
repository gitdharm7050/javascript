//basic variation
 // keep in mind it dont return any values


const coding=['js','ruby','python','java','cpp']
// coding.forEach(function (value){
//     console.log(value)
// }   )

// //arrow function

// coding.forEach( (value)=>{
// console.log(value)
// })

function print(value)
{
    console.log(value)
}

coding.forEach(print)


// the above described forEach not only has access to value, it also has access to index and the whole array

coding.forEach( (item,index,arr)=>
{
console.log(item,"  ",index,"  ",arr)
})


const myCoding=[
    {
        language: "java",
        duration: "6 hr"
    },
    {
        language: "python",
        duration: "3 hr"
    },
    {
        language: "cpp",
        duration: "5 hr"
    }
]


myCoding.forEach((item)=>{
    console.log(item.language)
})



