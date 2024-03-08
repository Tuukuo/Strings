//last four characters
let word = 'Extravaganza';
console.log(word[8]);
console.log(word[9]);
console.log(word[10]);
console.log(word[11]);

// string
const food='The quickfox jumped over the lazy dog';
const addString=food.slice(0,4)+'eat'+food.slice(4);
console.log([addString]);

//How many times the string appears in the string variable
const story='The quick brown fox jumps over the lazy dog'
console.log(('story:',story.match(/the/)).length);
console.log(('story:',story.match(/brown/)).length);

 //find 'are' 'sitting'
const text1='The pupils are reading in the library';
const text2='The child was sitting on the table before it fell';
console.log({index:text1.indexOf('are')});
console.log({index:text2.indexOf('sitting')});


 //convert to specified format
let a='Wonderfull'
a=a.toUpperCase();
console.log(a)
let b='Amazing'
b=b.toLowerCase();
console.log(b)
let c='undERneath'
c=c.toLowerCase();
console.log(c)

function titlecase(str){
    return str.toLowerCase().replace (/\b\w/g,s=>s.toUpperCase());}
console.log(titlecase('A Wonderfull World'));