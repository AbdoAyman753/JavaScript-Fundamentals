// Rectangle object
function RectAngle(w, h) {
    if (!w)
        this.width = 0;
    else
        this.width = w;
    if (!h)
        this.height = 0;
    else
        this.height = h;

    this.area = function () {
        return this.width * this.height;
    }
    this.perimeter = function () {
        return 2 * (this.height + this.width);
    }
    this.displayInfo = function () {
        return "Width: " + this.width + ", height: " + this.height +
            ", Area: " + this.area() + ", Perimeter: " + this.perimeter();
    }
}

var rect = new RectAngle(2, 3);
var rect2 = new RectAngle(15, 6);


////////////////////////////////////////////////////////////////////////////////////////////


//obj = {id:”SD-10”,location:”SV”, addr:”123 st.”, getSetGen: 
// function(){/*should be implemented*/}} 
// using of getSetGen() will generate the following getId(), setId(),
// getLocation(), setLocation(), getAddr(), setAddr(). 
// If you created the following object: 
// var user = { name:”Ali”,age:10} 

var department = {
    id: "SD-10", location: "SV", addr: "123 st.",

    getSetGen: function () {
        for (var key in this) {
            keyVal = Object.getOwnPropertyDescriptor(this, key).value;
            if (typeof keyVal === 'function')
                continue;

            defineMethods(this, key);


            //id --> getId
            function defineMethods(object, key) {
                var myKey = key;
                var keyMethodName = "get" + myKey.charAt(0).toUpperCase() + myKey.slice(1);
                Object.defineProperty(object, keyMethodName, {
                    value: function () {
                        // return Object.getOwnPropertyDescriptor(this,myKey).value;
                        return this[myKey];
                    }
                })
                keyMethodName = "set" + myKey.charAt(0).toUpperCase() + myKey.slice(1);
                Object.defineProperty(object, keyMethodName, {
                    value: function (inputVal) {
                        this[myKey] = inputVal;
                    }
                })
                // object.storedVal = Object.getOwnPropertyDescriptor(object, myKey).value;
            }



            // keyMethodName = "set"+key.charAt(0).toUpperCase()+key.slice(1);
            // Object.defineProperty(this, keyMethodName, {
            //     value : function(inputValue){
            //         ;
            //     }                
            // })
        }
    }
};

var user = { name: "Ali", age: 10 }
department.getSetGen.call(user);
