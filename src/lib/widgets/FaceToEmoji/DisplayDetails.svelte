<script lang="ts">
	import { slide } from 'svelte/transition';
	//types
	import type { Detail } from '$lib/types';
	import { flip } from 'svelte/animate';

	import {
		EmotionLikelihood,
		LikelihoodValueEnum,
		LikelihoodValueTranslation
	} from '$lib/widgets/FaceToEmoji/types';

	//states
	export let details: Detail[];
</script>

{#if details}
	<div transition:slide|local class="grid gap-1">
		{#each details as { label, value } (label)}
			<div
				class="flex justify-between text-sm  bg-gradient-to-r from-white {value ==
				LikelihoodValueEnum[5]
					? 'to-green-100'
					: value == LikelihoodValueEnum[4]
					? 'to-green-50'
					: value == LikelihoodValueEnum[3]
					? 'to-orange-50'
					: value == LikelihoodValueEnum[2]
					? 'to-orange-50'
					: value == LikelihoodValueEnum[1]
					? 'to-orange-100'
					: 'to-red-100'}"
				animate:flip={{ duration: 400 }}
			>
				<span class="capitalize ">{EmotionLikelihood[label]}</span>
				<span class="pr-1">{LikelihoodValueTranslation[value]}</span>
			</div>
		{/each}
	</div>
{/if}
