# Hugging Face Widget w/ Google Cloud Vision API

![](https://helium.eu-central-1.linodeobjects.com/folder/huggingface_1.gif)

## Project

The purpose was to transform data fetched from a face detection AI _Google Cloud Vision_.
I used positions and _sentiments_ of faces detected by the AI to create a layer containing emojis overlaying the faces.

## Obstacles encountered

- Layer selection (CSS + SVG vs. Canvas)
- How to call the API in a secure way
- Several unsuccessful tests on the display of textual data below the image
- I wasn't sure how to code the widget components after I analysed the code available in the HUB.
- Tailwind is not ideal with Svelte, compared to SCSS, but some nice and interesting discoveries/features in its use.

## To go further

For each sentiment (in a list of 4: joy, anger, sorrow, surprise) _Google Cloud Vision_ provides a degree of likelihood. I converted these degrees into emojis. My goal in further work is to add granularity in the emojis selection, by studying different ways of combining sentiments. Even though _Rekognition_ could discriminate between 9 different sentiments, I found that one of its drawback was that its outputs tend to be more polarized (e.g. _99.3% Happy_, when there is only one little smile).

The code is clearly improvable, as it's a hybrid between what you did for the widgets and the limited need for the exercise. I may have spent a bit too much time on this.

## Observation attached

I saw that you use `className` to pass `class` in components but I can suggest to use `{$$props.class}` which requires fewer lines of code in the child component.
