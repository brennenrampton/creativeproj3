
var player, platforms, cursors, jumpButton, count, lasers, fireButton, laserTime, laser, tag_names, current_tag, tags;


var Game = {

	preload: function() {

		game.stage.backgroundColor = '#FFFFFF';

		game.load.crossOrigin = 'anonymous';

		game.load.image('player', 'images/angular.png');
		game.load.image('laser', 'images/laser.png');
		game.load.image('doctype', 'images/doctype.png');
		game.load.image('html', 'images/html.png');
		game.load.image('head', 'images/head.png');
		game.load.image('title', 'images/title.png');
		game.load.image('html_tag_game', 'images/html_tag_game.png');
		game.load.image('slash_title', 'images/slash_title.png');
		game.load.image('slash_head', 'images/slash_head.png');
		game.load.image('body', 'images/body.png');
		game.load.image('p', 'images/p.png');
		game.load.image('congratulations', 'images/congratulations.png');
		game.load.image('slash_p', 'images/slash_p.png');
		game.load.image('slash_body', 'images/slash_body.png');
		game.load.image('slash_html', 'images/slash_html.png');

		count = 100;
		laserTime = 0;
		tag_names = ['doctype', 'html', 'head', 'title', 'html_tag_game', 'slash_title', 'slash_head', 'body', 'p', 'congratulations', 'slash_p', 'slash_body', 'slash_html'];
		current_tag = 0;
		tags = new Array();

	},

	

	create: function() {

		player = game.add.sprite(100, 200, 'player');

		for(var i = 0; i < tag_names.length; i++)
		{
			tags.push(game.add.sprite(game.rnd.integerInRange(0, 600), game.rnd.integerInRange(0, 450), tag_names[i]));
			tags[i].set('body.velocity', game.rnd.integerInRange(-200, 200), game.rnd.integerInRange(-200, 200));
			tags[i].set('body.collideWorldBounds', true);
			tags[i].set('body.bounce.x', 1);
			tags[i].set('body.bounce.y', 1);
		}

		//movingPlatform = game.add.sprite(0, 0, "platform");

		game.physics.arcade.enable(player);
		//game.physics.arcade.enable(movingPlatform);

		lasers = game.add.physicsGroup();
		lasers.createMultiple(32, 'laser', false);
		lasers.setAll('checkWorldBounds', true);
		lasers.setAll('outOfBoundsKill', true);

		//movingPlatform.body.collideWorldBounds = true;
		player.body.collideWorldBounds = true;
		//player.body.gravity.y = 500;

		//tags = game.add.physicsGroup();

		//tags.create(500, 150, 'platform');
		//tags.create(-200, 300, 'platform');
		//tags.create(400, 450, 'platform');

		//tags.setAll('body.immovable', true);

		cursors = game.input.keyboard.createCursorKeys();
		fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

	},

	collisionHandler0 : function(laser, tag) {
		if(current_tag == 0)
		{
			tag.kill();
			current_tag++;
		}
		laser.kill();
	},

	collisionHandler1 : function(laser, tag) {
		if(current_tag == 1)
		{
			tag.kill();
			current_tag++;
		}
		laser.kill();
	},

	collisionHandler2 : function(laser, tag) {
		if(current_tag == 2)
		{
			tag.kill();
			current_tag++;
		}
		laser.kill();
	},

	collisionHandler3 : function(laser, tag) {
		if(current_tag == 3)
		{
			tag.kill();
			current_tag++;
		}
		laser.kill();
	},

	collisionHandler4 : function(laser, tag) {
		if(current_tag == 4)
		{
			tag.kill();
			current_tag++;
		}
		laser.kill();
	},

	collisionHandler5 : function(laser, tag) {
		if(current_tag == 5)
		{
			tag.kill();
			current_tag++;
		}
		laser.kill();
	},

	collisionHandler6 : function(laser, tag) {
		if(current_tag == 6)
		{
			tag.kill();
			current_tag++;
		}
		laser.kill();
	},

	collisionHandler7 : function(laser, tag) {
		if(current_tag == 7)
		{
			tag.kill();
			current_tag++;
		}
		laser.kill();
	},

	collisionHandler8 : function(laser, tag) {
		if(current_tag == 8)
		{
			tag.kill();
			current_tag++;
		}
		laser.kill();
	},

	collisionHandler9 : function(laser, tag) {
		if(current_tag == 9)
		{
			tag.kill();
			current_tag++;
		}
		laser.kill();
	},

	collisionHandler10 : function(laser, tag) {
		if(current_tag == 10)
		{
			tag.kill();
			current_tag++;
		}
		laser.kill();
	},

	collisionHandler11 : function(laser, tag) {
		if(current_tag ==11)
		{
			tag.kill();
			current_tag++;
		}
		laser.kill();
	},

	collisionHandler12 : function(laser, tag) {
		if(current_tag == 12)
		{
			tag.kill();
			current_tag++;
			this.state.start('Game_Over');
		}
		laser.kill();
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

		for(var i = 0; i < tags.length; i++)
		{
			game.physics.arcade.collide(player, tags[i]);
		}

		player.body.velocity.x = 0;
		player.body.velocity.y = 0;

		game.physics.arcade.collide(lasers, tags[0], this.collisionHandler0);
		game.physics.arcade.collide(lasers, tags[1], this.collisionHandler1);
		game.physics.arcade.collide(lasers, tags[2], this.collisionHandler2);
		game.physics.arcade.collide(lasers, tags[3], this.collisionHandler3);
		game.physics.arcade.collide(lasers, tags[4], this.collisionHandler4);
		game.physics.arcade.collide(lasers, tags[5], this.collisionHandler5);
		game.physics.arcade.collide(lasers, tags[6], this.collisionHandler6);
		game.physics.arcade.collide(lasers, tags[7], this.collisionHandler7);
		game.physics.arcade.collide(lasers, tags[8], this.collisionHandler8);
		game.physics.arcade.collide(lasers, tags[9], this.collisionHandler9);
		game.physics.arcade.collide(lasers, tags[10], this.collisionHandler10);
		game.physics.arcade.collide(lasers, tags[11], this.collisionHandler11);
		game.physics.arcade.collide(lasers, tags[12], this.collisionHandler12);


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
