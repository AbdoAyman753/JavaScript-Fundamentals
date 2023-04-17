// Shape --> parent class
class Shape{
    constructor(){
        if(this.constructor == Shape)
            throw("Can't create instance of abstract class.");
    }
    area(){}
    perimeter(){}
}

////////////////////////////////////////////////////////////////////////////////////////////


// Rectangle class --> inherit from shape
export class Rectangle extends Shape{
    static #instances = 0;
    constructor(w, h) {
        // if (Rectangle.getInstancesCount() >= 1) {
        //     throw ("Can't create more than 1 Rectangle");
        // }
        super();
        // Rectangle.newInstance();
        if (!w)
            this.width = 0;

        else
            this.width = w;
        if (!h)
            this.height = 0;

        else
            this.height = h;
    }
    // static newInstance(){
    //     Rectangle.#instances++;
    // }
    // static get getInstancesCount(){
    //     return Rectangle.#instances;
    // }
    get area (){
        return this.width * this.height;
    }
    get perimeter (){
        return 2 * (this.height + this.width);
    }
    toString(){
        return "Width: " + this.width + ", height: " + this.height +
                ", Area: " + this.area + ", Perimeter: " + this.perimeter;
    }
}



////////////////////////////////////////////////////////////////////////////////////////////


// Square Class --> inherit from Rectangle
export class Square extends Shape{
    static #instances=0;
    constructor(l) {
        // if (Square.getInstancesCount() >= 1) {
        //     throw ("Can't create more than 1 Square");
        // }
        super();
        // Square.newInstance();
        if (!l)
            this.length = 0;

        else
            this.length = l;
    }

    // static newInstance(){
    //     Square.#instances++;
    // }

    // static get getInstancesCount(){
    //     return Square.#instances;
    // }

    get area(){
        return this.length * this.length;
    }

    get perimeter(){
        return 4 * (this.length);
    }

    toString(){
        return "Length: " + this.length +
                ", Area: " + this.area + ", Perimeter: " + this.perimeter;
    }
}

export class Circle extends Shape{
    static #instances=0;
    constructor(r) {
        // if (Square.getInstancesCount() >= 1) {
        //     throw ("Can't create more than 1 Square");
        // }
        super();
        // Square.newInstance();
        if (!r)
            this.radius = 0;

        else
            this.radius = r;
    }

    // static newInstance(){
    //     Square.#instances++;
    // }

    // static get getInstancesCount(){
    //     return Square.#instances;
    // }

    get area(){
        return Math.PI * (this.radius * this.radius);
    }

    get perimeter(){
        return 2 * Math.PI * this.radius;
    }

    toString(){
        return "Radius: " + this.radius +
                ", Area: " + this.area + ", Perimeter: " + this.perimeter;
    }
}
// var sh = new Shape();

// var rect = new Rectangle(2, 3);
// var rect2 = new Rectangle(15, 6);

// var sq = new Square(4);


