<script lang="ts">
	//svelte
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { elasticOut } from 'svelte/easing';

	//type
	import type { Coordonates } from '$lib/types';

	//stores
	import { faceFocused } from '$lib/widgets/FaceToEmoji/helpers';

	//states
	export let width: number = 30;
	export let top: number = 0;
	export let left: number = 0;
	export let emoji: string = '🙂';
	export let center: Coordonates;
	export let i: number; //index

	//animation
	const opt = { duration: 1000, delay: 120 * i, easing: elasticOut };
	const animTop = tweened(center.y - width / 2, opt);
	const animLeft = tweened(center.x - width / 2, opt);
	const animWidth = tweened(30, opt);

	onMount(() => {
		animTop.set(top || center.y - width / 2);
		animLeft.set(left || center.x - width / 2);
		animWidth.set(width);
	});
</script>

<div
	class="absolute {$$props.class} transition"
	class:opacity-10={$faceFocused === i}
	style="width:{width}px; top:{$animTop}px; left:{$animLeft}px;"
	on:mouseenter={() => faceFocused.set(i)}
>
	<svg viewBox="0 0 21 21" class="transform-scale">
		<text x="50%" y="78%" text-anchor="middle">{emoji}</text>
	</svg>
</div>
