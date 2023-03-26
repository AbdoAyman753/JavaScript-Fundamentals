var switchInterval;
var currMar = 0;

function switching(){
    document.getElementsByClassName("marbel")[currMar++].setAttribute("src","marble1.jpg");
    if(currMar > 4){
        currMar = 0;
    }  
    document.getElementsByClassName("marbel")[currMar].setAttribute("src","marble2.jpg");
}

function holdSwitch(){
    clearInterval(switchInterval);
}

function continueSwitch(){
    switchInterval = setInterval(switching,500);
}

continueSwitch();