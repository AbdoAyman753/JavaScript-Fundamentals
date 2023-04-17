function* fibGenByIndex(index){
    let seq=[0,1,1];//2,3,
    for(let i = 0; i < index; i++){
        if(i > 2){
            seq[i] = seq[i-1] + seq[i-2];
        }
        yield seq[i];
    }
}

function* fibGenByValue(maxValue){
    let seq=[0,1,1];
    for(let i = 0; seq[i] < maxValue ; i++,i>2?seq[i]=seq[i-1] + seq[i-2]:0){
        // if(i > 2){
        //     seq[i] = seq[i-1] + seq[i-2];
        // }
        yield seq[i];
    }
}


var index = 10;
var it = fibGenByIndex(index);
for(var i = it.next(); !i.done; i=it.next()){
    console.log(i);
}

// var max = 50;
// var it = fibGenByValue(max);
// for(var i = it.next(); i.value< max; i=it.next()){
//     console.log(i);
// }