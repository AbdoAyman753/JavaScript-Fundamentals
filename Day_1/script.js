//1
var y;
console.log(y); // undefined

//2
console.log(y); // ReferenceError: y is not defined

//3
var x=10;
var y = 20;
console.log(y-x*2); // 0

//4
var y;
console.log(typeof y); // undefined

//5
var x ="1";
var y = 2;
console.log(x+y); // 12

//6
var x = 1;
var y = true;
console.log(x+y); // 2

//7
var x = 12;
var y = "6";
console.log(x/y); // 2

//8
console.log(15 + 3 + "number"); // 18number
console.log("number" + 15 + 3); // number153

//9
var x = false;
var y = !!x;
console.log(y); // false

//10
var x = menna;
console.log(typeof x =="string"); // ReferenceError: menna is not defined


//11
var x = false;
console.log(typeof x == 0); // false

//12
var x = 12;
var y = 'abdo125'
console.log(x.toString()); // '12'
console.log(parseInt(y)); // '125abdo' -> 125 , '125 abdo' -> 125 , 'abdo125' -> NaN

//13
console.log(isNaN(12));

//14
var x = 'hola';
console.log(typeof(x) === "string");
