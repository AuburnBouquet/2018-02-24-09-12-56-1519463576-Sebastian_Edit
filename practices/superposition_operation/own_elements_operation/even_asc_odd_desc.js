'use strict';
var even_asc_odd_desc = function(collection){
  var odd_array = [];
  var even_array = [];
  var result = [];

  for(var i in collection){
    if(collection[i] % 2 !== 0) odd_array.push(collection[i]);
    else even_array.push(collection[i]);
  }

  result = ascend(even_array); // 偶数数列升序
  result = result.concat(descend(odd_array)); // 奇数数列降序
  return result;
};

function ascend(array){ // 升序函数
  var len = array.length;
  for(var i = 0; i < len; i++){
    for(var j = 0; j < len - i - 1; j++){
      if(array[j] > array[j+1]){
        var temp = array[j]; array[j] = array[j+1]; array[j+1] = temp;
      }
    }
  }
  return array;
}

function descend(array){ // 降序函数
  var len = array.length;
  for(var i = 0; i < len; i++){
    for(var j = 0; j < len - i - 1; j++){
      if(array[j] < array[j+1]){
        var temp = array[j]; array[j] = array[j+1]; array[j+1] = temp;
      }
    }
  }
  return array;
}

module.exports = even_asc_odd_desc;
