function getUserInfo(id){
    var req = new XMLHttpRequest();
    req.open("GET",`https://reqres.in/api/users/${id}`);
    req.send();

    req.onload = function(){
        var info = JSON.parse(req.response);
        console.log(info);
        //reset id field
        document.getElementById('ID').value = "";
        //set Avatar
        document.getElementById('pic').setAttribute('src',info.data.avatar);
        //set First Name
        document.getElementById('fName').innerText = info.data.first_name;
        //set Last Name
        document.getElementById('lName').innerText = info.data.last_name;

    }
}