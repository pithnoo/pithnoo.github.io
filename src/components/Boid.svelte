<script>
	import { onMount } from "svelte";
	import { Boid } from "$lib/boids.js";

	let { boidState } = $props();
	let canvas;
	let animationID;
	let boidCount = 100;
	const boids = [];

	// update boid position
	function update() {
		let ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		for (let i = 0; i < boidCount; i++) {
			boids[i].update(boids, canvas.height, canvas.width);
			boids[i].draw(ctx);
		}

		animationID = requestAnimationFrame(update);
	}

	// initialising function
	onMount(() => {
		// set the bounds to be the screen size
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		// get instance of canvas for boundaries
		let ctx = canvas.getContext("2d");

		// initialise boids
		for (let i = 0; i < boidCount; i++) {
			boids.push(new Boid(i, canvas.height, canvas.width));
		}

		// do my best to scale at smaller resolutions
		window.addEventListener("resize", () => {
			const scaleX = window.innerWidth / canvas.width;
			const scaleY = window.innerHeight / canvas.height;

			boids.forEach((b) => {
				b.position[0] *= scaleX;
				b.position[1] *= scaleY;
				b.velocity[0] *= scaleX;
				b.velocity[1] *= scaleY;
			});

			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		});
	});

	$effect(() => {
		if (window.innerWidth >= 900 && boidState === true) update();

		let ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		return () => {
			if (animationID) cancelAnimationFrame(animationID);
		};
	});
</script>

<canvas bind:this={canvas} class="bg-red fixed inset-0 w-full h-full -z-10"
></canvas>
