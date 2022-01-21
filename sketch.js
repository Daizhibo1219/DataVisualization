function setup() {
	createCanvas(800,800); // make an HTML canvas element width x height pixels
}

function draw() {
	background(225);
	textSize(40);
	translate(width / 2, height / 2);
	text('12', 0, -250)
	text('3', 270, 13)
	text('6', 0, 285)
	text('9', -270, 13)
	textAlign(CENTER);
	let hr = hour()
	if (hr < 10) {
		hr = str('0' + hour());
	}
	let mn = minute()
	if (mn < 10) {
		mn = str('0' + minute());
	}
	let sc = second()
	if (sc < 10) {
		sc = str('0' + second());
	}

	text( hr + ':' + mn + ':' + sc, 0, 350)
	push();
	stroke('purple');
	strokeWeight(10);
	noFill();
	circle(0, 0, 600)
	pop();
	push();
	rotate( second() * PI / 30.0);
	stroke('blue')
	strokeWeight(10);
	line(0, 0, 0, -200);
	pop();
	push();
	rotate( minute() * PI / 30.0);
	stroke('green')
	strokeWeight(10);
	line(0, 0, 0, -150);
	pop();
	push();
	rotate( (hour()%12) * PI / 6.0);
	stroke('black')
	strokeWeight(10);
	line(0, 0, 0, -100);
	pop();
	push();
	stroke('white')
	strokeWeight(5)
	point(0,0)
	pop();
}

