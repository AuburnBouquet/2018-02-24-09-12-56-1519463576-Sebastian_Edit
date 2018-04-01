'use strict';

function hybrid_operation_to_uneven(collection) {
  var temp;
  var result = [];

  for(var i in collection) {
    if (collection[i] % 2 !== 0) {
      temp = (collection[i] * 3) + 2;
      result.push(temp);
    }
  }
  return result;
}

module.exports = hybrid_operation_to_uneven;

