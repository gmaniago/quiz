
var prompt = require ('prompt-sync').prompt;

var startTime = new Date();
var numCorrectAnswers = 0;

console.log('What is your name?');
var name =prompt ();

console.log('Hey '+name+' let us test your programming knowledge here');
console.log('What tag makes the smallest headline?');
var answer1=prompt () .toLowerCase();

if (answer1 === 'h6') {
	numCorrectAnswers++
	console.log ('You are correct!')
}
else  {
	console.log ('incorrect')
}


console.log('You are doing great. Let us try another question');
console.log('What tag will make a hyperlink?');
var answer2=prompt () .toLowerCase();

if (answer2 === 'a') {
	numCorrectAnswers++
	console.log ('You are correct!')
}
else  {
	console.log ('incorrect')
}

console.log('What does CSS stand for?');
var answer3=prompt () .toLowerCase();

if (answer3 === 'cascading style sheets') {
	numCorrectAnswers++
	console.log ('Great! Try another one!')
}
else  {
	console.log ('incorrect')
}

console.log('yes or no. Does setting margin-top and margin-bottom have an affect on an inline element?');
var answer4=prompt () .toLowerCase();

if (answer4 === 'no') {
	numCorrectAnswers++
	console.log ('Great! Try another one!')
}

else  {
	console.log ('incorrect')
}

console.log('What is the outer-most layer in the CSS BOX MODEL?');
var answer5=prompt () .toLowerCase();

if (answer5 === 'margin') {
	numCorrectAnswers++
	console.log ('Great! Try another one!')
}

else  {
	console.log ('incorrect')
}

console.log('yes or no. Are CSS properties case sensitive?');
var answer6=prompt () .toLowerCase();

if (answer6 === 'no') {
	numCorrectAnswers++
	console.log ('Great! Try another one!')
}

else  {
	console.log ('incorrect')
}

console.log('true or false. class selectors are less specific than tag selectors?');
var answer7=prompt () .toLowerCase();

if (answer7 === 'false') {
	numCorrectAnswers++
	console.log ('Great! Try another one!')
}

else  {
	console.log ('incorrect')
}

console.log('What does the following expression return? 5/0');
var answer8=prompt () .toLowerCase();

if (answer8 === 'infinity') {
	numCorrectAnswers++
	console.log ('Great! Try another one!')
}

else  {
	console.log ('incorrect')
}

console.log('Which of the following is not a simple data type? boolean, letter, number, string');
var answer9=prompt () .toLowerCase();

if (answer9 === 'letter') {
	numCorrectAnswers++
	console.log ('Great! Try another one!')
}

else  {
	console.log ('incorrect')
}

console.log('yes or no. Can we use id selectors more than once?');
var answer10=prompt () .toLowerCase();

if (answer10 === 'no') {
	numCorrectAnswers++
	console.log ('Great! Try another one!')
}

else  {
	console.log ('incorrect')
}

console.log('yes or no. Are fixed, absolute and relative positions static?');
var answer11=prompt () .toLowerCase();

if (answer11 === 'no') {
	numCorrectAnswers++
	console.log ('Great! Try another one!')
}

else  {
	console.log ('incorrect')
}

console.log('true or false. Inline elements respect widht, height and margin..etc');
var answer12=prompt () .toLowerCase();

if (answer12 === 'true') {
	numCorrectAnswers++
	console.log ('Great! Try another one!')
}

else  {
	console.log ('incorrect')
}

console.log(' <______> tag is an extension to HTML that can enclose any number of JavaScript statements.');
var answer13=prompt () .toLowerCase();

if (answer13 === 'script') {
	numCorrectAnswers++
	console.log ('Great! Try another one!')
}

else  {
	console.log ('incorrect')
}



console.log('When evaluating true && false, what will it return?');
var answer14=prompt () .toLowerCase();

if (answer14 === 'false') {
	numCorrectAnswers++
	console.log ('Great! Almost done!')
}

else  {
	console.log ('incorrect')
}

console.log('Which of the following is not an html tag div, a, el or ul?');
var answer15=prompt () .toLowerCase();

if (answer15 === 'el') {
	numCorrectAnswers++
	console.log ('Great! Bonus command line questions to follow!')
}

else  {
	console.log ('incorrect')
}

console.log('Which command do we use to make directories in terminal?');
var answer16=prompt () .toLowerCase();

if (answer16 === 'mkdir') {
	numCorrectAnswers++
	console.log ('You are a command line wiz!')
}

else  {
	console.log ('incorrect')
}

console.log('Which command do we use to make files in terminal?');
var answer17=prompt () .toLowerCase();

if (answer17 === 'touch') {
	numCorrectAnswers++
	console.log ('You are a command line wiz!')
}

else  {
	console.log ('incorrect')
}

var endTime = new Date();
var timeDiff = endTime - startTime;
timeDiff /= 1000;


console.log('You have ' +numCorrectAnswers+ ' correct answer out of 17');
console.log('Score is ' +numCorrectAnswers/17 * 100 + ' %');


var score = numCorrectAnswers/17*100;
score = Math.floor(score);
if (score >= 75) {
	console.log('Celebrate '+name+'! You passed with '+score+'%. Pat yourself in the back! Great job!!');
}
else {
	console.log('Awww '+name+'. You did not do well with '+score+'%. Better practice');
}











