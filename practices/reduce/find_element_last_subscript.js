'use strict';

function calculate_elements_sum(collection, element) {
  var result;
  for(var i = collection.length - 1; i >= 0; i--){
    if(collection[i] === element) { result = i; break;}
  }
  return result;
}

module.exports = calculate_elements_sum;
