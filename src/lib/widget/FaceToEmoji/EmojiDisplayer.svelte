<script lang="ts">
	//components
	import Emoji from '$lib/common/Emoji.svelte';
	import EmojiLoader from '$lib/common/EmojiLoader.svelte';

	//types
	import type { Coordonates } from '$lib/types';

	//helpers
	import { findTheEmoji } from './helpers';

	//states
	export let output = [];
	export let isLoading: boolean;
	export let error: string;

	export let ratio: number = 0;
	export let center: Coordonates = { x: 0, y: 0 };

	//ratio image
	function calculateRatio(node: HTMLElement) {
		const imgEl: HTMLImageElement = node.querySelector('img');

		imgEl.onload = () => {
			center = { x: imgEl.width / 2, y: imgEl.height / 2 };
			ratio = imgEl.width / imgEl.naturalWidth;
		};
	}

	//adapt position to proportion
	$: formatedOutput = output.map(({ positions, likelihoods }) => ({
		position: {
			width: (positions[1].x - positions[0].x) * ratio,
			left: positions[0].x * ratio,
			top: positions[0].y * ratio
		},
		emoji: findTheEmoji(likelihoods)
	}));
</script>

<div class="relative display-inline-block w-fit mx-auto" use:calculateRatio>
	{#if !error}
		{#if isLoading}
			{#key ratio}
				<EmojiLoader {center} />
			{/key}
		{:else}
			{#each formatedOutput as { position, emoji }, i}
				<Emoji {...position} {emoji} {i} {center} />
			{/each}
		{/if}
	{/if}
	<!-- photo slot -->
	<slot />
</div>

<style>
	/* TODO: transfer w-fit to global (Tailwind don't have fit-content) 🤔 */
	.w-fit {
		width: fit-content;
	}
</style>
