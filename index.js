var morse = require('./morse.js');

var encode = function(str) {
  var encoded = str.toUpperCase()
    .split("")
    .map(function(char) {
      return morse[char];
    })
    .join(" ");
  return encoded.concat("\n");
};

var printWorse = function(worseString) {
  var worseArray = worseString.split("");
  for (var i = 0; i < worseArray.length; i++) {
    (function(index) {
      setTimeout(function() {
        process.stdout.write(worseArray[index]);
      }, 500 * i);
    })(i);
  }
}

var input = "I am the worse";
var encoded = encode(input);
return printWorse(encoded);


/*
 * TODO:
 * Handle unsupported characters!
 * Beep!
 * Flash the light!
 * Decoder!
 */
