class Player {
    constructor(canvas, name, id, top, left, color) {
        this.canvas = canvas;
        this.id = id;
        this.name = name;
        this.circle = new Circle(top, left, 50, color);
        this.circle.draw(canvas);
    }
    
    move(newLeft, newTop) {
        this.circle.move(this.canvas, newLeft, newTop);
    }
    
    remove() {
        this.circle.remove(this.canvas);
    }
}
