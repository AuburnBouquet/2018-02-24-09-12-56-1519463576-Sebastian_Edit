'use strict';
var choose_no_repeat_number = require("../../practices/filter/choose_no_repeat_number.js");

function choose_no_common_elements(collection_a, collection_b) {
  var hash = {}; // 把 collection_b 转化成object
  var collection_c = [];
  for(var i = 0; i < collection_b.length; i++){
    hash[collection_b[i]] = true; // 结果：{ a : true, d : true, e : true, f : true }
  }

  for(var i = 0; i < collection_a.length; i++){
    if(typeof hash[collection_a[i]] === "undefined"){
      // 比较
      collection_c.push(collection_a[i]);
    }
  }

  return choose_no_repeat_number(collection_c);
}

module.exports = choose_no_common_elements;
