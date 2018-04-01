'use strict';

function average_to_letter(collection) {
  var x = 0;
  var result;
  for(var i = 0;i<collection.length;i++){
    x += parseFloat(collection[i]);
  }
  var avg = Math.ceil(x/ collection.length);
  return result = String.fromCharCode(96 + avg);
}

module.exports = average_to_letter;

