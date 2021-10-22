import type { Coordonates } from '$lib/types';

// interfaces
export interface Likelihood {
	[key: string]: LikelihoodValueEnum;
}

export enum LikelihoodValueEnum {
	VERY_UNLIKELY,
	UNLIKELY,
	UNKNOWN,
	POSSIBLE,
	LIKELY,
	VERY_LIKELY
}

export enum EmotionLikelihood {
	joyLikelihood = 'joy',
	sorrowLikelihood = 'sorrow',
	angerLikelihood = 'anger',
	surpriseLikelihood = 'surprise'
}

// API Cloud Vision
export interface RequestBodyVision {
	requests: [
		{
			image: {
				content: string;
			};
			features: [
				{
					maxResults: number;
					type: 'FACE_DETECTION';
				}
			];
		}
	];
}

export interface FaceAnnotation extends Likelihood {
	[key: string]: any; //sorry
	// TODO: have time to copy @types/FacesAnnotations from Google Cloud Vision API
}

export interface CleanedAnnotation {
	positions: Array<Coordonates>;
	likelihoods: Array<{ label: string; value: LikelihoodValueEnum }>;
}
