var Game_Over = {

	preload : function() {
		game.load.image('again', 'images/again.png');
		game.stage.backgroundColor = '#FFFFFF';
	}

	create : function() {
		this.add.button(0, 0, 'again', this.startGame, this)

	}

	startGame : function() {
		this.state.start('Game_Play')
	}
}