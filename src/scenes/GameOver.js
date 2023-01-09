import Phaser from "../lib/phaser.js";

export default class GameOver extends Phaser.Scene {
	constructor() {
		super("game-over");
	}
	init(data) {
		console.log("init", data);
		this.finalScore = data.score;
	}
	preload() {
		this.load.image("background", "assets/bg_layer1.png");
	}
	create() {
		this.add.image(240, 320, "background").setScrollFactor(1, 0);
		const width = this.scale.width;
		const height = this.scale.height;
		this.add
			.text(width * 0.5, height * 0.5, "Game Over", {
				fontSize: 64,
				fontFamily: "ArcadeClassic",
			})
			.setOrigin(0.5);
		this.add
			.text(
				width * 0.5,
				height * 0.57,
				`Your Score: ${this.finalScore}`,
				{
					fontSize: 30,
					fontFamily: "ArcadeClassic",
				}
			)
			.setOrigin(0.5);
		this.add
			.text(width * 0.5, height * 0.64, "(Press Space to Continue)", {
				fontSize: 16,
			})
			.setOrigin(0.5);

		this.input.keyboard.once("keydown-SPACE", () =>
			this.scene.start("menu")
		);
	}
}
