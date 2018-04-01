'use strict';

function get_union(collection_a, collection_b) {
  var i;
  var collection_c = [];
  for(i = 0; i < collection_a.length; i++){
    collection_c.push(collection_a[i]);
  }
  for(i = 0; i < collection_b.length; i++){
    var temp = collection_b[i];
    var flag = true;
    for(var j = 0; j < collection_c.length; j++){
      if(temp === collection_c[j]) {
        flag = false;
        break;
      }
    }
    if(flag) collection_c.push(temp);
  }
  return collection_c;
}

module.exports = get_union;

