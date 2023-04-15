var fruits = ["apple", "strawberry", "banana", "orange","mango"];
var lol = ["lal", "no", "hhhhh"];

// a- test that every element in the given array is a string
function isString(element){
    return !isFinite(element);
}
console.log(fruits.every(isString));

// b- test that some of array elements starts with "a"
function myArrayHas(element){
    return element.includes('a');
}
console.log(lol.some(myArrayHas));

// c- generate new array filtered from the given array with only elements that starts with "b" or "s"
let filteredArray = fruits.filter((element)=>{
    return element.startsWith('b') || element.startsWith('s');
})

console.log(filteredArray);

// d- generate new array each element of the new array contains 
//         a string declaring that you like the give fruit element.

let mappedArray = fruits.map((element)=>{
    return `I Like ${element}`;
})

// e- use forEach to display all elements of the new array from previous point
mappedArray.forEach((element)=>{console.log(element)});
