'use strict';
function rank_by_two_large_one_small(collection){
  collection.sort(function (a, b){ return a - b;}); // 得到结果: [ 1, 2, 3, 4, 6, 8, 9, 10 ]

  for(var i = 0; i < collection.length - 2; i += 3){
    var temp = collection[i];
    collection[i] = collection[i+1];
    collection[i+1] = collection[i+2];
    collection[i+2] = temp;
  }

  return collection;
}
module.exports = rank_by_two_large_one_small;
