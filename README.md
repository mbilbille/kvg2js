# kvg2js

Folks working on [KanjiVG](http://kanjivg.tagaini.net/) are doing an amazing job to provide a full set of SVG files. Playing with SVG in JavaScript is easy, but playing directly with JS or JSON objects is even easier and faster. That is why `kvg2js` exists, a simple tiny tool that converts and minimizes KanjiVG SVG into JS and JSON files.

It has been initially designed for [DrawMeAKanji](http://www.drawmeakanji.com/) to speed up and minimize the amount of data loaded, but what? It might help you as well :)

It is still quite in alpha stage right now, but it should do the job...

## Installation

`npm install kvg2js -g`

## Usage

`kvg2js [DIRECTORY]`

Where DIRECTORY is the path to the directory holding all the SVG files. This will loop over all files and save new files in a subdirectory.

### Options

To come soon; to either convert in JS or JSON, in single or separated files, etc.

### License

`kvg2js` was created by [Matthieu Bilbille](http://github.com/mbilbille) and released under the [MIT License](http://github.com/mbilbille/kvg2js/blob/master/LICENSE).
