<script>
	import FaceToEmojiWidget from '$lib/widget/FaceToEmoji/FaceToEmojiWidget.svelte';
	import { onMount } from 'svelte';

	let loaded = false;
	onMount(() => {
		loaded = true;
	});
</script>

{#if loaded}
	<FaceToEmojiWidget />
{/if}
