import Phaser from "./lib/phaser.js";
import Game from "./scenes/Game.js";
import Menu from "./scenes/Menu.js";
import GameOver from "./scenes/GameOver.js";
export default new Phaser.Game({
	type: Phaser.AUTO,
	width: 700,
	height: 800,

	scene: [Menu, Game, GameOver],
	parent: "mygame",
	physics: {
		default: "arcade",
		arcade: {
			gravity: {
				y: 200,
			},
			
		},
	},
});
