var picArr = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
var currPicIndex=0;
var interval;

function prevPic(){
    currPicIndex--;
    if(currPicIndex < 0)
        currPicIndex += picArr.length;
    document.getElementsByTagName("img")[0].src = picArr[currPicIndex];
}

function nextPic(){
    currPicIndex++;
    if(currPicIndex > picArr.length - 1)
        currPicIndex -= picArr.length;
    document.getElementsByTagName("img")[0].src = picArr[currPicIndex];
}

function slideShow(){
    interval = setInterval(nextPic, 2000);
}
function stopSlide(){
    clearInterval(interval);
}
