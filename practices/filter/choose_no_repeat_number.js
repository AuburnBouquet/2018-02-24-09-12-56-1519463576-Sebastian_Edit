'use strict';

function choose_no_repeat_number(collection) {
  var i;
  var result = [];
  for(i = 0; i < collection.length; i ++) {
    var flag = true;
    var temp = collection[i];
    for(var j = 0; j < result.length; j ++) {
      if(temp === result[j]) {
        flag = false;
        break;
      }
    }
    if(flag) {
      result.push(temp);
    }
  }
  return result;
}

module.exports = choose_no_repeat_number;
