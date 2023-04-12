var itr;
var dataArr = new Array();

// Disable Form default behaviour.
for(var i = 0 ; i < 2; i++){
    var form = document.getElementsByTagName("form")[i];
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);
}

// Get Number of books to Enter.


function enterBooks(){
    element = document.getElementById("books");
    if(element.value < 1){
        document.getElementById("booksFooter").innerText = "Must equal 1 at least.";
    }
    else{
        
        itr = document.getElementById("books").value;
        document.getElementById("landing").style.display="none";
        document.getElementById("Info").style.display ="block"; 
    }

}

// Get Each Book Information at a time.
function getBookInfo(){
    var bool = 1;
    var title = document.getElementById("title").value;
    if(title == null || title ==""){
        document.getElementById("titleFooter").innerText="Book Title is Required";
        bool = 0;
    }
    var price = document.getElementById("price").value;
    if(price == null || price ==""){
        document.getElementById("priceFooter").innerText="Book price is Required";
        bool = 0;
    }
    var author = document.getElementById("author").value;
    if(author == null || author ==""){
        document.getElementById("authorFooter").innerText="Author Name is Required";
        bool = 0;
    }
    var email = document.getElementById("email").value;
    if(email == null || email ==""){
        document.getElementById("emailFooter").innerText="Author Email is Required";
        bool = 0;
    }
    if(bool){
        dataArr.push(new Book(title, price, author, email));
        document.getElementById("title").value = "";
        document.getElementById("price").value = "";
        document.getElementById("author").value = "";
        document.getElementById("email").value = "";
        itr--;
    }
    if(itr < 1){
        showTable();
    }     
    
}

// Add Data To Table and view it
function showTable(){
    var tbody = document.querySelector("tbody");
    var editBtn = document.createElement("button");
    
    for(var i = 0; i < dataArr.length; i++){
        editBtn.innerHTML = "<input type=\"button\" value=\"edit\" onclick=\"editData("+i+")\">";
        tbody.innerHTML += "<tr><td>"+dataArr[i].title+"</td><td>"+dataArr[i].price+
            "</td><td>"+dataArr[i].author.name+"</td><td>"+dataArr[i].author.email+"</td><td>"+
            editBtn.innerHTML+"</td></tr>";
    }
    document.getElementById("Info").style.display ="none"; 
    document.getElementById("Table").style.display="flex";
}

function editData(row_id){
    var row = document.querySelectorAll("tr")[row_id + 1];
    row.innerHTML = "<tr>"+
        "<td><input id=\""+0+"\" type=\"text\" placeholder=\"Book Title\"></td>"+
        "<td><input id=\""+1+"\" type=\"text\" placeholder=\"Book price\"></td>"+
        "<td><input id=\""+2+"\" type=\"text\" placeholder=\"Author Name\"></td>"+
        "<td><input id=\""+3+"\" type=\"text\" placeholder=\"Author Email\"></td>"+
        "<td><input type=\"button\" value=\"save\" onclick=\"saveInfo("+row_id+")\"></td>"+
        "<td><input type=\"button\" value=\"cancel\" onclick=\"cancel("+row_id+")\"></td>"+
        "</tr>";
}

function saveInfo(row_id){
    var title = document.getElementById("0").value;
    var price = document.getElementById("1").value;
    var name = document.getElementById("2").value;
    var email = document.getElementById("3").value;
    dataArr[row_id].title = title;
    dataArr[row_id].price = price;
    dataArr[row_id].author.name = name;
    dataArr[row_id].author.email = email;

    cancel(row_id);
}

function cancel(row_id){
    var editBtn = document.createElement("button");
    editBtn.innerHTML = "<input type=\"button\" value=\"edit\" onclick=\"editData("+row_id+")\">";

    var row = document.querySelectorAll("tr")[row_id + 1];
    row.innerHTML = "<tr><td>"+dataArr[row_id].title+"</td><td>"+dataArr[row_id].price+
    "</td><td>"+dataArr[row_id].author.name+"</td><td>"+dataArr[row_id].author.email+"</td><td>"+
    editBtn.innerHTML+"</td></tr>";
}

// Book constructor function
function Book(title, price, aName, aEmail){
    if(title == null || price == null)
        throw("Book Properties can't be empty!");
    this.title = title;
    this.price = price;
    this.author = new Author(aName, aEmail);
}

// Author constructor function
function Author(name, email){
    if(name == null || email == null)
        throw("Author Properties can't be empty!");
    this.name = name;
    this.email = email;
}