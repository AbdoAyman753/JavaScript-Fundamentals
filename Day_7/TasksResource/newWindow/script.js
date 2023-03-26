var childWindow;
function openWindow(){
    childWindow = window.open("child.html");
    console.log("after");
    setTimeout(closeWindow,5000);
}
function closeWindow(){
    childWindow.close();
}