ouissal-mohammad-arrays-iteration
//02/05/2021

//Q1
// Answer
function arrayFor(array){
	for (var i = 0 ; i<array.length ; i++) {
   console.log(i)
}
}

// Q2
// answer
function arrayWhile(array){
var i= 0
while ( i<array.length){
console.log(i)
i++
}
}

//Q3
// answer
 function sum(array) {
var result = 0
for ( i=0 ; i<array.length ; i++) {
 result = result + array[i]
}
return result
}

// Q4
// answer
function sumEveryOther(array) {
var result = 0
for ( i=0 ; i<array.length ; i=i+2) {
 result = result + array[i]
}
return result
}
//Q5
// answer
 function sumStartAt(array,index) {
var result = 0
for ( i=index; i<array.length ; i++) {
 result = result + array[i]
}
return result
}

//Q6
// answer
  function sumUntil(array,index){
var result = 0
for ( i=index; i>=0 ; i--) {
 result = result + array[i]
}
return result
}

//Q7
// Answer
     function substractReverse(array){
var result = array[array.length-1]
for ( i=array.length-2; i>=0 ; i--) {
 result = result - array[i]
}
return result
}

//Q8
// answer
function product(array){
var result = 1
for ( i=0 ; i<array.length ; i++) {
 result = result *array[i]
}
return result
}

//Q9
// answer
function average(array){
var result = 0
for ( i=0 ; i<array.length ; i++) {
 result = result + array[i]
}
return result /array.length
}

// Q10
   // answer
   function square(array){
var i= 0
while (i<array.length){
	array[i]=array[i]*array[i]
	i++
}
return array
   }
   
//Q11
   // answer
   function isArray(array){
   	if (Array.isArray(array)===true ){
return true }
else return false ;
   	}