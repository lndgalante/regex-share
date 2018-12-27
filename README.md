# RegEx Share

### Preview

### Installation

Install through VS Code extensions. Search for `RegEx Share`

### Features

✅ Visualize your RegEx online in [RegExr](https://regexr.com)

✅ Generates example strings that matches your Regex

### Usage

1. Select your RegEx

2) Press CMD/CTRL + Shift + R

3. Or using Command Palette (CMD/CTRL + Shift + P) -> Share your RegEx

### RegEx Share Settings

#### regexShare.maxExampleCases (default: 12)

Max number of examples that matches the RegEx

#### regexShare.engine (default: "js")

RegExr currently supports JavaScript RegExp executed in your browser and PCRE via PHP. Valid options:

- "js" - Your browser's JavaScript engine is used to execute RegEx in an asynchronous worker using RegExp.exec()

* "pcre" - PHP 7.0.6 and PCRE 8.38 2015-11-23 are used to execute your pattern on our server

#### regexShare.tool (default: "explain")

Tools provide different ways of working with or exploring your results. Valid options:

- "replace" - The Replace tool replaces matches with a specified string or pattern.

- "list" - The List tool lists all found matches.

- "details" - The Details tool displays the full text of a match and its capture groups.

- "explain" - The Explain tool displays a detailed breakdown of the Expression.

### To Do

- [x] Shorcut to share the Regex i.e CMD + Shift + R

* [x] Configure how many example strings i.e "regexShare.maxCases": 10. By default is set to 12.

- [x] Configure what Regexr `tool` to use i.e "regexShare.tool": "explain".
      The tools are: replace, list, details, or explain (default).

* [x] Configure what Regexr `engine` to use i.e "regexShare.engine": "js".
      The engines are: pcre or js (default).

### Related Issues

- [ Generate short URLs via query string parameters](https://github.com/gskinner/regexr/issues/294)

### Contribute

Feel free to open issues or PRs!

### License

MIT © **[`Leonardo Galante`](https://leonardogalante.com)**
