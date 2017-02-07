class Circle {
    constructor(top, left, radius, color) {
        this.top = top;
        this.left = left;
        this.radius = radius;
        this.color = color;
    }

    draw(canvas) {
        this.circle = new fabric.Circle({
            left: this.left,
            top: this.top,
            fill: this.color,
            radius: this.radius
        });

        canvas.add(this.circle);
    }

    move(canvas, newLeft, newTop) {
        this.circle.set({ left: newLeft, top: newTop });
    }

    remove(canvas) {
        canvas.remove(this.circle);
    }
}