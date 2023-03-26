// Day By Date

// (function(){
//     var date;
//     var dateArr;
//     var dateRegEx = new RegExp(/([\d]{1,2})[-]([\d]{1,2})[-]([\d]{4})/);
//     do{
//         var text = prompt("Enter valid Date: ");
//     }
//     while(!dateRegEx.test(text));
//     dateArr = text.split("-");
//     date = new Date(dateArr[2], dateArr[1], dateArr[0]);
    
//     switch(date.getDay()){
//         case 0:
//             alert("The Day is Sunday");
//             break;
//         case 1:
//             alert("The Day is Monday");
//             break;
//         case 2:
//             alert("The Day is Tuesday");
//             break;
//         case 3:
//             alert("The Day is Wednesday");
//             break;
//         case 4:
//             alert("The Day is Thursday");
//             break;
//         case 5:
//             alert("The Day is Friday");
//             break;
//         case 6:
//             alert("The Day is Saturday");
//             break;

//     }
// })();


/***********************************************************************/

// Valid Date By user

// (function(){
//     var flag = 0;
//     function getDate(dateString){
//         var date;
//         var dateArr;

//         dateArr = dateString.split("-");
//         date = new Date(dateArr[2], dateArr[1], dateArr[0]);
//         alert("The Date is: " + date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear());
//     }

//     var text = prompt("Enter valid Date: ");
//     if(text == null || text.length != 10 || text.charAt(2) != '-' || text.charAt(5) != '-'){
//         alert("Wrong Date Format!");
//     }
//     else {
//         confirm("Show Date?")? getDate(text):alert("Bye!");
//     }
    
// })();


/***********************************************************************/


// Circle area

// function circleArea(r){
//     return Math.PI * r * r;
// }

// do{
//     var value = prompt("Enter Your Circle raduis: ");
// }while( isNaN(value) || value == null);
// alert("Area of The circle is : " + circleArea(value));


/***********************************************************************/


// Sqrt 

// do{
//     var value = prompt("Enter Number to Evaluate Square Root: ");
// }while( isNaN(value) || value == null);
// alert("Square Root is : " + Math.sqrt(value));



/***********************************************************************/

// Random Tip

// function getRandInteger(min, max) {
//     return Math.floor(Math.random() * (max - min) ) + min;
//   }
// var jsTips = ["JavaScript use Hoisting, which declare variables at the start of the code.",
//             "JavaScript is interperted Language which means it is excuted line by line.",
//             "JavaScript allows you to use variable before declaring them, or without declaring at all.",
//             "JavaScript function is considered as an object.",
//             "JavaScript uses Coersion to automatically convert from type to another if it's possible.",
//             "JavaScript can create anonymous function, which is functions without names.",
//             "JavaScript Anonymous functions can't be pointed to, which means it can't be assign too variables",
//             "JavaScript has no data types",
//             "JavaScript has an object called object, which returns a type of Object"];
//         alert(jsTips[getRandInteger(0,jsTips.length)]);


/***********************************************************************/


// Adding -- Multiplying -- Dividing

var sum = 0;
var mul = 1;
var div = 1;
var arr = new Array(3);
arr = [null, null, null];

function getElement(){
    do{
        var value = prompt("Enter Number: ");
    }while( isNaN(value) || value == null);
    arr[arguments[1]] = Number(value);
}
console.log(arr.length);
arr.forEach(getElement);

// for(var j = 0; j < arr.length; j++){
//     do{
//         var value = prompt("Enter Number: ");
//     }while( isNaN(value) || value == null);
//     arr[j] = Number(value);
// }

for(var i = 0; i < arr.length; i++){
    sum += arr[i];
    mul *= arr[i];
    if(i == 0){
        div = arr[i];
    }    
    else{
        div /= arr[i]; 
    }
        
}

 document.write("<div><h1>Adding -- Multiplying -- Dividing</h1></div>");
 document.write("<hr>");
 document.write("<div><span style=\"font-size:20px;color:red;\">Sum of 3 Values </span>"
+arr.join("+")+" = "+sum+"</div>");
 document.write("<div><span style=\"font-size:20px;color:red;\">Multiplication of 3 Values </span>"
 +arr.join("*")+" = "+mul+"</div>");
 document.write("<div><span style=\"font-size:20px;color:red;\">Division of 3 Values </span>"
 +arr.join("/")+" = "+div+"</div>");


/***********************************************************************/


//reverse Function

// function reversInput(){
//     var arr = new Array(...arguments);
//     return arr.reverse();
// }

// console.log(reversInput(1,2,3));