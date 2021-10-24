<script lang="ts">
	//svelte
	import { fade } from 'svelte/transition';

	//components
	import InputDropzone from '$lib/common/Input/InputDropzone.svelte';
	import WidgetWraper from '$lib/common/Widget/WidgetWraper.svelte';
	import EmojisLayer from '$lib/widgets/FaceToEmoji/EmojisLayer.svelte';
	import DisplayDetails from '$lib/widgets/FaceToEmoji/DisplayDetails.svelte';

	//types
	import type { CleanedAnnotation } from './types';
	import type { Detail } from '$lib/types';

	//helpers
	import {
		extractAndCleanFacesAnnotations,
		faceFocused,
		getResponseFromGoogleVision
	} from './helpers';

	//states
	let isLoading: boolean = false;
	let error: string = '';
	let output: Array<CleanedAnnotation> = [];
	let outputJson: string;
	let details: Detail[];

	async function onSelectFile(file) {
		if (!file) {
			return;
		}

		isLoading = true;
		faceFocused.set(null);
		error = '';

		try {
			//responses from API
			const res = await getResponseFromGoogleVision(file);

			// Reset values
			isLoading = false;
			output = [];
			outputJson = '';

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
			error = 'TODO: anticipate all other cases of error : ' + error;
		}
	}

	//reactivity
	$: details = output?.[$faceFocused]?.likelihoods;
</script>

<WidgetWraper title="Emoji motion" category="Face Detection" {error} {outputJson}>
	<svelte:fragment slot="input">
		<form in:fade={{ delay: 500 }}>
			<InputDropzone
				{onSelectFile}
				{isLoading}
				onError={(e) => (error = e)}
				label="Drag image with face(s) here 🙃"
				let:imgSrc
			>
				{#if imgSrc}
					<EmojisLayer {output} {isLoading} {error}>
						<img in:fade src={imgSrc} class="pointer-events-none shadow mx-auto max-h-44" alt="" />
					</EmojisLayer>
				{/if}
			</InputDropzone>
		</form>
	</svelte:fragment>

	<svelte:fragment slot="output">
		<DisplayDetails {details} />
	</svelte:fragment>
</WidgetWraper>
