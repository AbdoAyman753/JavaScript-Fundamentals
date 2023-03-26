window.addEventListener('keydown',keypressed);

function keypressed(event){
    alert("Key ASCII: " + event.keyCode 
    + ", Ctrl Pressed: " + event.ctrlKey
    + ", Shift Pressed: " + event.shiftKey
    + ", Alt Pressed: " + event.altKey);
    console.log(event);
}