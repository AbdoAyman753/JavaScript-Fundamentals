// function isPalindrome(){
//     var reverseText = "";
//     var text;
//     do{
//         text = prompt("Enter Your Word:");
//     }while(isFinite(text) || text == null)

//     if(confirm("Case Insensitive?")){
//         text = text.toLowerCase();
//     }
    
//     for(var i = text.length - 1; i > -1; i--){
//         reverseText += text.charAt(i);
//     }
//     alert(text == reverseText ? "Palindrome":"Not Palindrome");
// }
// isPalindrome();

/********************************************************************************/

function countE(){
    var text;
    var count = 0;
    do{
        text = prompt("Enter Your Text:");
    }while(isFinite(text) || text == null)

    text = text.toLowerCase();

    // flee
    for(var i = 0; i < text.length; i++){
        if(text.indexOf('e', i) > -1){  
            i = text.indexOf('e',i);
            count++;
        }
        else
            break;
    }
    
    alert(count);
}
countE();

/********************************************************************************/

// function getUserInfo(){
//     var userName;
//     var nameRegEx = new RegExp(/[a-zA-Z]+/);
//     var phoneNo;
//     var phoneNoRegEx = new RegExp(/([0][1-9]){8}/);
//     var mobile;
//     var mobileRegEx = new RegExp(/([0][1])([0-2]{1})([0-9]{8})/);
//     var email;
//     var emailRegEx = new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/);
//     var color;
//     do{
//         userName = prompt("Enter Your Name: ");
//     }
//     while(!nameRegEx.test(userName) || userName == null);
    
//     do{
//         phoneNo = prompt("Enter Your LandLine: ");
//     }
//     while(!phoneNoRegEx.test(phoneNo));

//     do{
//         mobile = prompt("Enter Your mobile: ");
//     }
//     while(!mobileRegEx.test(mobile));

//     do{
//         email = prompt("Enter your Email: ");
//     }
//     while(!emailRegEx.test(email))

//     do{
//         color = prompt("Enter Your fav color: ");
//     }
//     while(color != "red" && color != "green" && color != "blue");

//     document.write("<div style = \"color:"+color+";\">Name: "+userName+"</div>");
//     document.write("<div style = \"color:"+color+";\">phone: "+phoneNo+"</div>");
//     document.write("<div style = \"color:"+color+";\">Mobile: "+mobile+"</div>");
//     document.write("<div style = \"color:"+color+";\">Email: "+email+"</div>");

// }

// getUserInfo();