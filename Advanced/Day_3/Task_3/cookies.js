///cookies///
function setCookie(key, value, expiration) {
    if (!key) {
        throw (`Can't set Null Cookie`);
    }
    if (value == null) {
        throw (`Can't set Null Cookie Value`);
    }
    var ExpirtationDate = new Date(expiration); //"4/10/2023"
    document.cookie = `${key}=${value}; expires=${ExpirtationDate.toUTCString()};`;
    // document.cookie = "username=menna;expires="+ExpirtationDate+";path=/";
    // document.cookie = "username=menna;expires="+new Date("4/18/2023")
}

function getCookie(cookieKey) {
    if (!cookieKey) {
        throw (`Can't retrive Null Cookie`);
    }
    var res = "Cookie Not Found!!!";
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var key = cookies[i].split("=")[0];
        if (key.trim() === cookieKey) {
            res = cookies[i].split("=")[1];
        }
    }
    return res;
}

function deleteCookie(key) {
    var ExpirtationDate = new Date("1/1/2000");
    document.cookie = `${key}=${getCookie(key)};expires=${ExpirtationDate}`;
}

function allCookiesList(){
    return document.cookie.split(";");
}

function hasCookie(key){
    if(getCookie(key) === 'undefined')
        return false;
    return true;
}
// setCookie("name","Abdo","4/18/2023");
// console.log(getCookie("name"));



function saveInfo(){
    // window.location.replace("./Profile.html")
    var exDate = "4/19/2023";
    setCookie("name", document.getElementById("name").value, exDate);
    setCookie("age", document.getElementById("age").value, exDate);
    // setCookie("gender", document.getElementsByName("gender").value, exDate);
    setCookie("favColor", document.getElementById("color").value, exDate);
    setCookie("log",0,exDate);
    window.location.replace("./Profile.html")
    // window.open("./Profile.html","_self");
}