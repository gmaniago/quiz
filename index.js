var prompt = require ('prompt-sync').prompt;


var numCorrectAnswers = 0;

console.log('What is your name?');
var name =prompt ();

console.log('Hey '+name+' let us test your programming knowledge here');
console.log('What tag makes the smallest headline?');
var answer1=prompt ();

if (answer1 === 'h6') {
	numCorrectAnswers++
	console.log ('You are correct!')
}
else  {
	console.log ('incorrect')
}


console.log('You are doing great. Let us try another question');
console.log('What tag will make a hyperlink?');
var answer2=prompt ();

if (answer2 === 'a') {
	numCorrectAnswers++
	console.log ('You are correct!')
}
else  {
	console.log ('incorrect')
}

console.log('What does CSS stand for?');
var answer3=prompt ();

if (answer3 === 'cascading style sheets') {
	numCorrectAnswers++
	console.log ('Great! Try another one!')
}
else  {
	console.log ('incorrect')
}

console.log('yes or no. Does setting margin-top and margin-bottom have an affect on an inline element?');
var answer4=prompt ();

if (answer4 === 'no') {
	numCorrectAnswers++
	console.log ('Great! Try another one!')
}

else  {
	console.log ('incorrect')
}

console.log('What is the outer-most layer in the CSS BOX MODEL?');
var answer5=prompt ();

if (answer5 === 'margin') {
	numCorrectAnswers++
	console.log ('Great! Try another one!')
}

else  {
	console.log ('incorrect')
}

console.log('yes or no. Are CSS properties case sensitive?');
var answer6=prompt ();

if (answer6 === 'no') {
	numCorrectAnswers++
	console.log ('Great! Try another one!')
}

else  {
	console.log ('incorrect')
}

console.log('true or false. class selectors are less specific than tag selectors?');
var answer7=prompt ();

if (answer7 === 'false') {
	numCorrectAnswers++
	console.log ('Great! Try another one!')
}

else  {
	console.log ('incorrect')
}

console.log('What does the following expression return? 5/0');
var answer8=prompt ();

if (answer8 === 'infinity') {
	numCorrectAnswers++
	console.log ('Great! Try another one!')
}

else  {
	console.log ('incorrect')
}

console.log('Which of the following is not a simple data type? boolean, letter, number, string');
var answer9=prompt ();

if (answer9 === 'letter') {
	numCorrectAnswers++
	console.log ('Great! Try another one!')
}

else  {
	console.log ('incorrect')
}

console.log('yes or no. Can we use id selectors more than once?');
var answer10=prompt ();

if (answer10 === 'no') {
	numCorrectAnswers++
	console.log ('Great! Try another one!')
}

else  {
	console.log ('incorrect')
}

console.log('yes or no. Are fixed, absolute and relative positions static?');
var answer11=prompt ();

if (answer11 === 'no') {
	numCorrectAnswers++
	console.log ('Great! Try another one!')
}

else  {
	console.log ('incorrect')
}

console.log('true or false. Inline elements respect widht, height and margin..etc');
var answer12=prompt ();

if (answer12 === 'true') {
	numCorrectAnswers++
	console.log ('Great! Try another one!')
}

else  {
	console.log ('incorrect')
}

console.log(' <______> tag is an extension to HTML that can enclose any number of JavaScript statements.');
var answer13=prompt ();

if (answer13 === 'script') {
	numCorrectAnswers++
	console.log ('Great! Try another one!')
}

else  {
	console.log ('incorrect')
}



console.log('When evaluating true && false, what will it return?');
var answer14=prompt ();

if (answer14 === 'false') {
	numCorrectAnswers++
	console.log ('Great! Almost done!')
}

else  {
	console.log ('incorrect')
}

console.log('Which of the following is not an html tag div, a, el or ul?');
var answer15=prompt ();

if (answer15 === 'el') {
	numCorrectAnswers++
	console.log ('Great! Bonus command line questions to follow!')
}

else  {
	console.log ('incorrect')
}

console.log('Which command do we use to make directories in terminal?');
var answer16=prompt ();

if (answer16 === 'mkdir') {
	numCorrectAnswers++
	console.log ('You are a command line wiz!')
}

else  {
	console.log ('incorrect')
}

console.log('Which command do we use to make files in terminal?');
var answer17=prompt ();

if (answer17 === 'touch') {
	numCorrectAnswers++
	console.log ('You are a command line wiz!')
}

else  {
	console.log ('incorrect')
}

console.log('That was ' +Math.floor(diff/1000)+' seconds');
console.log('There are' +numCorrectAnswers+ ' correct');
console.log('Score is ' +numCorrectAnswers/17 * 100 + ' %');

















