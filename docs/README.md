## What does TDOV mean?
Trans Day of Visibility!

### What is this?
It will look like a blank site for every day except TDOV (March 31). On TDOV, it will change into its active variant with words of encouragement, links to resources, and other useful and/or cheerful things.

### Can't Wait? Activate it yourself!
It's possible to see all of this w/o it being TDOV by calling the child function with a date that refers to March 31. It does consume UNIX timestamps so do note this.

#### Quick Activation Script
If it is not March 31st, you can call the function that checks the day with a date object that **is** March 31st. Open the developer console in the browser of your choice and type the following:
```js
// Months are 0-indexed in JS/TS
let a = new Date(2023, 2, 31, 9, 0, 0)
checkTime(a)
```
Then the site should be good to go!

### Usage Guide
* Click "Enter" to access the site.
* The volume icon can be clicked to play the message on the screen.
* The arrows beneath the message box control which part of the overarching message to play.
* Resources will be available at the end.
* (Recommended) Use full-screen mode in browsers. Due to media queries to support smaller screen devices, desktop versions will uptake the changes and the message bar will be further towards the center of the page.

## Known Issues
Due to the Audio API in browsers being asynchronous, playing the audio consecutively with every message swap is very difficult.

My microphone picked up on my breathing so you'll hear puffs of air. I don't have a filter, just the mic itself.

## Credits
Music: https://www.purple-planet.com

VA: Myself
