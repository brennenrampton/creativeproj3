var Menu = {

	preload : function() {
		game.load.image('start', 'images/start.png');
		game.stage.backgroundColor = '#FFFFFF';
	},

	create : function () {
		this.add.button(0, 0, 'start', this.startGame, this);
	},

	startGame : function () {
		this.state.start('Game_Play');
	}
};