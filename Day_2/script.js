// // 1
// for(var i = 10; i <= 20; i += 2){
//     console.log("Item " + i);
// }


// // 2
// for(var i = 1; i < 10; i += 2){
//         console.log(i);
//     }


// // 3
// alert("Welcome to my site");
// do{
//     var userName = prompt("Enter your name please!!");
// }while(isFinite(userName) || userName == null);
// document.write("Welcome "+userName);


// // 4
// var sum = 0;
// while (sum < 100){
//     var temp = prompt("Please enter a number!!");
//     if( isNaN(temp) || temp == null);
//     else if (Number(temp) == 0){
//         alert(sum);
//         break;
//     }
//     else{
//         sum += Number(temp);
//         alert(sum);
//     }
// }


// // 5
// var message = prompt("Enter Anything You Like!");
// for(var header = 1; header < 7; header++){
//     document.write("<h"+header+">" +message+ "</h"+header+">");
// }


// //6
// var userName;
// var birthYear;
// var age;
// do{
//     userName = prompt("Enter your Name: ");
// }while(isFinite(userName) || userName == null);

// do{
//     birthYear = prompt("Enter your Birth Year:");
// }while(isNaN(birthYear) || birthYear == null || Number(birthYear) >= 2010);

// age = 2023 - Number(birthYear);

// document.write("<div><b><u>Name:</u></b> "+userName+"</div>");
// document.write("<div><b><u>Birth Year:</u></b> "+birthYear+"</div>");
// document.write("<div><b><u>Age:</u></b> "+age+"</div>");