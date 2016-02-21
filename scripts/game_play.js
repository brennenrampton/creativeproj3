
var player, platforms, cursors, jumpButton, count, lasers, fireButton, laserTime, laser;


var Game = {

	preload: function() {

		game.stage.backgroundColor = '#FFFFFF';

		game.load.crossOrigin = 'anonymous';

		game.load.image('player', 'images/angular.png');
		game.load.image('platform', 'images/doctype.png');
		game.load.image('laser', 'images/laser.png');

		count = 100;
		laserTime = 0;

	},

	

	create: function() {

		player = game.add.sprite(100, 200, 'player');

		movingPlatform = game.add.sprite(0, 0, "platform");

		game.physics.arcade.enable(player);
		game.physics.arcade.enable(movingPlatform);

		lasers = game.add.physicsGroup();
		lasers.createMultiple(32, 'laser', false);
		lasers.setAll('checkWorldBounds', true);
		lasers.setAll('outOfBoundsKill', true);

		movingPlatform.body.collideWorldBounds = true;
		player.body.collideWorldBounds = true;
		//player.body.gravity.y = 500;

		tags = game.add.physicsGroup();

		tags.create(500, 150, 'platform');
		tags.create(-200, 300, 'platform');
		tags.create(400, 450, 'platform');

		tags.setAll('body.immovable', true);

		cursors = game.input.keyboard.createCursorKeys();
		fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

	},

	collisionHandler : function(laser, tag) {
		laser.kill();
		tag.kill();
	},

	moveTags: function() {
		var sign = Math.floor((Math.random() * 4));
		if (sign === 0) {
			movingPlatform.body.velocity.y = Math.floor((Math.random() * 100) + 51);
			movingPlatform.body.velocity.x = Math.floor((Math.random() * 100) + 51);
		} else if (sign === 1) {
			movingPlatform.body.velocity.y = -(Math.floor((Math.random() * 100) + 51));
			movingPlatform.body.velocity.x = -(Math.floor((Math.random() * 100) + 51));
		} else if (sign === 2) {
			movingPlatform.body.velocity.y = (Math.floor((Math.random() * 100) + 51));
			movingPlatform.body.velocity.x = -(Math.floor((Math.random() * 100) + 51));
		} else if (sign === 3) {
			movingPlatform.body.velocity.y = -(Math.floor((Math.random() * 100) + 51));
			movingPlatform.body.velocity.x = (Math.floor((Math.random() * 100) + 51));
		}
	},

	fireLaser: function(){
	if (game.time.time > laserTime)
    {
        laser = lasers.getFirstExists(false);

        if (laser)
        {
            laser.reset(player.x + 16, player.y - 13);
            laser.body.velocity.y = -600;
            laserTime = game.time.time + 100;
        }
    }
	},

	
	update: function() {

		game.physics.arcade.collide(player, tags);

		player.body.velocity.x = 0;
		player.body.velocity.y = 0;

		game.physics.arcade.collide(lasers, tags, this.collisionHandler);

		if (cursors.left.isDown) {
			player.body.velocity.x = -250;
		} else if (cursors.right.isDown) {
			player.body.velocity.x = 250;
		}

		if (cursors.up.isDown) {
			player.body.velocity.y = -250;
		} else if (cursors.down.isDown) {
			player.body.velocity.y = 250;
		}

		if (count % 50 === 0) {
			this.moveTags();
		}
		count++;
		if (fireButton.isDown){
        	this.fireLaser();
    	}
	}

	
};
