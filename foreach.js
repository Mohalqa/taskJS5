function doubleValues(arr) {
    arr.forEach(element => {
        console.log(element * 2);
    });
}

var arr = [2, 4, 6];
doubleValues(arr);
///////////////////////////////////////////////////////////
function onlyEvenValues(rr){
  rr.forEach(element => {
    if (element%2===0){
console.log(element);
    }

  });
    
}
var rr = [1,2,3] ; //output 2
onlyEvenValues(rr) ; 
///////////////////////////////////////////////
function showFirstAndLast(bb) {
    bb.forEach(element => {
        if (element.length > 0) {  // Check if the current string is not empty
            let firstChar = element.charAt(0);  // Get the first character
            let lastChar = element.charAt(element.length - 1);  // Get the last character
            console.log(` ${firstChar}  ${lastChar}`);
        }
    });
}

var bb = ["ct", "mt", "tm", "uy"];
showFirstAndLast(bb);
////////////////////////////////////////////////////////
function addKeyAndValue(arr, key, value) {
    arr.forEach(obj => {
    
        obj[key] = value;
    });

    return arr;
}
var inputArray = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
var result = addKeyAndValue(inputArray, 'title', 'instructor');
console.log(result);
////////////////////////////////////////////////////////////

function vowelCount(str) {
    str = str.toLowerCase();
    
    const vowels = "aeiou";
    const result = {};
    
    const charArray = str.split('');
    
    charArray.forEach(char => {
        if (vowels.includes(char)) {
            if (result[char]) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    });
    
    
    return result;
}


console.log(vowelCount('Elie')); 
console.log(vowelCount('Tim')); 
console.log(vowelCount('Matt')); 
console.log(vowelCount('hmmm')); 
console.log(vowelCount('I Am awesome and so are you')); 




  