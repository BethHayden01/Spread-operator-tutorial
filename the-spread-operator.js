/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
//Simple scenario where you'd like to make a copy of an array (shown below).
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("Second array", arr2);
//consider you'd like to push a second element into the second array ("arr2.push(4);"), after adding this statement, 
//the second array now has 4 elements instead of 3 as per arr1. However, this adds the 4th element to arr1 too as shown below.
//This is because arr2 is not a copy of arr1 but a new variable that points to the same object as the 1st variable, so anything done to the 2nd will be done to 1st.
console.log("First array", arr1);
//This can be resolved using a spread operator as will be shown below.

// Copying an array
let arr3 = [4, 5, 6];
let arr4 = [...arr3];
//The 3 dots spreads(copies) the values of arr3 into the 4th variable. Adding anything to 4th will not touch 3rd as shown below:
arr4.push(7);
console.log("Third array", arr3);
console.log("Fourth array", arr4);
//This syntax also work for copying objects as shown below:

// Copying an object
let obj1 = {a: 1, b: 2, c: 3 };
let obj2 = {...obj1, d: 4 };
let obj3 = {...obj1, b:5 };
console.log("First Object", obj1);
console.log("Second Object", obj2);
console.log("Third object", obj3);
//The 1st object is spread(copied) into the second object whilst remaining untouched by anything in the declaration of obj2.
//If you wish to change anything in the 1st object you can override it in the 2nd object as shown above in obj3.
//obj1 remains the same but in obj3 the b value is overwritten to 5.

// Copying only part of an array/object
// If you want to combine several objects you can define something like arr5. 
//You can spread the first array and object, the third array and 3 random values all inside the curly brackets.
let arr5 = [...arr1, {...obj1}, ...arr3, "X", "Y", "Z"];
console.log(arr5);
