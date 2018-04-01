'use strict';
var choose_no_repeat_number = require("../../practices/filter/choose_no_repeat_number.js");

function choose_common_elements(collection_a, collection_b) {
  var i;
  var collection_c = [];
  var temp;
  for(i = 0; i < collection_a.length; i++){
    temp = collection_a[i];
    for(var j = 0; j < collection_b.length; j++){
      if(temp === collection_b[j]) {
        collection_c.push(temp);
        temp = undefined; //避免重复添加相同的元素
      }
    }
  }
  return choose_no_repeat_number(collection_c);
}

module.exports = choose_common_elements;
