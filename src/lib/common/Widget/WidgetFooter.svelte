<script lang="ts">
	import IconCode from '$lib/icons/IconCode.svelte';
	import { fly, slide } from 'svelte/transition';

	export let outputJson: string;

	let isOutputJsonVisible = false;
</script>

<div in:fly={{ delay: 400, y: 5 }} class="mt-auto pt-4 flex items-center text-xs text-gray-500">
	<button
		class="flex items-center {outputJson ? '' : 'cursor-not-allowed text-gray-300'}"
		disabled={!outputJson}
		on:click={() => {
			isOutputJsonVisible = !isOutputJsonVisible;
		}}
	>
		<IconCode class="mr-1" />
		JSON Output
	</button>
</div>
{#if outputJson && isOutputJsonVisible}
	<pre
		transition:slide|local
		class="mt-3 max-h-64 overflow-auto text-xs text-gray-600 bg-gray-100 dark:bg-gray-800 p-2 rounded">{outputJson}</pre>
{/if}
