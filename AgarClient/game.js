class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.players = {};
        this.shapes = {};
    }
    
    addShape(id, position, radius, color) {
        let circle = new Circle(position, radius, color);
        this.shapes[id] = circle;
        circle.draw(this.canvas);
    }

    removeShape(id) {
        if (this.shapes[id]) {
            this.shapes[id].remove(this.canvas);
            this.shapes[id] = undefined;
        }
    }

    addPlayer(name, id, position, radius, color) {
        return this.players[id] = new Player(this.canvas,name, id, position, radius, color);
    }

    addPlayerObject(player) {
        return this.players[player.id] = new Player(this.canvas, player.name, player.id, player.position,player.radius, player.color);
    }

    getPlayer(id) {
        return this.players[id];
    }

    redraw() {
        this.canvas.renderAll();
    }

    removePlayer(id) {
        this.players[id].remove();
        this.players[id] = undefined;
    }
}
