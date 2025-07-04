 const user= {
    username:"ayushi",
    price:200,

    welcomeMessage : function(){
       // console.log(`${this.username} , welcome to website`);// this refer to current context..
        //console.log(this);

//      output of above this o/p:  {
//   username: 'ayushi',
//   price: 200,
//   welcomeMessage: [Function: welcomeMessage]
// }
        
    }
 }

//  user.welcomeMessage()
//  user.username="sam" // here we change the context
//  user.welcomeMessage()
//  console.log(this);


// here the context change so "this" refer current context o/p:{
//   username: 'sam',
//   price: 200,
//   welcomeMessage: [Function: welcomeMessage]
// }

// function chai(){
//     let username = "ayushi"
//     console.log(this.username); // undefined (this object ke andr hi kaan kr araha h function ke andr aise kaam nhi kr raha)
    
// }
// chai()


// const chai = function () {
//     let username = "ayushi"
//     console.log(this.username); 
    
// }
// chai()




/// arrow  function ///
const chai = () =>{
    let username ="ayushi "
    console.log(this.username);
    
}
// chai()

// const addTwo =(num1 , num2)=>{
//     return num1+num2
// }

// console.log(addTwo(3,4));

// implicit return 
//const addTwo =(num1 , num2)=>num1+num2

// const addTwo =(num1 , num2)=>(num1+num2) // agr curly parenthesis h toh return likhna padega nhi aur round paranthesis hei toh nhi likhna padega

// console.log(addTwo(3,4));

//if you want to return object instead of num1 and num2
const addTwo =(num1 , num2)=>({username :"ayushi"})

console.log(addTwo());
