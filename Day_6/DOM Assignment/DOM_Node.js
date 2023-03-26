//Align first pic right
document.getElementById("header").style.display="flex";
document.getElementById("header").style.justifyContent="end";


//center dots
document.getElementById("navigation").style.display="flex";
document.getElementById("navigation").style.justifyContent="center";
//switch to circles
document.getElementById("nav").type="circle";


//creating new picture div and appending it to body
oldHeader = document.getElementById("header");
var newHeader = oldHeader.cloneNode(true);
newHeader.style.justifyContent="start";
document.body.append(newHeader);
