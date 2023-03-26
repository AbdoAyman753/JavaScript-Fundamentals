// function test(e){
//     console.log(e);
//     alert("btn clicked");
// }

// var btn = document.querySelector("button");

// //event as property
// // btn.onclick = test//callback function

// //event listener
// btn.addEventListener("click",test);

 var btns = document.querySelectorAll("button");
// // console.log(btns);
// for (var i = 0; i < btns.length; i++) {
//     console.log(btns[i]);
//     (function () {
//         var x = i;  //x1= 0
//         var y = 5;
//         //x2 = 1
//         //x3=3
//         btns[i].addEventListener("click", function () {
//             console.log(i);
//             alert(btns[x].innerText);
           
//         });

//     })();
// }

// for(var i=0;i<btns.length;i++){
//     btns[i].addEventListener("click",function(e){
//         //alert(e.target.innerText);
//         alert(this.innerText);

//     });
//  }
// var div = document.querySelector("div");
// div.addEventListener("click",function(e){
//     if(e.target!==this){

//         alert(e.target.innerText);
//     }

// })
// function test(x){
//     alert(x);

// }
//closure///



// btn[0].addEventListener("click",function(){
//     alert(btn[0].innerText);
// })
////////////event bubbling ///////////////////////////////////
//event chain
// var divs = document.getElementsByTagName("div");
// divs[0].addEventListener("click",function(e){
//     // e.stopPropagation();
//     if(this===e.target){

//         alert("i am red");
//     }
// })
// divs[1].addEventListener("click",function(e){
//     // e.stopPropagation();
//     if(this ===e.target){

//         alert("i am green");
//     }
// })
// divs[2].addEventListener("click",function(e){
//     // e.stopPropagation();
//     alert("i am yellow");
// })

/////////////////////////
// window.addEventListener("contextmenu",function(e){
//     e.preventDefault();

// })

//////////////////form///////////////////////
// var inp = document.getElementsByTagName("input")[0];
// // alert(inp.value);
// var span = document.getElementById("myspan");
// var btn = document.getElementsByTagName("button")[0];
// btn.addEventListener("click",function(){
//     if(inp.value===""){
//         span.textContent = "this filed is requreid"

//     }
//     else if(isFinite(inp.value)){
//         span.textContent = "you sholud enter charachters";


//     }
//     else{
//         // span.textContent = "";
//         //document.getElementById("myform").style.display = "none";
//         document.getElementById("myform").remove();
//         document.getElementById("mydiv").textContent = "hello " + inp.value;
//         inp.value = "";
//     }
// })


// var subBtn = document.querySelector("input[type='submit']");
//  var inp = document.getElementsByTagName("input")[0];
//  var span = document.getElementById("myspan");
//  var myform  = document.getElementsByTagName("form")[0];

// // console.log(subBtn);
// myform.addEventListener("submit",function(e){
//     if(inp.value===""){
//         e.preventDefault();
//         span.textContent = "this filed is requreid"

//     }
//     else if(isFinite(inp.value)){
//         e.preventDefault();
//         span.textContent = "you sholud enter charachters";
//         inp.value = "";


//     }
   
// })

// function validation(x){
//     if(isFinite(x.value))
//     {
//        x.classList.add("notValid");
//     }
//     else{
//         x.classList.remove("notValid");
//     }
  

// }

//////////////////////timing events//////////////
// window.setTimeout();
// var x;
// setTimeout(function(){
//     alert("hello")
//     x = 10;
// },2000);
// console.log(x);

// var clearInt = setInterval(function(){
//     console.log("hello");

// },2000);
// function test(){

//     clearInterval(clearInt);
// }

/////////////BOM///////////////
var child;
function openWind(){
   child =  window.open("page2.html");
   console.log(child);

}
function closeWind(){
        child.close();
    }

function printWind(){
// window.print();
// history.back();
history.go(2);

}

// console.log(window.navigator)//browser data
// console.log(window.history)//browser data
// console.log(window.location);