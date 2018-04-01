'use strict';

function get_integer_interval(number_a, number_b) {
  var collection_c = [];
  var i;
  if(number_a < number_b){
    for(i = number_a; i <= number_b; i++) {
      collection_c.push(i);
    }
  }

  if(number_a > number_b){
    for(i = number_a; i >= number_b; i--) {
      collection_c.push(i);
    }
  }

  if(number_a === number_b) {
    i = number_a;
    collection_c.push(i);
  }
  return collection_c;
}

module.exports = get_integer_interval;

