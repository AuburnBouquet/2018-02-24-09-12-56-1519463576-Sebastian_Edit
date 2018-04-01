'use strict';

function compute_average(collection) {
  var avg = 0;
  for(var i = 0;i<collection.length;i++){

    avg += parseFloat(collection[i]);
  }
  return avg / collection.length;

}

module.exports = compute_average;

