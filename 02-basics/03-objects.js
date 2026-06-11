//INTERVIEW PITFALL: Singletons vs Non-Singletons
// - Object.create() -> Creates a Singleton object via Constructor template.
// - Object Literals ({}) -> Non-Singleton architecture (creates separate runtime instances).

// Defining a Symbol to use as an Object Key
const mySym = Symbol("key1");

const jsUser = {
    name: "Dharm",
    "full name": "Dharmveer Pandey",
    age: 18,
    location: "Patna",
    email: "dharm@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
//  mySym: "mykey1"
    
    // ❌ WRONG SYNTAX: mySym: "mykey1" -> This creates a regular string key named "mySym"
    //  CORRECT SYNTAX: Use square brackets [] to force evaluation as a Symbol reference

    [mySym]: "mykey1" 
};

//==============access machanism=============

console.log(jsUser.name)                  //standerd dot notation
 //output     Dharm             
    console.log(jsUser["name"])          //Square Bracket Notation (Preferred for dynamic queries)
//output      Dharm

console.log(jsUser["full name"])          // Mandatory Bracket usage: String keys with spaces cannot use dot notation
//output  Dharmveer Pandey

// verifying symbol implementation

console.log(jsUser[mySym])              // see closly when we were acessing property with nraces we were using double quotes init too, but in case of symbol its not required
console.log(typeof jsUser[mySym])
/* output 
mykey1     
string          Output: string (The value is a string, but the key is a Symbol) */

// updating values and freez()


jsUser.email= "dharm@chatgpt"
console.log(jsUser.email)
// output   dharm@chatgpt          email has been updated

Object.freeze(jsUser)   //freez object pe lagta hai aur parameter me us object ka naam jise freez karna ho

jsUser.age=22
console.log(jsUser.age)
//output     18        age not updated because we have freezed the jsUser

/* JavaScript mein kisi bhi frozen object ko unfreeze karne ka koi direct method 
(Object.unfreeze()) nahi hota hai. Once an object is frozen using Object.freeze(), 
it becomes permanently immutable for the rest of that script's execution


nterviewer Hook: "Why did the ECMA committee skip adding Object.unfreeze()?"

Your Peer Answer: JavaScript engines (jaise V8) background level par frozen objects 
ko track karke unki memory allocations ko extreme optimize kar dete hain, kyunki 
compiler ko pata hota hai ki ye data kabhi badlega nahi. Agar Object.unfreeze() feature 
runtime par dynamic state shifting allow karne lagega, toh V8 engine frozen objects par 
space aur execution velocity optimization contracts apply nahi kar payega. Engine integrity 
ke liye immutability ko one-way path rakha gaya hai.

============================functins in object==================================  */

const freshUser={
    name: "dharmveer",
    age:22,

};

 freshUser.greeting = function(){
        console.log("hello user")
    }

     freshUser.greeting2 =function(){
        console.log(`hello user ${this.name}`)
    }
 
    freshUser.greeting()
    freshUser.greeting2()

