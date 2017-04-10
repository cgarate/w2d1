
var getHTML = require('../http-functions');

function leetspeak (aString) {
  // Use a RegExp to find the letters and a function to custom replace them.
  var hacked = aString.replace(/a|e|o|l|s|t|[ck]|[er]|[you]/gi, function myFunction(x) {

    if (x === 'a')
      return '4';
    else if (x === 'e')
      return '3';
    else if (x === 'o')
      return '0';
    else if (x === 'l')
      return '1';
    else if (x === 's')
      return '5';
    else if (x === 't')
      return '7';
    else if (x === 'ck')
      return 'x';
    else if (x === 'er')
      return '0r';
    else if (x === 'you')
      return 'j00';
    else {
      return x;
    }
  })

  return hacked;
}

function print1337(html) {
  console.log(leetspeak(html));
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

console.log(getHTML(requestOptions, print1337));