 //array

 const myArr = [0,1,2,3,4,5] // resizeable contain different data type.. 
 // javascript array-copy operation create shallow copies.(a shallow copy of an object is a copy whose properties share the same references (point to the same underlying values)as those of the source object for which the copy was made.)
//mtlb jo bhi change krenge wo original m bhi change hoga.

const myHeros =["skatiman ", " naagraj"]
const myArr2= new Array(1,2,3,4)

console.log(myArr[0]);


//Arrays methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

myArr.unshift(9)//add 9 at starting of array
myArr.shift() // remove starting index i.e 9

const newArr = myArr.join()//convert into string

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));


console.log(myArr);
console.log(newArr);

console.log(typeof newArr);


//// slice, splice

console.log("A ", myArr);

const myn1= myArr.slice(1,3)// original array not change

console.log(myn1);
console.log("B ", myArr);

const myn2= myArr.splice(1,3)// original array change utna part array se nikl jayega jo range di hei original array se
console.log("c ", myArr);
console.log(myn2);


