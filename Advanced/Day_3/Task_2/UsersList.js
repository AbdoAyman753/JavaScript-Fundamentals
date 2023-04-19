var usersInfo;
function addToList(info) {
    var list = document.getElementById('list');
    for (var i = 0; i < info.data.length; i++) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = info.data[i].first_name + " "+ info.data[i].last_name;
        list.appendChild(opt);
    }
}
function getUsersInfo() {
    var req = new XMLHttpRequest();
    req.open("GET", `https://reqres.in/api/users`);
    req.send();

    req.onload = function () {
        usersInfo = JSON.parse(req.response);
        console.log(usersInfo);
        addToList(usersInfo);
    }
}

function selectUser(opt){
    //set Avatar
    document.getElementById('pic').setAttribute('src',usersInfo.data[opt].avatar);
    //set First Name
    document.getElementById('id').innerText = usersInfo.data[opt].id;
    //set Last Name
    document.getElementById('email').innerText = usersInfo.data[opt].email;
}
getUsersInfo();