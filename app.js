/*
JavaScript Programming Exercise 2
Strings and string functions
Derek Nazzoni
*/
let l = "________________"

let firstName = 'Derek';
let lastName = "Nazzoni";
let age = 31;

console.log(l);
//Concatenation
let messageConcatenation = 'My name is '+ firstName +' '+ lastName +' and my age is '+ age;
console.log(messageConcatenation);
console.log(l);

//String Template/Template Literals
let messageStringLiteral = `My name is ${firstName} ${lastName} and my age is ${age}`;
console.log(messageStringLiteral);
console.log(l); 

//Escape & New Line
let a = "Add a new line\nThis is a new line";
console.log(a);
console.log(l);

let b = "I quoted the person as saying \"I love JavaScript\".";
console.log(b);
console.log(l);

let c = 'It\'s right over there.';
console.log(c);
console.log(l);

let d = 'I quoted the person as saying "I love JavaScript".';
console.log(d);
console.log(l);

let e = "It's right over there.";
console.log(e);
console.log(l);

console.log("String Functions");
let f = "abcdefg";

// Length of f
console.log(`Length of f - ${f.length}`);
//toUpper
f = f.toUpperCase();
console.log(f);

//toLower
f = f.toLowerCase();
console.log(f);

//substr
let g = f.substr(2, 4);
console.log(g);

//substring
let h = f.substring(3);
console.log(h);

//indexOf
let index = f.indexOf("c");
console.log(index);