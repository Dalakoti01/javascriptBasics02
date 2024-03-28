// Singleton object : This is made when we make an object usning constructer
// Eg: Object.create

//Object Lierals

const mySym = Symbol("key1")
// Interview Question : Take the above symbol and use it as a key value pair in an object  
// Object Declaration
const JsUser = {
    name : "Karan",
    "full name" : "karan dalakoti", // if we declare the key value pairs in this then we cannot access it  using dot notation
    age : 21,
    [mySym] : "mykey1", // This is the only valid syntax to declare objects as key value pair . This can be verified when we will
                        // console log the values of object , at that time the output will speecify us that the pair is a symbol
    location : "Agra",
    email : "karan@google.com",
    isLoggedIn : "false",
    lastLogginDays : ["Monday" , "Saturday"]


}
// By default the keys in objects are treated as an string type internally 

// How to access objects => 2 ways(using dot and using sqaure brackets)

console.log(JsUser.email); // first way

console.log(JsUser["email"]); //second way

console.log(JsUser["full name"]);

console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);


// Changing values of an object

JsUser.email = "karan@amazon.com"
console.log(JsUser["email"]);

// Locking values of an object

// Object.freeze(JsUser);

JsUser.email = "karan@q123"
console.log(JsUser["email"]);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User , ${this.name}` );
}

console.log(JsUser.greeting); // aese run krne pr function ni run hoga uska ek return back output m aaega
console.log(JsUser.greeting()); // isme successfully run krega 
console.log(JsUser.greetingTwo());

