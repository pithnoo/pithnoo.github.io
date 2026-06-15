<script>
	let {
		title = "Title here",
		desc = "Desc here",
		src = "",
		href = "#contacts",
		isImage = false,
	} = $props();

	let videoElement = $state();

	function mouseEnter() {
		videoElement?.play();
	}
	function mouseExit() {
		videoElement?.pause();
	}
</script>

<a
	{href}
	class="group relative min-w-0 mx-10 lg:w-120 lg:h-180 md:w-80 md:h-180 hover:scale-110 duration-150 ease-in-out bg-[#282828] shadow-lg"
	onmouseenter={mouseEnter}
	onmouseleave={mouseExit}
>
	{#if isImage === false}
		<!-- <video autoplay loop muted> -->
		<video bind:this={videoElement} loop muted>
			<source {src} type="video/mp4" />
		</video>
	{:else}
		<img alt="" {src} />
	{/if}

	<article class="m-4 text-wrap break-words">
		{#if href !== "#contacts"}
			<h1
				class="font-bold lg:text-3xl md:text-2xl text-[#fe8019] group-hover:text-[#fabd21]"
			>
				{title}
			</h1>
		{:else}
			<h1
				class="font-bold lg:text-3xl md:text-2xl text-[#458588] group-hover:text-[#83a598]"
			>
				{title}
			</h1>
		{/if}
		<p class="text-[#fbf1c7] pt-4">{desc}</p>
	</article>

	{#if href === "#contacts"}
		<div
			class="w-full h-10 absolute bottom-0 flex justify-center items-center bg-[#3c3836]"
		>
			<p class="my-4 text-[#ebdbb2]">Source code available on request</p>
		</div>
	{/if}
</a>
