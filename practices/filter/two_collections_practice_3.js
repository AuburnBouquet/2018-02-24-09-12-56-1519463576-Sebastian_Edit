'use strict';
var choose_no_repeat_number = require("../../practices/filter/choose_no_repeat_number.js");

function choose_divisible_integer(collection_a, collection_b) {
  var collection_c = [];
  var temp;
  for(var i = 0; i < collection_a.length; i++){
    temp = collection_a[i];
    for(var j = 0; j < collection_b.length; j++){
      if (temp % collection_b[j] === 0){
        collection_c.push(temp);
      }
    }
  }
  return choose_no_repeat_number(collection_c);
}

module.exports = choose_divisible_integer;
