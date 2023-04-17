var handler = {
    get: function (target, prop) {
        if (!(prop in target)) {
            throw (`this prop name ${prop} does not exist `)
        }
        return target[prop];
    },
    set: function (target, prop, value) {
        if (!(prop in target)) {
            throw (`this prop name ${prop} doesnot exist `)
        }
        if (prop === "name") {
            if(!isFinite(value) && value.length == 7){
                target[prop] = value;
                return;
            }else{
                throw ("Name must be string that is 7 letters long.");
            } 
        }
        if(prop === "address"){
            if(!isFinite(value)){
                target[prop] = value;
            }else{
                throw ("Address must be string.");
            } 
        }
        if (prop === "age"){
            if(isFinite(value) && value >= 25 && value <= 60){
                target[prop] = value;
            }else{
                throw ("Age must be number between 25 and 60.");
            } 
        }
    }
}
var obj={name:"Ali",
        address:"10th of ramadan",
        age:24
    }
var prox = new Proxy(obj,handler);
console.log(prox);
console.log(prox.address);
console.log(prox.age);
console.log(prox.name);

prox.name="mohamad";
