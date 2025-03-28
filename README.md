# Hugging Face Widget w/ Google Cloud Vision API

![](https://helium.eu-central-1.linodeobjects.com/folder/huggingface_1.gif)

## Project

The purpose was to transform data fetched from a face detection AI _Google Cloud Vision_.
I used positions and _sentiments_ of faces detected by the AI to create a layer containing emojis overlaying the faces.

## To go further

For each sentiment (in a list of 4: joy, anger, sorrow, surprise) _Google Cloud Vision_ provides a degree of likelihood. I converted these degrees into emojis. My goal in further work is to add granularity in the emojis selection, by studying different ways of combining sentiments. Even though _Rekognition_ could discriminate between 9 different sentiments, I found that one of its drawback was that its outputs tend to be more polarized (e.g. _99.3% Happy_, when there is only one little smile).
