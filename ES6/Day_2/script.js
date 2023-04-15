
async function getUsers() {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await res.json();
    return users;
}

function showUsers() {
    let data;
    getUsers().then((values) => {
        data = values;
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let btn = document.createElement("button");
            btn.innerHTML = `<input type="button" value="${data[i].name}" class="btn" onclick="getComments(${i+1})">`;
            document.getElementById("users").appendChild(btn);
        }
    });
}

async function getUser(id) {
    let result = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    let user = await result.json();
    return user;
}

function getComments(id) {
    document.getElementById("comments").innerHTML = "<ul></ul>";
    getUser(id).then((values) => {
        values.forEach((element) => {
            showComment(element.title);
        });
    });
}

function showComment(comment) {
    
    let com = document.createElement("li");
    com.innerText = comment;
    document.getElementById("comments").appendChild(com);
}

showUsers();

