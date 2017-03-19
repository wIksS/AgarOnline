class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.players = {};
        this.shapes = {};
        //this.canvas.getContext().scale(1.2, 1.2);
    }

    addShape(id, position, radius, color) {
        let circle = new Circle(position, radius, color);
        this.shapes[id] = circle;
        circle.draw(this.canvas);
    }

    updateShape(id,position)
    {
        let circle = this.shapes[id];
        if (circle) {
            circle.move(this.canvas, position);
        }
    }

    removeShape(id) {
        if (this.shapes[id]) {
            this.shapes[id].remove(this.canvas);
            this.shapes[id] = undefined;
        }
    }

    addPlayer(name, id, position, radius, color) {
        return this.players[id] = new Player(this.canvas, name, id, position, radius, color);
    }

    addPlayerObject(player, isCurrentPlayer) {
        let newPlayer = new Player(this.canvas, player.name, player.id, player.position, player.radius, player.color);
        if (isCurrentPlayer) {
            this.currentPlayer = newPlayer;
        }
        return this.players[player.id] = newPlayer;
    }

    getPlayer(id) {
        return this.players[id];
    }

    redraw() {
        //this.canvas.zoomToPoint({
        //    x: this.oldPointX,
        //    y: this.oldPointY,
        //}, 1);
        this.canvas.renderAll();
        if (this.currentPlayer && this.currentPlayer.circle) {
            let scrollTop = this.currentPlayer.circle.circle.top + (this.currentPlayer.circle.radius) - window.innerHeight / 2;
            let scrollLeft = this.currentPlayer.circle.circle.left + (this.currentPlayer.circle.radius) - window.innerWidth / 2;
            $(document.body).scrollTop(scrollTop);
            $(document.body).scrollLeft(scrollLeft);
        }

        //console.log(this.currentPlayer.circle.circle.top);
        //this.canvas.zoomToPoint({
        //    x: this.currentPlayer.circle.circle.left,
        //    y: this.currentPlayer.circle.circle.top
        //}, 2);
    }

    removePlayer(id) {
        this.players[id].remove();
        this.players[id] = undefined;
    }
}
