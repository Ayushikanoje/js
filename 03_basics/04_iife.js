 // Immediately invoked function expression (IIFE) -> jo bhi function immediate execute ho jaaye  or global scope ke pollution se problem hoti hei kai baar islye usse avoid krne ke liye use krte h

 (function chai(){
    //name IIFE
    console.log(`DB CONNECTED`);
    
 })();


 // iife using arrow function
 ((name)=>{
    console.log(`DB CONNECTED  ${name}`);
    
 })("iuc");
 