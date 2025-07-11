 // for of

// ["","",""]
// [{},{},{}]

const arr = [1,2, 3 ,4, 5]

for (const num of arr) {
   // console.log(num);
    
}

const greeting = "Hello world!"

for (const greet  of greeting) {
    //console.log(greet);
    
    
}

//Maps : ek object hei jo key, value pair hold krta hei jis order mei insert kiya hei usko yaar rakhta hei or jo normal object hei wo nhi rakhta order ko yaad
       // also it hold unique values
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr', "France")

//console.log(map);

// for (const key of map) {
//     console.log(key);
    
    
// }  // this will print the value in array

for (const [key,value] of map) {
    //console.log(key,":-",value);
    
}

// below we forof loop on object

// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'Spiderman'
// }

// for (const [key,value] of myobject) {
//     console.log(key,':-',value);
    
    
// } // forof loop doesn't work on object.... myObject is not iterable

