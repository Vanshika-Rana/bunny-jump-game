import Phaser from "../lib/phaser.js";

export default class Menu extends Phaser.Scene {
	constructor() {
		super("menu");
	}
	preload() {
		this.load.image("background", "assets/bg_layer1.png");
	}
	create() {
		this.add.image(240, 320, "background").setScrollFactor(1, 0);
		const width = this.scale.width;
		const height = this.scale.height;
		this.add
			.text(width * 0.5, height * 0.5, "MOON BUNNY", {
				fontSize: 80,
				color: "#0ff",
				fontWeight: "bold",
				fontFamily: "ArcadeClassic",
			})
			.setOrigin(0.5);
		this.add
			.text(width * 0.5, height * 0.57, "Collect All The Carrots", {
				fontSize: 24,
				color: "#0ff",
				fontWeight: "bold",
			})
			.setOrigin(0.5);
		this.add
			.text(width * 0.5, height * 0.64, "(Press Enter to Start)", {
				fontSize: 20,
				color: "#fff",
				fontWeight: "bold",
			})
			.setOrigin(0.5);

		this.input.keyboard.once("keydown-ENTER", () =>
			this.scene.start("game")
		);
	}
}
