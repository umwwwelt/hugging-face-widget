<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	import Emoji from './Emoji.svelte';

	import type { Coordonates } from '$lib/types';

	export let center: Coordonates;

	let n: number = 0;
	let iterations: NodeJS.Timeout;

	const emojiList = [
		'🤗',
		'🙂',
		'😀',
		'😄',
		'😅',
		'😆',
		'😝',
		'😜',
		'😛',
		'😶',
		'😐',
		'😑',
		'😒',
		'😠',
		'😞',
		'😳',
		'😢',
		'🤗'
	];

	onMount(() => {
		iterations = setInterval(() => (n >= emojiList.length - 1 ? (n = 0) : n++), 100);
	});

	onDestroy(() => {
		clearInterval(iterations);
	});
</script>

<Emoji width={30} {center} emoji={emojiList[n]} class={$$props.class} />
