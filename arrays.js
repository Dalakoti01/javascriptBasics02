//Arrays

const myArray = [0,1,2,3,4,5];
console.log(myArray[2]); // based indexing
// console.log(myArray);//

// Copy operations in arrays makes shallow copies of the array 
// Shallow copies of an object is a copy which shares the same reference point . Means any change in the copy will reflect to the 
// original value because the reference point is  same 

// Deep copy : A deep copy of an object is a copy whose properties do not share the same reference point

const myHeroes = ["shakriman" , "naagraj"]
const myArray2 = new Array(1,2,3,4,5)
console.log(myArray2[1]);

// Array Method

myArray.push(18)
myArray.push(7)
console.log(myArray);
myArray.pop()
console.log(myArray);

const myArray3 = [1,2,3,4,5,6]
myArray3.unshift(18)
console.log(myArray3);
// As we can see that the above unshift operation is used to add any value which is given inside the parametere to the starting 
// point of the array 

myArray3.shift()
console.log(myArray3);
// Exactly what pop does to the push operation , the same shift() does to the unshift operation i.e it removes the left most or
// starting value form the array 

console.log(myArray3.includes(4));
console.log(myArray3.indexOf(10));
console.log(myArray3.indexOf(3));

// join operation 
const newArr = myArray3.join()
console.log(myArray3);
console.log(typeof myArray3);
console.log(newArr);
console.log(typeof newArr);

// Splice and Slice

const anotherArray = [ 1,2,3,4,5,6,7]
console.log("A" , anotherArray);
const arr1 = anotherArray.slice(1,3)
console.log("B" , anotherArray);
console.log("Slice Operation" ,arr1);
const arr2 = anotherArray.splice(1,3)
console.log("C", anotherArray);
console.log("Splice Operation" , arr2);
/*
Basically there are two major differnce between these two:
First : In slice the last index given is not included where as in splice the last index thats is used is also included
Second : When we perform the slice operation , the changes are not reflected to the original array whereas in splice operation
         the changes are also done on the original array 

*/
