import Phaser from "../lib/phaser.js";

export default class Game extends Phaser.Scene {
	player;
	platforms;
	constructor() {
		super("game");
	}
	preload() {
		this.load.image("background", "assets/bg_layer1.png");
		this.load.image("platform", "assets/ground_grass.png");
		this.load.image("bunny", "assets/bunny1_stand.png");
	}
	create() {
		this.add.image(240, 320, "background");
		this.platforms = this.physics.add.staticGroup();
		for (let i = 0; i < 5; i++) {
			const x = Phaser.Math.Between(80, 400);
			const y = 150 * i;
			const platform = this.platforms.create(x, y, "platform");
			platform.scale = 0.5;

			const body = platform.body;
			body.updateFromGameObject();
		}

		this.player = this.physics.add.sprite(240, 360, "bunny").setScale(0.5);
		this.physics.add.collider(this.player, this.platforms);

		this.player.body.checkCollision.up = false;
		this.player.body.checkCollision.left = false;
		this.player.body.checkCollision.right = false;

		this.cameras.main.startFollow(this.player);
	}

	update() {
		const touchingDown = this.player.body.touching.down;
		if (touchingDown) {
			this.player.setVelocityY(-300);
		}

		this.platforms.children.iterate((child) => {
			const platform = child;
			const scrollY = this.cameras.main.scrollY;
			if (platform.y >= scrollY + 700) {
				platform.y = scrollY - Phaser.Math.Between(50, 100);
				platform.body.updateFromGameObject();
			}
		});
	}
}
