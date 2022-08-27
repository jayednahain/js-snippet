class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}
console.log(Rectangle.constructor());
Rectangle.prototype.area=function(){

    return console.log(this);
    
}
console.log(Rectangle.area);