//Dates

let myDate = new Date()
//  console.log(myDate);
//  console.log(myDate.toString());
//   console.log(myDate.toDateString());
//    console.log(myDate.toISOString);
//     console.log(myDate.toJSON());
//      console.log(myDate.toLocaleDateString());
//       console.log(myDate.toLocaleString());


//        console.log(typeof myDate);//* type is object *

//to created specific date
//    let myCreatedDate = new Date(2025 ,0,23)
//    console.log(myCreatedDate.toDateString());

// let myCreatedDate= new  Date(2025 , 0 , 15 , 5 ,3)
// let myCreatedDate = new Date("2025-01-14")//yaha pr month ko 1 dena padega upr array tha isliye wo 0 index liya janvauary ko
let myCreatedDate = new Date("01-14-2025")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());//milli seconds m milega . jab bhi compare krna h toh millisecond m krna
// console.log(Math.floor(Date.now() / 1000));  //second m mileaga

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);//WE ADDED ONE BECAUSE INDEXING START FROM 0

//toLocalString ko customize bhi kr skte hein apn
newDate.toLocaleString('default',{
    weekday:"long"
})


