 const name="ayushi"
 const repoCount =50

// console.log(name + repoCount +" Value");
 console.log(`hello my name is ${name} and my repo count is ${repoCount} `);
 
 //another way to define string using new keyword

 const gameName = new String('ayushi')

 console.log(gameName[0]);
 console.log(gameName.__proto__);
 console.log(gameName.length);
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('h'));
 
 const newString= gameName.substring(0,4)//negative value nhi de skte
 console.log(newString);

 const anotherString= gameName.slice(-6,4)
 console.log(anotherString);
 
 //extra space nhi chahiye , remove starting and ending extra space prefer mdn doc for more info
 const newStringOne="   Ayushi   "
 console.log(newStringOne);
 console.log(newStringOne.trim());

 const url="https://ayushi.com/ayushi%20kanoje"
 
 console.log(url.replace('%20','-'));
 
 console.log(url.includes('sundar'));
 
 
 