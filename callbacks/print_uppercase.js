
var getHTML = require('../http-functions');

function printUppercase (html) {
  console.log(html.toUpperCase());
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

console.log(getHTML(requestOptions, printUppercase));