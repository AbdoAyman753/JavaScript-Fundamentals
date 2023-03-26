// Show Date
function showDate(){
    var date = new Date();
    var div = document.querySelectorAll("div")[0];
    div.innerHTML = "<div style=\"color:red;\"><h2>"+ date.toLocaleDateString() +"</h2></div>"; 
}


/************************************************************************************************/


// Calcuate Eq
function calVal(){
    var mathEq = new RegExp(/([0-9]+)([+|\-|*|\/])*/);
    do{
        var value = prompt("Enter valid Expression"); 
    }while(!mathEq.test(value))
    
    document.getElementById("calVal").innerText = eval(value);
}


/************************************************************************************************/


// Table generator
function enterInfo(){
    var num ;
    var userNames = [];
    var ages = [];
    
    do{
        num = parseInt(prompt("enter number of users"));
    }while(isNaN(num) || !num)
    
    for(var i=0;i<num;i++){
        do{
            var userName = prompt("enter your name");
        }while(isFinite(userName) || userName.length < 3 || userName.length > 10 ||userName == null)
        do{
            var age = parseInt(prompt("enter your age"));
        }while(isNaN(age) || age > 60|| age < 10 || !age)
        
        userNames.push(userName);
        ages.push(age);
    }

    console.log(userNames);
    console.log(ages);


    ///create ele
    // <!-- <tr>
    // <td>menna</td>
    // <td>30</td>
    // </tr>

    var parent = document.querySelector("tbody");
    console.log(parent);
    for(var i=0;i<userNames.length;i++){
        parent.innerHTML += "<tr><td>"+userNames[i]+"</td><td>"+ages[i]+"</td></tr>"
    }
    ///modify style
    var table = document.getElementsByTagName("table")[0];
    table.style.display = "table";
}
//enterInfo();


/************************************************************************************************/


// Div copy 
//var colorArr = ["#F0F8FF","#FAEBD7","#00FFFF","#8A2BE2","#0000FF","#D2691E","#DC143C"];

function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function randCopy(x){
    var div = document.createElement("div");
    div=x.cloneNode(true);
    var randColor = "rgb("+getRandInt(0,255)+","+getRandInt(0,255)+","+getRandInt(0,255)+")";
    div.style.backgroundColor=randColor; //colorArr[getRandInt(0,colorArr.length)];
    //console.log(randColor);
    //console.log(div);
    document.getElementById("wrapper").append(div);
}

