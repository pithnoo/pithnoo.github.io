<script>
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";

	let { children } = $props();
</script>

<svelte:head
	><link rel="icon" href="/images/cat.png" />
	<title>Oliver Cheung - Programming Portfolio</title>
</svelte:head>

{@render children()}
