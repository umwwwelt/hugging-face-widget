<script lang="ts">
	import { slide, fly } from 'svelte/transition';

	import IconImageDrop from '$lib/icons/IconImageDrop.svelte';
	import IconLightning from '$lib/icons/IconLightning.svelte';
	import WidgetFooter from './WidgetFooter.svelte';

	export let title: string = 'Faces to Emojis';
	export let category: string = 'Image Face Detection';

	export let error: string;
	export let outputJson: string;
</script>

<div
	in:slide
	class="container shadow-sm hover:shadow duration-500 rounded-xl bg-white max-w-md p-5"
>
	<div class="flex flex-col max-w-md">
		<header in:fly={{ delay: 400, y: 10 }} class="font-semibold flex-row flex items-center mb-2">
			<slot name="header">
				<IconLightning class="text-yellow-500" />
				<p>{title}</p>
			</slot>
		</header>
		<div in:fly={{ delay: 500, y: 5 }} class="flex items-center text-sm text-gray-500 mb-1.5">
			<slot name="category">
				<IconImageDrop class="mr-1" />
				<span>{category}</span>
			</slot>
		</div>

		<slot name="input" />

		{#if error}
			<div in:slide class="mt-3 text-center text-sm text-orange-500">{error}</div>
		{/if}

		<slot name="output" />

		<WidgetFooter {outputJson} />
	</div>
</div>
