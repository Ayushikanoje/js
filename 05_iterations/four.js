 /// for each  loop///


 const coding = [ "js","ruby","java","python","cpp"]

//  coding.forEach(function (it){
//     console.log(it);
    
//  })


// coding.forEach((items) => {
//     console.log(items);
    
// });




// function printme(item){
//     console.log(item);
    
// }

// coding.forEach(printme)



coding.forEach((items,index,arr)=>{
   // console.log(items,index,arr);
    
})

const myCoding =[
    {
        languageName:"js",
        languageFileName:"js"
    },

    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"cpp",
        languageFileName:"cpp"
    }
]

myCoding.forEach(items => {
    console.log(items.languageFileName);
    
});