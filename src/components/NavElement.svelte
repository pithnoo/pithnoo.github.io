<script>
	let { name, href, target } = $props();
</script>

<li class="px-2 md:px-5 lg:px-5">
	<a class="text-[#bdae93] hover:text-[#fabd21] relative group inline-block" {target} {href}>
		{name}
		<span
			class="bg-[#fabd21] absolute -bottom-1 left-1/2 h-[2px] w-0 group-hover:w-1/2 transition-all duration-500"
		></span>
		<span
			class="bg-[#fabd21] absolute -bottom-1 right-1/2 h-[2px] w-0 group-hover:w-1/2 transition-all duration-500"
		></span>

	</a>
</li>
