'use strict';

function double_to_one(collection) {
  var filter = [].concat.apply([],collection);
  var result = [];
  for(var i = 0; i < filter.length; i++) {
    var flag = true;
    var temp = filter[i];
    for (var j = 0; j < result.length; j++) {
      if (temp === result[j]) {
        flag = false;
        break;
      }
    }
      if (flag) {
        result.push(temp);
      }
  }
  return result;
}

module.exports = double_to_one;
