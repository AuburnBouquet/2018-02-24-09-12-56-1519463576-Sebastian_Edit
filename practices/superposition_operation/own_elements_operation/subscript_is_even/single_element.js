'use strict';
var single_element = function(collection){
  var result1 = no_repeat(collection); // 此时 result1 = [ 1, 2, 3, 5, 6, 21, 43, 12 ]
  var result2 = [];
  for(var i = 0; i < result1.length; i ++){
    for(var j = 0; j < collection.length; j ++){  // [1, 2, 3, 2, 5, 6, 21, 43, 12, 5]
      if(result1[i] === collection[j] && j % 2 !== 0){
        result2.push(collection[j]);
      }
    }
  } // 此时 result2 = [ 2, 2, 5, 6, 43 ]

   for(var k in result2){
    var temp = result2[k];
    var mark = k;
    for(var l in result2){
      if(temp === result2[l] && l !== mark){
        result2.splice(mark, 1);
        result2.splice(l - 1, 1);
      }
    }
  }  // 此时 result2 = [ 5, 6, 43 ]
  if(result2.length === 1) return []; // 如果最后result2数组里只有一个元素，说明原result2数组中全部为同一个元素！
  else return result2;
};

function no_repeat(array){
  var result = [];
  for(var i in array){
    var flag = true;
    var temp = array[i];
    for(var j in array){
      if(temp === result[j]){
        flag = false;
        break;
      }
    }
    if(flag){
      result.push(temp);
    }
  }
  return result;
}

module.exports = single_element;
