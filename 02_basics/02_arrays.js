 const marvel_heros =["thor", "IRONMAN","SPIDERMAN"]
 const dc_heros = [ "superman ", "flash", "batman"]

//  marvel_heros.push(marvel_heros) // push usi array m push krta h aur concat new array deta h

//  console.log(marvel_heros);
//  console.log(marvel_heros[3][1]);
 

////// concat dono array ko combine krke naya array de diya
//  const allHeros = marvel_heros.concat(dc_heros)
//  console.log(allHeros);
 
///another way -> using spread
const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros);


const another_array = [ 1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)  //flat use krke ek single array m convert kr skte h infinity ki jagah depth bta do..
console.log(real_another_array);

console.log(Array.isArray("Ayushi"));
console.log(Array.from("Ayushi")); // FROM use krke hum array mei convert kr skte h
console.log({name: "Ayushi"}); ///  INTERESTING it give empty array pehle specify krna padega kis cheez ka array bna rahae hei..i.e keys se ya values se

let score1= 100
let score2 = 200
let score3 =300

console.log(Array.of(score1,score2,score3));

