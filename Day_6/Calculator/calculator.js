function EnterNumber(x){
    document.getElementById("Answer").setAttribute("value",
        document.getElementById("Answer").getAttribute("value") + x);
}

function EnterOperator(x){
    document.getElementById("Answer").setAttribute("value",
    document.getElementById("Answer").getAttribute("value") + x);
}

function EnterClear(){
    document.getElementById("Answer").setAttribute("value","");
}

function EnterEqual(){
    document.getElementById("Answer").setAttribute("value",
        eval(document.getElementById("Answer").getAttribute("value")));
}