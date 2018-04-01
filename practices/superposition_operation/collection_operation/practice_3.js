'use strict';

function hybrid_operation_to_uneven(collection) {
  var temp = 0;

  for(var i in collection) {
    if (collection[i] % 2 !== 0) {
      temp += (collection[i] * 3) + 5;
    }
  }
  return temp;
}

module.exports = hybrid_operation_to_uneven;

