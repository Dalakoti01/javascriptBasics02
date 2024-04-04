// const tinder = new Object();// singleton object because it is created using constructor

const tinder = {}
// another way of putting values into an object

tinder.id = "123abc"
tinder.name = "same"
tinder.isLoggedIn = "true"
console.log(tinder);


// Object inside Object nested
const regularUser = {
    name : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Karan",
            lastname : "dalakoti"
        }

    }
}

console.log(regularUser.fullname?.userfullname);

// the above ? in console .log is written for extraprotection in case fullname is not present . This is more useful when the 
// response in coming from the api


// Combining Objects

const obj1 = {
    1 : "a",
    2: "b"
}

const obj2 = {3: "a" , 4 : "b"}

// const obj3 = {obj1,obj2} //  using this we will facing the problem in which we  will be getting objetcts inside object 
// console.log(obj3);

const obj3 = Object.assign(obj1,obj2)
const obj4 = Object.assign({} , obj1, obj2)
console.log(obj3);
console.log(obj4);

// In the above .assign method always return a value which contains the value when all the arguements passed in the paranthesis
// are combined inside the value that is the first arguement of the paranthesis . Thats why in mostly we give an empty object as
// the first arguement because all the other arguments will be sumberged into the empty object

// Spread operator to combine multiple objects

const obj5 = {...obj1 , ...obj2}
console.log(obj5);

//  How actual values come from a database

const user = [
    {
        id : 1,
        email : "k@gmail.com"
    },

    {
        id : 2,
        email : "d@gmail.com"
    },
    {
        id : 3,
        email : "s@gmail.com"
    }
]

console.log(user[1].email);

const tinderUser = {
    id : "123abc",
    email : "karan@gmail.com",
    isLoggedIn : "false"

}
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));// this will give us all the objects which will be stored inside another object

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Destructing of object

const course = {
    coursename : "JavaScript-Hindi",
    price : 0 ,
    courseInstructer : "Hitesh"
}

// Now if we want to access courseInstructer we have to write course.courseInstructer again and again which will be lengthy 
// process . That's why we will destructure object

const {courseInstructer : Instructer} = course
console.log(Instructer); 

// An example of how this destructuring of objects work in react . In react there is default object props . So now if we
// want to access any elements inside props so we have to write props.elementsname again and again and this will make the
// code lengthy so we will destructure the props 

const navbar = ({comapany}) => {

}

navbar(comapany = "hitesh")

// API : jab humko apna kaam kisi ke sar pr daalna ho 
/*
APIs are mechanisms that enable two software components to communicate with each other using a set of definitions and 
protocols. For example, the weather bureau's software system contains daily weather data. The weather app on your phone “talks”
 to this system via APIs and shows you daily weather updates on your phone.

 To handle api earlier XML was used but it was very lengthy but now json is used . The syntax of json is same as of object but
 the only difference is that in json the keys are also written in double quotes.
*/ 

{
    "name" : "karan",
    "coreseName" : "JavaScript-Hindi",
    "price" : "free"
}
