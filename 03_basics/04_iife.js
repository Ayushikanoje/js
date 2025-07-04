 // Immediately invoked function expression (IIFE) -> jo bhi function immediate execute ho jaaye  or global scope ke pollution se problem hoti hei kai baar islye usse avoid krne ke liye use krte h

 (function chai(){
    //name IIFE
    console.log(`DB CONNECTED`);
    
 })();


 // iife using arrow function
 ((name)=>{
    console.log(`DB CONNECTED  ${name}`);
    
 })("iuc");


 ///05_ JAVASCRIPT EXECUTION CONTEXT (FILE KO JAVASCRIPT RUN KAISE KREGI --- DO PHASE M JAVASCRIPT FILE KO RUN KRTI H)

 //BROWSER ke andr "THIS"  ki value window aati h IMPORTANT POINT
 //javascript => single threaded

 //1.global execution context
 //2.function execution context
 //3. eval execution context

 // 2 PHASES
 //1.memory CREATION PHASE -> jo bhi decalre kiya h variable wagera unlo space allocate ki jaaati execute nhi kiya jata
 //2.execution phase ->execute hota h