
var getHTML = require('../http-functions');

function  () {

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

console.log(getHTML(requestOptions, printHTML));