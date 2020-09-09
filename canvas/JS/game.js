let game = {
	ctx: null,
	sprites: {
		background: null,
		ball: null,
		platform: null,
	},
	init: function() {
		this.ctx = document.getElementById("mycanvas").getContext("2d");
	},
	preload(callback) {
		let loaded = 0;
		let required = Object.keys(this.sprites).length;

		for (let key in this.sprites) {
			this.sprites[key] = new Image();
			this.sprites[key].src = "media/image/" + key + ".png";
			this.sprites[key].addEventListener("load", () => {
				++loaded;
				if (loaded >= required) {
					callback();
				}
			});
		}
	},
	run() {
		window.requestAnimationFrame(() => {
			this.render();
		});
	},
	render() {
		this.ctx.drawImage(this.sprites.background, 0	, 0);
		this.ctx.drawImage(this.sprites.ball, 0, 0);
		this.ctx.drawImage(this.sprites.platform, 0, 0);
	},
	start: function() {
		this.init();
		this.preload(() => {
			this.run();
		});
	}
};

game.ball = {
	x: 320,
	y: 280,
	width: 20,
	height: 20
};

game.platform = {
	x: 280,
	y: 300
};

	// start: function() {
	// 	this.ctx = document.getElementById("mycanvas").getContext("2d");
	// 	let background = new Image();
	// 	background.src = "media/image/background.png";
	// 	window.requestAnimationFrame(() => {
	// 		this.ctx.drawImage(background, 0, 0);
	// 	});
	// }
// };
window.addEventListener("load", () => {
	game.start();
});