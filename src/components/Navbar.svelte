<script>
 import Element from "./NavElement.svelte";
 import Boid from "./Boid.svelte";

 let boidState = $state(true);
</script>

<Boid {boidState}/>

<nav class="sticky top-0 z-10">
	<div class="max-w bg-[#282828] shadow-lg flex items-center justify-center py-5 list-none">
	  <Element name="Contact" href="#contacts" />
	  <Element name="Projects" href="#projects" />
	  <Element name="Github" href="https://github.com/pithnoo" target="_blank" />

	  <label class="px-5 text-[#bdae93] hover:text-[#fabd21] hidden md:block">
		<input type="checkbox" class="accent-[#fabd21]" bind:checked={boidState} />
		Toggle Boids
	  </label>
	</div>
</nav>
