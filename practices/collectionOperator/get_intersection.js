'use strict';

function get_intersection(collection_a, collection_b) {
  var collection = [];
  for(var i = 0; i < collection_b.length; i ++) {
    var temp = collection_b[i];  // 取值
    for(var j = 0; j < collection_a.length; j ++) {
      if(temp === collection_a[j]) { // 比较两元素是否相同
        collection.push(temp);
        break;
      }
    }
  }
  return collection;
}

module.exports = get_intersection;
