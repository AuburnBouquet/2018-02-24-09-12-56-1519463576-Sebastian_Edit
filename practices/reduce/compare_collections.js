'use strict';

function compare_collections(collection_a, collection_b) {
  var hash = {};
  var flag;

  for(var i = 0; i < collection_a.length; i++){
    hash[collection_a[i]] = true;
  }

  for(var i = 0; i < collection_b.length; i++){
    if(hash[collection_b[i]]) flag = true;
  }

  return flag;
}

module.exports = compare_collections;


