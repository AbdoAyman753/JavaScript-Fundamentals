// 1- Create  a  function  that  accepts  only  2  parameters  and  
// throw  exception  if number of parameters either less than or exceeds 2 parameters

// function onlyTwo(){
//     if(arguments.length == 2){
//         console.log(arguments);
//     }
//     else
//         throw "Arguments must Equal 2.";
// }
// onlyTwo();
// onlyTwo(1);
// onlyTwo(1,"Hola");
// onlyTwo("Hola","why",22);

/*************************************************************************************************/

// 2- Write  a  function  that  takes  any  number  of  parameters  and
// returns  them reversed.

// function reverseMultiple(){
//     var res = "";
//     for(var count = arguments.length - 1; count > -1; count--){
//         res += arguments[count];
//         if(count == 0)
//             break;
//         res += " ";
//     }
//     return res;
// }
// console.log(reverseMultiple(10,20,30,40,50));
// console.log(reverseMultiple(10,"Hola",20));
// console.log(reverseMultiple("Hello","Hola",20,"Guten Tag"));

/*************************************************************************************************/

// 3- Write  your  own  function  that  can  add n values
// ensure  that  all  passing parameters are numerical values only

// function sumAll(){
//     var sum = 0;
//     for(var count = 0; count < arguments.length; count++){
//         if(isNaN(arguments[count]))
//            throw "Only Numerical Values Allowed";
//         sum += arguments[count]; 
//     }
//     return sum;
// }
// console.log(sumAll(1,2,3));
// console.log(sumAll("Hi",2,3));
// console.log(sumAll(1,2,3,4,5));
// console.log(sumAll(2));

/*************************************************************************************************/

// 4- Write your own function that can read a number from user with validations
// and return it then use the function in 2 differentscenarios 

// function takeNumValue(message){
//     do{
//         var value = prompt(message);
//     }while(isNaN(value) || value == null);

//     return value;
// }

// console.log(takeNumValue("Please Enter your Birth Date: "));
// console.log(takeNumValue("Enter your Age: "));