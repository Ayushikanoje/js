 // var c = 300
  let a = 300
  if(true){
    let a =10
    const b = 20
    console.log("inner: ",a);
    
  }

  console.log(a);
//   console.log(b);
//   console.log(c);

function one() {
    const username = " ayushi"

    function two() 
    {const website = "Youtube"
        console.log(username);
        
        
    }
    //console.log(website);
    two()
    
}
 //one() 
  
 //////////interesting/////


  addone(5) //run without error
 function addone(num) {
    return num +1
    
 }
//  addone(5)

  //addTwo(5)//give error variable m store kiya h function ko access pehle kr rahae hei  define baad m ->hositing
 const addTwo = function (num) {
    return num +2
 }
//  addTwo(5)