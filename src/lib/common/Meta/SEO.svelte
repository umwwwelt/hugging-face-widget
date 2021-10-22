<script lang="ts">
	export let title = 'Hugging Face | Widget - Face to Emoji';
	export let description =
		"Example of a widget for Hugging Face ; based on Google Cloud Vision's API. It paste emoji(s) corresponding to the feeling analyzed by the AI over the face(s).";
	export let url = 'https://hugging-face-widget.vercel.app/';
	export let image = 'https://hugging-face-widget.vercel.app/og.png';
	export let imageType = 'png';
	export let type = 'article';
	export let locale = 'en_EN';
	export let localeAlternate = null; //ex: en_US
	export let twitterAccount = null; //ex: @bobby_12
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	{#if imageType}
		<meta property="og:image:type" content={imageType} />
	{/if}
	<meta property="og:locale" content={locale} />
	{#if localeAlternate}
		<meta property="og:locale:alternate" content={localeAlternate} />
	{/if}

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={image} />
	{#if twitterAccount}
		<meta property="twitter:site" content={twitterAccount} />
	{/if}
</svelte:head>
