
// countLetters()
// count unique characters and their frequency in the string passed.
// return an object with keys represented by each of the letters found and the number of times found as value.

/*
V1.0
1. Except for spaces, I will not validate the string contents to see how jscript reacts when creating a key.
2. The function will be case-insensitive and will return the object with upper case letters.
3. I will do this in two loops, I will first initialize the object with the keys and values of 0 so we have
   something to add up to in the next run.
*/

function countLetters(str) {
  var noSpaces = str.split(" ").join("").toUpperCase();
  var stringStats = {};

  // We make a first run through the string and take the letters in it and initialize the object with a 0 count.
  for (var i = 0; i < noSpaces.length; i++) {
    // Found a way to create a dynamic key with brackets ---> obj[variableReference]
    stringStats[noSpaces[i]] = 0;
  }

  // Once we have the object initialized with zeros we can loop again to finish the count.
  for (i = 0; i < noSpaces.length; i++) {
    stringStats[noSpaces[i]] += 1;
  }

  return stringStats;
}

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("Lorem Ipsum whatevaaaaaaaaaaaa!!!"));
console.log(countLetters("Supercalifragilisticoespialidoso."));
console.log(countLetters("The big brown fox jumped over the lazy dog."));
// As I suspected special characters need to be escaped or else the function explodes.
// The example below brings up another weird effect. Run it to see.
console.log(countLetters("\{\}|:\"<>?\"\}"));
console.log(countLetters("~!@#$%^&*()_+"));
console.log(countLetters("`1234567890-="));
// Escaped the backslash
console.log(countLetters("qwertyuiop[][\\asdfghjkl;'zxcvbnm,./"));