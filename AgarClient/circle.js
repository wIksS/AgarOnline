class Circle {
    constructor(position, radius, color) {
        this.position = position;
        this.radius = radius;
        this.color = color;
    }

    draw(canvas) {
        let self = this;
        this.circle = new fabric.Circle({
            left: self.position.left,
            top: self.position.top,
            fill: self.color,
            radius: self.radius
        });

        canvas.add(this.circle);
    }

    move(canvas, newPosition) {
        this.circle.set({ left: newPosition.left, top: newPosition.top });
    }

    changeRadius(radius) {
        this.circle.animate('radius', radius, {
            onChange: canvas.renderAll.bind(canvas)
        });
    }

    remove(canvas) {
        canvas.remove(this.circle);
    }
}