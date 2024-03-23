// adding two arrays using push method
const marvel_heros = ["Thor", "Ironman","spiderman"]
const dc_heros = ["superman", "flash", "batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// Using push method we added the second array into the first array but the whole second arrays is treated as a single element 
// in the first array(marvel_heros) 

// Using two arrays usning concat method

const newArray = marvel_heros.concat(dc_heros)
console.log(newArray);

// As we can see using concat method method we can succesfully add 2 arrays but this concat method always returns the result into
// a new array so we need to store the value after concatination of the two arrays into some variable . But in push operation no 
// such thing is required

//Adding two arrays using spread operator(...)

const all_heros = [...marvel_heros, ...dc_heros]
console.log(all_heros);

// The above spread operator is the most used method to add two arrays 

const anotherArray = [1,2,3,[4,5,6], 7 ,[6,7,[4,5]]]

const usable_another_array = anotherArray.flat(Infinity)
console.log(usable_another_array);

// The above flat method is used when  we want to simplify a structure which has array inside array inside array into a single
// array containing of all the elements 


console.log(Array.isArray("Karan"));
// the above method checks wheather the  element given to us is an array or not 
console.log(Array.from("karan"));
// the above method converts the given parametres into an array like here we have converted a string into an array

console.log(Array.from({name:"karan"})); // intresting
// the above line will give an empty array as an output because here it is not specified wheather we want the keys to convert into
// an array or the values


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));


