var x = "salary";
// var x = Symbol("x");
var obj = {
    name: "menna",
    age: 25,
    [x]: 2000
}

function objectItertator(object) {
    var entries = Object.entries(object);
    var index = -1;
    var iterator = {
        next: function () {
            index = index + 1;
            if (index < entries.length) {
                return {
                    value: entries[index],
                    done: false
                }
            }
            else {
                return {
                    value: undefined,
                    done: true
                }
            }
        }
    }

    return iterator;
}

var it = objectItertator(obj);
for(let i = it.next(); !i.done; i=it.next()){
    console.log(i);
}
console.log(it.next());