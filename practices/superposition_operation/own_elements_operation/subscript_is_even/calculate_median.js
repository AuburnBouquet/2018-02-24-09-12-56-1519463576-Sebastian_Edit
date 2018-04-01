'use strict';
var calculate_median = function(collection){
  var len = collection.length;
  rank_desc(collection); // 对数组中的元素进行排序
  var x = Math.floor(len / 2);

  if(x % 2 !== 0)  // 说明数组中共有偶数个元素，因此，第x个元素就是所有“第偶数个元素组成数组”的中位数
    return collection[x];
  if(x % 2 === 0)  // 说明数组中共有奇数个元素，因此，第x-1、x+1个元素的加权平均就是所有“第偶数个元素组成数组”的中位数
    return (collection[x-1] + collection[x+1]) / 2;

};

var rank_desc = function(collection){ // 从小到大排序
  var len = collection.length;

  for(var i = 0; i < len; i++){
    for(var j = 0; j < len - 1 - i; j++){
      if(collection[j] > collection[j+1]){
        var temp = collection[j]; collection[j] = collection[j+1]; collection[j+1] = temp;
      }
    }
  }

  return collection;
};

module.exports = calculate_median;
