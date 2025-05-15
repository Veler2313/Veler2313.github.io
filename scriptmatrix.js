document.addEventListener("DOMContentLoaded", () => {
  drawMatrix();
});

let color = "#0f0";
let backgroundColor = "#00000016";

function drawMatrix() {
	
	const canvas = document.getElementById('matrixCanvas');
	const ctx = canvas.getContext('2d');

	// set canvas to screen
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	// all words
	//const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?";
	const matrix = "01";
	const fontSize = 16;
	const columns = canvas.width / fontSize;
	const drops = [];

	// set value to columns
	for (let i = 0; i < columns; i++) {
		drops[i] = Math.random() * canvas.height;
	}

	function draw() {
		// we make a transparent on top to make fade effect
		ctx.fillStyle = backgroundColor;
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// font and color
		ctx.font = fontSize + "px monospace";
		ctx.fillStyle = color;

		// draw words
		for (let i = 0; i < drops.length; i++) {
			const text = matrix[Math.floor(Math.random() * matrix.length)];
			ctx.fillText(text, i * fontSize, drops[i] * fontSize);

			// if the word reach the end, rest at random
			if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
				drops[i] = 0;
			}
			drops[i]++;
		}
	}

	// play the animation every X miliseconds (almost 1000 / X fps)
	setInterval(draw, 55);
	setInterval(color, 100);
	setInterval(colorB, 100);

	// reset on resize
	window.addEventListener('resize', () => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		drops.length = 0;
		for (let i = 0; i < canvas.width / fontSize; i++) {
			drops[i] = Math.random() * canvas.height;
		}
	});
	
	function color() {
		const raw = getComputedStyle(document.documentElement)
			.getPropertyValue('--main-color')
			.trim();
		color = raw;
	}
	
	function colorB() {
		const raw = getComputedStyle(document.documentElement)
			.getPropertyValue('--background-color')
			.trim();
		backgroundColor = raw;
	}
}
