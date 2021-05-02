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

//intermediate
//Q12
//Answer

function min(array){
    var resultmin=array[0]
    var i=1
    while (i<(array.length)){
        if ((array[i])<resultmin){
            resultmin=array[i]
        }
    else resultmin=resultmin
i++
    }
return resultmin;   
}

//Q13
//Answer
function max(array){
    var resultmax= array[array.length-1]
    var i=array.length-2
    while(i>=0){
        if (resultmax>(array[i])){
            resultmax=resultmax
        }
        else resultmax=array[i]
    i--
    }
    return resultmax;
    }

//Q14
//answer
function shortestString(array){
    var resultmin=array[0]
    var i=1
    while (i<(array.length)){
        if ((array[i].length)<(resultmin.length)){
                resultmin=array[i]
        }
        else resultmin=resultmin
    i++
    }
return resultmin.length;   
}

//Q15
//answer
function longeststring(array){
var resultmax=array[0]
var i = 1
while (i < array.length){
    if (array[i].length> resultmax.length){
            resultmax= array[i]
    }
    
    else result= resultmax 
    
    i++
}
    
return resultmax.length
}

//Q16
//Answer
function minMax(array){
    var min=array[0]
    var max=array[0]
    
    for (var i=1; i<array.length;i++){
        if ((array[i])<min){
            min=array[i]
        }
    else min=min
    }
    
    for (var i=1; i<array.length;i++){
        if ((array[i])>max){
            max=array[i]
        }
    else max=max
    }
    var result=[min,max]
    return result;
    }

//Q17
//answer
function shortestLongest(array){
    var min=array[0]
    var max=array[0]
    
    for (var i=1; i<array.length;i++){
        if ((array[i].length)<min.length){
            min=array[i]
        }
    else min=min
    }
    
    for (var i=1; i<array.length;i++){
        if ((array[i].length)>max.length){
            max=array[i]
        }
    else max=max
    }
    var result=[min,max]
    return result;
    }

//Q18
//Answer
function multiplyBy(array,number){
    var i= 0
    while (i<array.length){
        array[i]=array[i]*number
        i++
    }
    return array
}

//Q19
//Answer
function multiplyByindex(array){
    var i= 0
    while (i<array.length){
        array[i]=array[i]*i
        i++
    }
    return array
}

//Q20
//Answer
function lengths(array){
    var i= 0
    while (i<array.length){
        array[i]=array[i].length
        i++
    }
    return array
}

//Q21
//Answer
function totallengths(array){
    var result=0
        var i= 0
        while (i<array.length){
            result=result+array[i].length
    i++
        }
        return result
    }

    / advanced
    //Q22
    // answer
    function filterEvenWords(array){
        var arrayFinal=[ ]
      var i = 0
       while ( i< array.length ){
           if (((array[i].length)%2)===0) {
           arrayFinal.push(array[i])
           }
           i++
       } return arrayFinal;
   }
  //Q23
  // answer
  function poplastElement(array){
      for ( var i = 0 ; i <array.length ; i++){
      array[i].pop();
      }
      return array
  }
   // Q24
   // answer
   function pushlastElement(array,element){
      for ( var i = 0 ; i <array.length ; i++){
      array[i].push(element);
      }
      return array
  }
  // Q25
   // answer
   function help(array) {
  var result = 0
  for ( i=0 ; i<array.length ; i++) {
   result = result + array[i]
  }
  return result
  }
  function sumArrays(array){
      var sum = 0
      var i =0
      while (i<array.length){
  sum = sum + help(array[i])
  i++
      }
  return sum
  }
  // Q26
  // answer
  function multiplyBysmallest(array){
  var min = array[0]
   var i = 1
   while (i<array.length){
   if ( array[i]<min){
       min= array[i]
  }
   else min=min
  i++
  }
  var j= 0
  while (j<array.length){
  array[j]= array[j]*min
  j++
  }
  return array
  }
  // Q27
   // answer
  function joinArray(array){
  var resultconcat =[ ]
  for (i=0 ; i<array.length; i++){
  resultconcat= [ ].concat(resultconcat,array[i])
  }
  return resultconcat
  }
  //Q28
  // answer
  function sumOddEven (array){
  var odd= 0
  var even = 0
  while (i< array.length){
  if ( (array[i]%2)===0){
      even= even + array[i]
  }	
  else odd= odd+array[i]
    i++
  }
  var resultarray= [even,odd]
  return resultarray
  }










}