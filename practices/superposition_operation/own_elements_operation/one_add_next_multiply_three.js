'use strict';
function one_add_next_multiply_three(collection){
  var len = collection.length;
  for(var i = 0; i < len - 1; i++){
    collection[i] = (collection[i] + collection[i+1]) * 3;
  }
  collection.pop(); // 弹出最后一个数

  return collection;
}
module.exports = one_add_next_multiply_three;
