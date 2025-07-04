 function sayMyName(){
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("I");
    
 }

 //sayMyName();

//  function addTwoNumbers(number1 , number2){
//     console.log(number1+ number2);
    
//  }

function addTwoNumbers(number1 , number2){
    return(number1+ number2);
    
 }

//  addTwoNumbers(3,4)
 const result = addTwoNumbers(3,5)
 //console.log("Result : ",result); //undefined -> result return nhi kr raha second function return kr raha h
 

 function loginUserMessage(username = "sam"){// agr argument nhi pass kr rahae to by default sam le lega
    if(username === undefined){
        console.log("Please enter a username.");
        return
        
    }
    return`${username} just logged in`
 }

 //console.log(loginUserMessage("ayushi")); // agr ayushi ki jagah kuch argument nhi pass krte toh undefined ata


 function calculateCardPrice(num2, num3,...num1 ){
return num1 //[ 500, 800 ] baki do value num2 and num3 ne le li  "... ->rest operator "
 }

 //console.log(calculateCardPrice(200,400,500,800));
 

 //// object pass in function
 const user={
    username :"ayushi",
    price : 199
 }
 
 function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
 }
 // handleObject(user)

 //direct bhi pass kr skte h
 handleObject({
    username:"sam",
    price : 200
 })

 /// array pass in function
 const newArray=[200,300,400,600]

 function returnSecondvalue(getArray){
    return getArray[1]
 }

 //console.log(returnSecondvalue(newArray));
 console.log(returnSecondvalue([200,300,400,600]));
 