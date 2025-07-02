 //two ways to decalre object 1.literals 2.constructor
 //" singleton "->koi bhi "constructor" se bnate h toh singleton object bnta h mtlb ye apne tareeke ka ek hi object hei aur agr dusri tarah se bnte hei toh uske multiple instances bn jaatein h
//object.create -> using constructor


///////object literals/// const jsuser ={}

//unique data type :Symbol (primitive datatype)
const mySym = Symbol("key1")// in this way we define symbol

//q.-> ek symbol lo usko object ki keys m insert kro aur print krke dikhao  /// usko square bracket m likhenge [] tabhi wo symbol datatype hoga nhi toh string le lega

const JsUser = {
    name :"Ayushi",
    "full name" : "Ayushi Kanoje",//iss value ko kabhi bhi dot se access nhi kr payenge isliye dusra tareeka bhi ana chahiye
    [mySym] : "mykey1",
    age : 21,
    location : "Indore",
    email : " ayushikanoje@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday ", "Saturday "]

}

//access object-> two ways :
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);


JsUser.age= 22 //  object ki values ko change
console.log(JsUser.age) ;   
//Object.freeze(JsUser) // ab koi bhi object ki values change nhi kr skta
JsUser.age=25
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js User")
}

JsUser.greeting2 = function(){
    console.log(`Hello Js User , ${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());

