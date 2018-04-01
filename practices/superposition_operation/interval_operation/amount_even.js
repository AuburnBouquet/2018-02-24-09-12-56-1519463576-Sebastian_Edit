'use strict';

function amount_even(collection) {
  var sum = 0;

  for(var i in collection) {
    if (collection[i] % 2 === 0) {
      sum += collection[i];
    }
  }
  return sum;
}

module.exports = amount_even;
