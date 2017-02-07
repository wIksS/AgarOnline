class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.players = {};
    }
    
    addPlayer(name, id, top,left, color) {
        return this.players[id] = new Player(this.canvas,name, id, top, left, color);
    }

    addPlayerObject(player) {
        return this.players[player.id] = new Player(this.canvas, player.name, player.id, player.top, player.left, player.color);
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
