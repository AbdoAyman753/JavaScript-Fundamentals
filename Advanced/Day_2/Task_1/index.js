// Rectangle object
function Rectangle(w, h) {
    Rectangle.newInstance();
    if (!w)
        this.width = 0;
    else
        this.width = w;
    if (!h)
        this.height = 0;
    else
        this.height = h;

    Rectangle.prototype.area = function () {
        return this.width * this.height;
    }
    Rectangle.prototype.perimeter = function () {
        return 2 * (this.height + this.width);
    }
    Rectangle.prototype.toString = function () {
        return "Width: " + this.width + ", height: " + this.height +
            ", Area: " + this.area() + ", Perimeter: " + this.perimeter();
    }
}

(function(){
    var InstancesCounter=0;

    Rectangle.getInstancesCount = function(){
        return InstancesCounter;
    }

    Rectangle.newInstance= function(){
        ++InstancesCounter;
    }
})();

var rect = new Rectangle(2, 3);
var rect2 = new Rectangle(15, 6);


////////////////////////////////////////////////////////////////////////////////////////////
