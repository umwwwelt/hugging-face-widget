# Hugging Face Widget w/ Google Cloud Vision API

![](https://helium.eu-central-1.linodeobjects.com/folder/huggingface_1.gif)

## Project

The idea was to capture face detection data from Google Cloud Vision API. Then create a layer over the image containing emojis overlaying the faces.

Then make the emoji match the _"feeling"_ detected by the AI.

## Obstacles encountered

- Layer selection (Css + svg vs. Canvas)
- How to call the API in a secure way
- Several unsuccessful tests on the display of textual data below the image
- Hesitation on the widget components following the analysis of the code available in the HUB
- Tailwind is not ideal with svelte vs. SCSS but some nice and interesting discoveries in its use.

## To go further

With more time it is possible to add granularity obviously in the emojis selection; _Rekognition_ in this sense is maybe better and to tell the truth : I went to _google/cloud-vision_ for ease of use (I already had an account with ~280$ of credits) but after several tests : _Rekognition_ still tends to be polarized on the results (e.g. _99.3% Happy_, when there is only one little smile)

The code is clearly improvable, as it's a hybrid between what you did for the widgets and the rather slight need for the exercise. I may have wasted some time on this.

## Observation attached

I saw that you use `className` to pass `class` in components but did you know about `{$$props.class}` ? ?
