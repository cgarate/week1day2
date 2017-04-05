
// getPosition()
// count unique characters and return their zero-based position in the string.
// return an object with keys represented by each of the letters found and the positions on the string.

/*
V1.0
1. I will not validate the string contents to see how jscript reacts when creating a key.
2. The function will be case-insensitive and will return the object with upper case letters.

*/

function getPosition(str) {

  var stringStats = { originalString : str};

  // We make a first run through the string and take the letters in it and initialize the object with an empty array.
  for (var i = 0; i < str.length; i++) {
    // Found a way to create a dynamic key with brackets ---> obj[variableReference]
    stringStats[str[i]] = [];
  }
  // Once we have the object initialized with empty arrays we can loop again to finish the count.
  for (i = 0; i < str.length; i++) {
    stringStats[str[i]] = stringStats[str[i]].concat(i);
  }

  return stringStats;
}

console.log(getPosition("lighthouse in the house"));
console.log(getPosition("Lorem Ipsum whatevaaaaaaaaaaaa!!!"));
console.log(getPosition("Supercalifragilisticoespialidoso."));
console.log(getPosition("The big brown fox jumped over the lazy dog."));
console.log(getPosition("\{\}|:\"<>?\"\}"));
console.log(getPosition("~!@#$%^&*()_+"));
console.log(getPosition("`1234567890-="));
// Escaped the backslash
console.log(getPosition("qwertyuiop[][\\asdfghjkl;'zxcvbnm,./"));