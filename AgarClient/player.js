class Player {
    constructor(canvas, name, id, position, radius, color) {
        this.canvas = canvas;
        this.id = id;
        this.name = name;
        this.circle = new Circle(position, radius, color);
        this.circle.draw(canvas);
    }
    
    move(newPosition) {
        this.circle.move(this.canvas, newPosition);
    }

    changeRadius(radius) {
        this.circle.changeRadius(radius);
    }
    
    remove() {
        this.circle.remove(this.canvas);
    }
}
