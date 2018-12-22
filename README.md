# Regex Share

Share your RegEx online from your VSCode

## Idea

1. Select your regex in your editor

2) CMD + SHIFT + P - Share regex

3. Open user default browser at https://regexr.com/?expression={regex}&text={generatedText}&tool=explain

   Where `regex` is copied from the user selection and `generatedText` is a random string generated from the regex

4) To generate the string `generatedText` I found [randexp.js](https://github.com/fent/randexp.js) so we can make 3 to 5 random strings that matchs the regex
