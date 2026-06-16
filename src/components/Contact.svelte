<script>
	import { InstagramSolid } from "flowbite-svelte-icons";
	import { LinkedinSolid } from "flowbite-svelte-icons";
	import { YoutubeSolid } from "flowbite-svelte-icons";
</script>

<div class="flex-column justify-center items-center">

	<div class="flex justify-center">
		<p class="text-xl md:text-2xl lg:text-2xl text-[#bdae93]">Github:</p>
		<a
			class="pl-2 text-xl md:text-2xl lg:text-2xl md-text text-[#bdae93] hover:text-[#fabd21] duration-150 ease-in-out group"
			target="_blank"
			href="https://github.com/pithnoo"
		>
			@pithnoo
			<div
				class="bg-[#fabd21] h-[2px] w-0 group-hover:w-full transition-all duration-500"
			></div>
		</a>
	</div>

	<div class="flex justify-center pt-2">
		<p class="text-xl md:text-2xl lg:text-2xl text-[#bdae93]">Email:</p>
		<a
			class="pl-2 text-xl md:text-2xl lg:text-2xl text-[#bdae93] hover:text-[#fabd21] duration-150 ease-in-out group"
			href="mailto:ollyc88@gmail.com?"
		>
			ollyc88@gmail.com
			<div
				class="bg-[#fabd21] h-[2px] w-0 group-hover:w-full transition-all duration-500"
			></div>
		</a>
	</div>

	<div class="flex justify-center pt-2">
		<p class="text-xl md:text-2xl lg:text-2xl text-[#bdae93]">CV:</p>
		<a
			class="pl-2 text-xl md:text-2xl lg:text-2xl text-[#bdae93] hover:text-[#fabd21] duration-150 ease-in-out group"
			href="/Oliver_Cheung_CV.pdf"
		download>
		  Download here
			<div
				class="bg-[#fabd21] h-[2px] w-0 group-hover:w-full transition-all duration-500"
			></div>
		</a>
	</div>




	<div class="flex justify-center pt-5 gap-8">
	  <a href="https://www.instagram.com/pith_dev/" target="_blank">
		<InstagramSolid
			class="size-12 text-[#bdae93] hover:text-[#fabd21] duration-150 ease-in-out"
		/>
	  </a> 

	  <a href="https://www.youtube.com/@pith_dev4518" target="_blank">
		<YoutubeSolid
			class="size-12 text-[#bdae93] hover:text-[#fabd21] duration-150 ease-in-out"
		/>
	  </a>

	  <a href="https://www.linkedin.com/in/pith-dev" target="_blank">
		<LinkedinSolid
			class="size-12 text-[#bdae93] hover:text-[#fabd21] duration-150 ease-in-out"
		/>
	  </a>
	</div>
</div>
