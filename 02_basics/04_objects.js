 //object using constructor

 //const tinderUser = new Object() // sigleton object

   const tinderUser = {}  // non singleton object
tinderUser.id="123abc"
tinderUser.name= "  SAMMY"
tinderUser.isLoggedIn= false

//console.log(tinderUser);

//we can also define object inside object

const regularUser={
    email : "some@gmail.com",
    fullname:{
        userfullname:{
            firstname : "Ayushi",
            lastname : "kanoje"
    }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

/////combine objects

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}
 
//const obj4={obj1 + obj2} // object andr object ajjayega

//const obj4 = Object.assign({},obj1,obj2,obj3)

const obj4 ={...obj1, ... obj2,...obj3}
//console.log(obj4);

// datatypes se jab values aayengi toh wo array of objects m ayengi
const user = [
    {
        id:"123",
        email:"ajin@gmail.com"
    },
    {
        id:"1234",
        email:"iuc@gmail.com"
    }
]
 console.log(user[1].email);

 console.log(tinderUser);
 console.log(Object.keys(tinderUser));// we access keys of object (array ke form m milegi)
 console.log(Object.values(tinderUser));// we access values of object (array ke form m milegi)
 console.log(Object.entries(tinderUser));
 
console.log(tinderUser.hasOwnProperty('email'));//hasOwnProperty used to find whether the property is present or not
