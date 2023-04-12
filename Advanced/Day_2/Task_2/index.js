// Shape --> parent class
function Shape(){
    if(this.constructor == Shape)
        throw("Can't create instance of abstract class.");

    // Shape.prototype.area = function(){};
    // Shape.prototype.perimeter = function(){};
}


////////////////////////////////////////////////////////////////////////////////////////////


// Rectangle class --> inherit from shape
function Rectangle(w, h) {
    if(Rectangle.getInstancesCount() >= 1){
        throw("Can't create more than 1 Rectangle");
    }
    if(this.constructor == Rectangle){
        Rectangle.newInstance();
    }
    
    Shape.call(this);
    if (!w)
        this.width = 0;
    else
        this.width = w;
    if (!h)
        this.height = 0;
    else
        this.height = h;

    Rectangle.prototype.area = function (){
        return this.width * this.height;
    }
    
    Rectangle.prototype.perimeter = function () {
        return 2 * (this.height + this.width);
    }
    Rectangle.prototype.toString = function () {
        return "Width: " + this.width + ", height: " + this.height +
            ", Area: " + this.prototype.area() + ", Perimeter: " + this.prototype.perimeter();
    }
    
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;



(function(){
    var InstancesCounter=0;

    Rectangle.getInstancesCount = function(){
        return InstancesCounter;
    }

    Rectangle.newInstance= function(){
        ++InstancesCounter;
    }
})();


////////////////////////////////////////////////////////////////////////////////////////////


// Square Class --> inherit from Rectangle
function Square(l){
    if(Square.getInstancesCount() >= 1){
        throw("Can't create more than 1 Square");
    }
    Square.newInstance();
    Rectangle.call(this,l,l);
    if (!l)
        this.length = 0;
    else
        this.length = l;

    
    Square.prototype.area = function () {
        return this.length * this.length;
    }
    Square.prototype.perimeter = function () {
        return 4 * (this.length);
    }
    Square.prototype.toString = function () {
        return "Length: " + this.length +
            ", Area: " + this.prototype.area() + ", Perimeter: " + this.prototype.perimeter();
    }
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
(function(){
    var InstancesCounter=0;

    Square.getInstancesCount = function(){
        return InstancesCounter;
    }

    Square.newInstance= function(){
        ++InstancesCounter;
    }
})();

// var sh = new Shape();

// var rect = new Rectangle(2, 3);
// var rect2 = new Rectangle(15, 6);

var sq = new Square(4);


