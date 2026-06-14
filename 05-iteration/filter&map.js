const numbers=[1,2,3,4,5,6,7,8,9]

const filteredNUms=numbers.filter((nums)=> nums>5)
//    console.log(nums) // ReferenceError: nums is not defined (it is scoped to the filter callback)

console.log(filteredNUms)




//========================maps==================================

//adding 10 to each array element




let newNums=numbers.map((nums)=> nums+10)
console.log(newNums)


//const newNums=numbers.map((nums)=>{ return nums+10})       scope open kiya to return karna padega
//console.log(newNums)




//=================chaining of filter and map==============


 newNums=numbers
              .map((nums)=> nums*10)
              .map((nums)=>nums+1)
              .filter((nums)=>nums>40)        
console.log(newNums)