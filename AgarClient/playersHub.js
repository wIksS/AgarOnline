class PlayersHub {
    constructor(hub, game) {
        this.hub = hub;
        this.game = game;
        this.hub.client.updatePlayer = this.updatePlayer.bind(this);
        this.hub.client.spawnNewPlayer = this.spawnNewPlayer.bind(this);
        this.hub.client.spawnCurrentPlayer = this.spawnCurrentPlayer.bind(this);
        this.hub.client.removePlayer = this.removePlayer.bind(this);
        this.hub.client.spawnOtherPlayers = this.spawnOtherPlayers.bind(this);
        this.hub.client.spawnAllShapes = this.spawnAllShapes.bind(this);
        this.hub.client.changePlayerRadius = this.changePlayerRadius.bind(this);
        this.hub.client.removeShape = this.removeShape.bind(this);
        this.hub.client.spawnShape = this.spawnShape.bind(this);
    }

    updatePlayer(response) {
        let player = game.getPlayer(response.id);
        if (player) {
            player.move(response.position);
        }

        game.redraw();
    }

    removeShape(id) {
        game.removeShape(id);
    }

    spawnAllShapes(shapes) {
        for (var i = 0; i < shapes.length; i++) {
            game.addShape(shapes[i].id, shapes[i].position, shapes[i].radius, shapes[i].color);
        }
    }

    spawnShape(shape) {
        game.addShape(shape.id, shape.position, shape.radius, shape.color);
    }

    spawnNewPlayer(otherPlayer) {
        game.addPlayerObject(otherPlayer);
    }

    spawnOtherPlayers(otherPlayers) {
        for (var i = 0; i < otherPlayers.length; i++) {
            game.addPlayerObject(otherPlayers[i]);
        }
    }

    spawnCurrentPlayer(player) {
        this.currentPlayer = game.addPlayerObject(player, true);
    }

    changePlayerRadius(player) {
        game.getPlayer(player.id).changeRadius(player.radius);
    }

    removePlayer(player) {
        game.removePlayer(player.id);
        game.redraw();
    }
}

