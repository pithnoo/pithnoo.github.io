<script>
	import Contact from "../components/Contact.svelte";
	import Project from "../components/Project.svelte";
	import Boid from "../components/Boid.svelte";
	import Skill from "../components/Skill.svelte";
	import Navbar from "../components/Navbar.svelte";
</script>

<Navbar />

<!-- <Boid /> -->

<div class="flex-column justify-center items-center pt-30">
	<h1
		class="text-[#fabd2f] text-3xl lg:text-4xl md:text-3xl text-center flex justify-center font-bold"
	>
		Graphics Programmer + Software Engineer + Game Developer
	</h1>
	<h1
		class="text-[#bdae93] text-2xl lg:text-3xl md:text-3xl flex justify-center pt-5 font-bold"
	>
		pith_dev
	</h1>

	<div class="flex justify-center pt-5 sm:pt-5 lg:pt-10">
		<div
			class="flex grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-center items-center max-w-[800px]"
		>
			<img
				class="w-20 sm:w-20 md:w-45 lg:w-45 mx-auto"
				alt="Developer Icon"
				src="/images/cat.png"
			/>
			<p
				class="text-[#fbf1c7] mx-5 text-sm lg:text-xl md:text-lg sm:text-sm text-center sm:text-center md:text-left lg:text-left pt-5"
			>
				Lorem ipsum dolor sit amet consectetur adipiscing elit.
				Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex
				sapien vitae pellentesque sem placerat in id. Placerat in id
				cursus mi pretium tellus duis. Pretium tellus duis convallis
				tempus leo eu aenean.
			</p>
		</div>
	</div>
</div>

<div id="contacts" class="flex-column justify-center items-center pt-20">
	<h1
		class="text-[#fbf1c7] text-xl md:text-3xl lg:text-3xl text-center flex justify-center pb-5"
	>
		Interested? Send me a message:
	</h1>
	<Contact />
</div>

<div id="projects" class="flex justify-center items-center pt-40 pb-30">
	<div
		class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-10 gap-y-30"
	>
		<Project title="Boba Engine" src="/images/boba.png" isImage="true" />
		<Project title="Boids Predator Model (BPM)" src="/videos/boids.mp4" />
		<Project title="Elevending" src="/videos/elevending.mp4" />
		<Project
			title="Vulkan Renderer"
			src="/videos/vulkan.mp4"
			desc="jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"
		/>
		<Project title="Raytracer" src="/images/raytracer.png" isImage="true" />
		<Project
			title="Animation / Physics Simulation"
			src="/videos/animation.mp4"
		/>
		<Project title="Soul" src="/videos/soul.mp4" />
		<Project title="Lift" src="/videos/lift.mp4" />
		<Project title="Pilot" src="/videos/pilot.mp4" />
	</div>
</div>

<!-- <div class="flex-column justify-center items-center pb-10">
	 <h1 class="text-[#fbf1c7] flex justify-center text-4xl pt-30">
	 Technical Skills
	 </h1>
	 <div class="flex flex-row justify-center items-start gap-20">
	 <div class="flex flex-col justify-center items-center gap-10 pt-10">
	 <h2 class="text-2xl text-[#bdae93]">Programming Languages</h2>
	 <Skill title="C++" />
	 <Skill title="Python" />
	 <Skill title="SQL" />
	 <Skill title="Java" />
	 <Skill title="GDScript" />
	 <Skill title="JavaScript" />
	 <Skill title="TypeScript" />
	 <Skill title="HTML" />
	 <Skill title="CSS" />
	 </div>
	 <div class="flex flex-col justify-center items-center gap-10 pt-10">
	 <h2 class="text-2xl text-[#bdae93]">Frameworks / Engines</h2>
	 <Skill title="Unity" />
	 <Skill title="Godot" />
	 <Skill title="Svelte" />
	 <Skill title="GLFW" />
	 <Skill title="OpenGL" />
	 <Skill title="Vulkan" />
	 </div>
	 <div class="flex flex-col justify-center items-center gap-10 pt-10">
	 <h2 class="text-2xl text-[#bdae93]">Tools</h2>
	 <Skill title="Git/Github" />
	 <Skill title="Trello" />
	 <Skill title="MS Office" />
	 <Skill title="Vim" />
	 <Skill title="Emacs" />
	 </div>

	 </div>
	 </div>
-->

<style>
	@reference "tailwindcss";
</style>
