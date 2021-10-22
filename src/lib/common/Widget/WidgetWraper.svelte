<script lang="ts">
	import IconImageDrop from '$lib/icons/IconImageDrop.svelte';
	import IconLightning from '$lib/icons/IconLightning.svelte';

	export let title: string = 'Faces to Emojis';
	export let category: string = 'Image Face Detection';
</script>

<div class="container shadow-sm hover:shadow duration-500 rounded-xl bg-white max-w-md p-5">
	<div class="flex flex-col max-w-md">
		<header class="font-semibold flex-row flex items-center mb-2">
			<slot name="header">
				<IconLightning class="text-yellow-500" />
				<p>{title}</p>
			</slot>
		</header>
		<div class="flex items-center text-sm text-gray-500 mb-1.5">
			<slot name="category">
				<IconImageDrop class="mr-1" />
				<span>{category}</span>
			</slot>
		</div>

		<slot name="input" />
	</div>
</div>
