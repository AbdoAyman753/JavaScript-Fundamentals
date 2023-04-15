let arr = [1994,2000];
//why if i put it like : [arr[1],arr[0]]=arr; -> it gives [1994,1994] ??
[arr[1],arr[0]]=arr;
ar1[1] = arr[0];
ar1[0] = arr[1];
// let x = 10;
// let y =20;
// [x,y]=[y,x];
[arr[1],arr[0]]=[...arr];

/////////////////////////////////////////////////////////////////////////////////////

function myMax(...array){
    return Math.min(...array),Math.max(...array);
}

function myMin(array){
    return Math.min(...array);
}

arr = [-1,5,20,-19,2,1];
console.log(myMax(...arr));
console.log(myMin(arr));