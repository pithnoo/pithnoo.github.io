import { normalize } from '$lib/math.js';

export class Boid {

	id = 0;
	position = [100, 100];
	initialPosition = [0, 0];
	acceleration = [0, 0];
	ruleAcceleration = [0, 0];
	velocity = [1, -1];
	rotation = 0;

	// boid color: maybe passed by default?
	boidColor;
	boidColors = ['#fb4934', '#b8bb26', '#fabd2f', '#83a598', '#d3869b'];

	minDistance = 100;
	moveSpeed = 3;
	boidRange = 70;

	seperationFactor = 0.7;
	alignmentFactor = 0.6;
	cohesionFactor = 0.6;
	boundaryForce = 0.3;

	screenFactor = 0.4;

	// optional
	steeringFactor;

	constructor(id, height, width) {
		// assign array index for later
		this.id = id;

		// take height and width to generate a random position
		this.position[0] = Math.floor(Math.random() * width);
		this.position[1] = Math.floor(Math.random() * height);
		this.velocity[0] = Math.random();
		this.velocity[1] = Math.random();
		this.velocity = normalize(this.velocity);

		let colorIndex = Math.floor(Math.random() * this.boidColors.length);
		this.boidColor = this.boidColors[colorIndex];
	}

	update(boidNeighbours, height, width) {
		// reflect from boundary 

		let dLeft = this.position[0];
		let dRight = width - this.position[0];
		let dX = Math.min(dLeft, dRight);
		let dTop = this.position[1];
		let dBottom = height - this.position[1];
		let dY = Math.min(dTop, dBottom);

		if (dX < this.minDistance) {
			if (dLeft < dRight) {
				this.acceleration[0] += this.boundaryForce;
			}
			else {
				this.acceleration[0] -= this.boundaryForce;
			}
		}
		// cases reversed as y positive is down
		if (dY < this.minDistance) {
			if (dBottom > dTop) {
				this.acceleration[1] += this.boundaryForce;
			}
			else {
				this.acceleration[1] -= this.boundaryForce;
			}
		}

		// or wrap
		// if (this.position[0] > width) this.position[0] = 0;
		// if (this.position[0] < 0) this.position[0] = width;
		// if (this.position[1] > height) this.position[1] = 0;
		// if (this.position[1] < 0) this.position[1] = height;

		let neighbourIDs = [];

		// identify neighbours
		for (const n of boidNeighbours) {

			// skip the same boid
			if (n.id === this.id) continue;

			let dx = n.position[0] - this.position[0];
			let dy = n.position[1] - this.position[1];

			// calculate euclidean distance
			let neighbourDistance = Math.sqrt((dx ** 2) + (dy ** 2));

			if (neighbourDistance <= this.boidRange) {
				neighbourIDs.push(n.id);
			}
		}

		// separation (vector push away)
		let averageSeperation = [0, 0];

		for (const id of neighbourIDs) {
			let n = boidNeighbours[id];

			let seperationVector = normalize([this.position[0] - n.position[0], this.position[1] - n.position[1]]);

			averageSeperation[0] += seperationVector[0];
			averageSeperation[1] += seperationVector[1];
		}

		if (neighbourIDs.length > 0) {
			averageSeperation = normalize(averageSeperation);
			averageSeperation[0] *= this.seperationFactor;
			averageSeperation[1] *= this.seperationFactor;

			this.ruleAcceleration[0] += averageSeperation[0];
			this.ruleAcceleration[1] += averageSeperation[1];
		}

		// alignment (average direction)
		let averageAlignment = [0, 0];

		for (const id of neighbourIDs) {
			let n = boidNeighbours[id];
			averageAlignment[0] += n.velocity[0];
			averageAlignment[1] += n.velocity[1];
		}

		if (neighbourIDs.length > 0) {
			averageAlignment = normalize(averageAlignment);
			averageAlignment[0] *= this.alignmentFactor;
			averageAlignment[1] *= this.alignmentFactor;

			this.ruleAcceleration[0] += averageAlignment[0];
			this.ruleAcceleration[1] += averageAlignment[1];
		}

		// cohesion (average center)
		let averageCohesion = [0, 0];
		let averagePosition = [0, 0];
		for (const id of neighbourIDs) {
			let n = boidNeighbours[id];
			averagePosition[0] += n.velocity[0];
			averagePosition[1] += n.velocity[1];
		}
		if (neighbourIDs.length > 0) {
			averagePosition[0] /= neighbourIDs.length;
			averagePosition[1] /= neighbourIDs.length;

			let cohesionVector = normalize([this.position[0] - averagePosition[0], this.position[1] - averagePosition[1]]);

			averageCohesion[0] = cohesionVector[0] * this.cohesionFactor;
			averageCohesion[1] = cohesionVector[1] * this.cohesionFactor;

			this.ruleAcceleration[0] *= averageCohesion[0];
			this.ruleAcceleration[1] *= averageCohesion[1];
		}

		this.ruleAcceleration[0] /= 3;
		this.ruleAcceleration[1] /= 3;

		this.velocity[0] += this.ruleAcceleration[0];
		this.velocity[1] += this.ruleAcceleration[1];
		this.velocity[0] += this.acceleration[0];
		this.velocity[1] += this.acceleration[1];

		this.velocity = normalize(this.velocity);

		// TODO: don't forget about dt here
		this.position[0] += this.velocity[0] * this.moveSpeed;
		this.position[1] += this.velocity[1] * this.moveSpeed;

		// reset acceleration afterwards
		this.ruleAcceleration[0] = 0;
		this.ruleAcceleration[1] = 0;
		this.acceleration[0] = 0;
		this.acceleration[1] = 0;

	}

	draw(ctx) {
		let angle = Math.atan2(this.velocity[1], this.velocity[0]);

		// let scale = (ctx.canvas.width / ctx.canvas.height) * 2;
		let scale = Math.min(ctx.canvas.width, ctx.canvas.height) / 200;

		ctx.save();

		ctx.translate(this.position[0], this.position[1]);
		ctx.rotate(angle);

		ctx.beginPath();

		ctx.moveTo(scale * 2, 0);
		ctx.lineTo(-scale, scale);
		ctx.lineTo(-scale, -scale);

		ctx.closePath();

		ctx.fillStyle = '#3c3836';
		ctx.fill();
		ctx.restore();
	}

}
