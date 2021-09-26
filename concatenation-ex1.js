/*
JavaScript Programming Concatenation Exercise #1
Strings and string functions
Derek Nazzoni
*/

let all = 'Fred was excited about starting his course at NBCC. \nWeb and Mobile Application development was the program Fred entered in the Fall of 2019. \nIntro to Programming is going to be the' +
'course Fred likes best. Fred is going to study very hard. \nEach night Fred is going to spend time reviewing all of the course material.' +
'\nFred will be committed to learning as much as possible about C# in 2019!';
console.log(all);

//With variable for "Fred"
let firstName = "Fred";
let all2 = '\n' + firstName + ' was excited about starting his course at NBCC. \nWeb and Mobile Application development was the program ' + 
firstName + ' entered in the Fall of 2019.' +
'\nIntro to Programming is going to be the course ' + firstName + ' likes best. ' + firstName + ' is going to study very hard.' + 
'\nEach night ' + firstName + ' is going to spend time reviewing all of the course material.' +
'\n' + firstName + ' will be committed to learning as much as possible about C# in 2019!';
console.log(all2);

//With template literals
let all3 = `\n${firstName} was excited about starting his course at NBCC. 
Web and Mobile Application development was the program ${firstName} entered in the Fall of 2019. 
Intro to Programming is going to be the course ${firstName} likes best. ${firstName} is going to study very hard. 
Each night ${firstName} is going to spend time reviewing all of the course material.
${firstName} will be committed to learning as much as possible about C# in 2019!`;
console.log(all3);


