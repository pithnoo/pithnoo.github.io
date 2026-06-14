<script>
	let {
		title = "Title here",
		desc = "Desc here",
		src = "",
		isImage = false,
	} = $props();

	let videoElement;
	function mouseEnter() {
		videoElement?.play();
	}
	function mouseExit() {
		videoElement?.pause();
	}
</script>

<div
	class="group min-w-0 mx-10 lg:w-120 lg:h-180 md:w-80 md:h-180 hover:scale-110 duration-150 ease-in-out bg-[#282828] shadow-lg"
	on:mouseenter={mouseEnter}
	on:mouseleave={mouseExit}
>
	{#if isImage === false}
		<!-- <video bind:this={videoElement} autoplay loop muted> -->
		<video autoplay loop muted>
			<source {src} type="video/mp4" />
		</video>
	{:else}
		<img alt="" {src} />
	{/if}

	<article class="m-4 text-wrap break-words">
		<h1
			class="font-bold lg:text-3xl md:text-2xl text-[#fe8019] group-hover:text-[#fabd21]"
		>
			{title}
		</h1>
		<p class="text-[#fbf1c7] pt-4">{desc}</p>
	</article>
</div>
