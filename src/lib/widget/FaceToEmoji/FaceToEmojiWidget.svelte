<script lang="ts">
	//svelte
	import { fade } from 'svelte/transition';

	//components
	import InputDropzone from '$lib/common/Input/InputDropzone.svelte';
	import WidgetWraper from '$lib/common/Widget/WidgetWraper.svelte';
	import EmojiDisplayer from '$lib/widget/FaceToEmoji/EmojiDisplayer.svelte';

	//types
	import type { CleanedAnnotation } from './types';

	//helpers
	import { extractAndCleanFacesAnnotations, getResponseFromGoogleVision } from './helpers';

	//states
	let isLoading: boolean = false;
	let error: string = '';
	let output: Array<CleanedAnnotation> = [];
	let outputJson: string;

	async function onSelectFile(file) {
		if (!file) {
			return;
		}
		isLoading = true;
		error = '';

		try {
			const res = await getResponseFromGoogleVision(file);
			// Reset values
			isLoading = false;
			output = [];

			if (res.status == 200) {
				const data = await res.json();
				const annotations = data.responses[0]?.faceAnnotations;

				if (annotations) {
					//analysis emotions
					output = extractAndCleanFacesAnnotations(annotations);
					outputJson = JSON.stringify(output, null, 2);
				} else {
					error = '🤔 : There is no face here right ?';
				}
			} else {
				error = 'TODO: anticipate all other cases of error';
			}
		} catch (error) {
			error = 'TODO: anticipate all other cases of error : {error}';
		}
	}
</script>

<WidgetWraper>
	<svelte:fragment slot="input">
		<InputDropzone
			{onSelectFile}
			{isLoading}
			onError={(e) => (error = e)}
			label="Drag image with face(s) here 🙃"
			let:imgSrc
		>
			{#if imgSrc}
				{#key imgSrc}
					<EmojiDisplayer {output} {isLoading} {error}>
						<img in:fade src={imgSrc} class="pointer-events-none shadow mx-auto max-h-44" alt="" />
					</EmojiDisplayer>
				{/key}
			{/if}
		</InputDropzone>
	</svelte:fragment>
</WidgetWraper>
