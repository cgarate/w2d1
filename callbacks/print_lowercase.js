
var getHTML = require('../http-functions');

function  () {

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

console.log(getHTML(requestOptions, printHTML));