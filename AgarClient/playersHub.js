class PlayersHub {
    constructor(hub, game) {
        this.hub = hub;
        this.game = game;
        this.hub.client.updatePlayer = this.updatePlayer.bind(this);
        this.hub.client.spawnNewPlayer = this.spawnNewPlayer.bind(this);
        this.hub.client.spawnCurrentPlayer = this.spawnCurrentPlayer.bind(this);
        this.hub.client.removePlayer = this.removePlayer.bind(this);
        this.hub.client.spawnOtherPlayers = this.spawnOtherPlayers.bind(this);
    }

    updatePlayer(response) {
        game.getPlayer(response.id).move(response.left, response.top);
        game.redraw();
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
        this.currentPlayer = game.addPlayerObject(player);
    }

    removePlayer(player) {
        game.removePlayer(player.id);
        game.redraw();
    }
}

