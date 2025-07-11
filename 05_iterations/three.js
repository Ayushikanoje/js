//to deal with object we use "forin " loop

const myObject={
    js:'javascript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
   // console.log(key);
    
}// yaha pr sarri key agyi hei ab apnko values bhi chahiye ->


for (const key in myObject) {
    //console.log(` ${key} shortcut is for ${myObject[key]}`);
    
}

const programming =["js", "rb", "py","java","cpp"]

for (const key in programming) {
    //console.log(programming[key]);
    
}

// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('Fr', "France")

// for (const key in map) {
//     console.log(key);
//     // map is not iterateable so print nhi hoga kuch
// }

