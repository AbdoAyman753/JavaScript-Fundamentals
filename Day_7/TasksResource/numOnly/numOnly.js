var lastValue = "";
//var numOnly = new RegExp(/[0-9]*/)
function checkNum(x){
    
    if(isNaN(x.value)){
        console.log("in if");
        x.value = lastValue;
    }else{
        lastValue = x.value;
        console.log("in else");
    }
}