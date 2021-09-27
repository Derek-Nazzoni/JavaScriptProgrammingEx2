/*
JavaScript Programming Concatenation Exercise #2
Strings and string functions
Derek Nazzoni
*/
let firstName = "Derek";
let lastName = "Nazzoni";
let age = 31;
let city = "Santo Andre";
let married = "true";
let firstJob = "Burger King";
let hourlyRate = "7.00";

console.log('Hello ' + firstName + ' ' + lastName + '. You are ' + age + ' years old and were born in ' + city + ', and currently live in ' +
 'Moncton. \nYour first job was at ' + firstJob + ' making $' + hourlyRate + '/hour.\nI asked if you were married and you said ' + married + '.')

 console.log(`\nHello ${firstName} ${lastName}. You are ${age} years old and were born in ${city}, and currently live in Moncton.
Your first job was at ${firstJob} making $${hourlyRate}/hour.
I asked if you were married and you said ${married}.`)