<script>
	import Seo from '$lib/common/Meta/SEO.svelte';
	import FaceToEmojiWidget from '$lib/widgets/FaceToEmoji/FaceToEmojiWidget.svelte';
	import { onMount } from 'svelte';

	let loaded = false;
	onMount(() => {
		loaded = true;
	});
</script>

<Seo />

{#if loaded}
	<FaceToEmojiWidget />
{/if}
