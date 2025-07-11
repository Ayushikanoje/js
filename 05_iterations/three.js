//to deal with object we use "forin " loop

const myObject={
    js:'javascript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
    console.log(key);
    
}// yaha pr sarri key agyi hei ab apnko values bhi chahiye ->


for (const key in myObject) {
    console.log(` ${key} shortcut is for ${myObject[key]}`);
    
}