var emailRegEx = new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
var userName = document.getElementById("user");
var age = document.getElementById("age");
var email = document.getElementById("email");
// Table generator
function enterInfo(){
    ///create ele
    // <!-- <tr>
    // <td>menna</td>
    // <td>30</td>
    // </tr>

    var parent = document.querySelector("tbody");
    console.log(parent);

    parent.innerHTML += "<tr><td>"+userName.value+"</td><td>"
    +age.value+"</td><td>"+email.value+"</td></tr>";
   
    
}
function resetAll(){
    userName.value = "";
    age.value = "";
    email.value = "";
    document.getElementById("userSpan").innerText = "";
    document.getElementById("ageSpan").innerText = "";
    document.getElementById("emailSpan").innerText = "";
    document.querySelector("tbody").innerHTML = "";
}
function checkName(){
    if(userName.value.length == 0){
        document.getElementById("userSpan").innerText = "This field is required!";
    }
    else if(isFinite(userName.value)){
        document.getElementById("userSpan").innerText = "Not a valid Name!";
    }
    else{
        document.getElementById("userSpan").innerText = "";
        checkAge();
    }
}
function checkAge(){
    if(age.value.length == 0){
        document.getElementById("ageSpan").innerText = "This field is required";
    }
    else if(isNaN(age.value) || age.value == 0){
        document.getElementById("ageSpan").innerText = "Not a valid Age!";
    }
    else{
        document.getElementById("ageSpan").innerText = "";
        checkEmail();
    }
}
function checkEmail(){
    if(email.value.length == 0){
        document.getElementById("emailSpan").innerText = "This field is required!";
    }
    else if(!emailRegEx.test(email.value)){
        document.getElementById("emailSpan").innerText = "Not a valid Email!";
    }
    else{
        document.getElementById("emailSpan").innerText = "";
        enterInfo();
    }

}