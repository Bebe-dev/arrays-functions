// NUMBER 1
// What are the differences between mutating array methods and non-mutation array methods in JavaScript. List 5 array methods that fall under each of them

// Mutating array methods are methods that changes the original arrays while non-mutating array methods creates a new array with the new changes.

// - Mutating array methods
//    i. array.pop()
//   ii. array.push()
//  iii. array.shift()
//   iv. array.unshift()
//    v. array.splice()

// - Non-mutating array methods
//    i. array.concat()
//   ii. array.includes()
//  iii. array.indexOf()
//   iv. array.join()
//    v. array.slice()


// NUMBER 2
// Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
/* Add ‘Kotlin’ to the end of the array
Add ‘Java’ after ‘Ruby’
Remove the first item in the array
Add ’Scala’ and ‘Swift’ to the beginning of the array
Replace ‘PHP’ with ‘Go’ and ‘Rust’ */

const languageArray = ["C#", "JavaScript", "Ruby", "PHP", "Python"];
// Number I
languageArray.push("Kotlin");
// Number II
languageArray.splice(3, 0, "Java");
// Number III
languageArray.shift();
// Number IV
languageArray.unshift("Scala", "Swift");
// Number V
languageArray.splice(5, 1, "Go", "Rust");
console.log(languageArray);


// NUMBER 3
// What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
function changeFruit(fruit) {
    fruit[2] = "orange";
    return fruit;
	}
console.log(changeFruit(fruit));

// ANSWER 3
// ["apple", "mango", "orange"]


// NUMBER 4
// Write a function that accepts an array of numbers as an argument.Return the maximum value in the array.

const array = [4, -20, 10, -2];
function returnMax(numberArray){
  let max = numberArray[0];
  for(i=0; i<numberArray.length; i++){
    if(max < numberArray[i]){
      max = numberArray[i]
    }
  }
  return max
}
console.log(returnMax(array));


// NUMBER 5
// Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array

function valTimesIndex(arrayOfNumber){
  let newArray = [];
  for(i=0; i<arrayOfNumber.length; i++){
    let value = arrayOfNumber[i]*i;
    newArray.push(value);
  }
  return newArray;
}
let newValue = valTimesIndex([1,5,15]);
console.log(newValue);
