<h1 align="center">
Regex Share
</h1>

> Gif here

## Features

- Share your RegEx online in [RegExr](https://regexr.com)
- Generates example strings that matches your Regex

## How to

1. Select your RegEx

2) Press the following sequence

   - macOS: CMD + SHIFT + P
   - Windows/Linux: CONTROL + SHIFT + P

3. Find `Share your Regex` and press ENTER

## To Do

- [ ] Shorcut to share the Regex i.e CMD + R

* [ ] Configure how many example strings i.e "regexShare.maxCases": 10. By default is set to 6.

- [ ] Configure what Regexr `tool` to use i.e "regexShare.tool": "explain".
      The tools are: replace, list, details, or explain (default).

* [ ] Configure what Regexr `engine` to use i.e "regexShare.engine": "js".
      The engines are: pcre or js (default).

## Rational

I spent quite some time copying and pasting RegEx to [RegExr](https://regexr.com) to documentate my [katas](https://github.com/lndgalante/codewars-katas) repository so I wanted to speed up this process.

1. Select your regex in your editor

2) CMD + SHIFT + P - Share regex

3. Open user default browser at https://regexr.com/?expression={regex}&text={generatedText}&tool=explain

   Where `regex` is copied from the user selection and `generatedText` is a random string generated from the regex

4) To generate the string `generatedText` I found [randexp.js](https://github.com/fent/randexp.js) so we can make 3 to 5 random strings that matchs the regex

### License

MIT © **[`Leonardo Galante`](https://leonardogalante.com)**
