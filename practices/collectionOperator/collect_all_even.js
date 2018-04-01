'use strict';

function collect_all_even(collection) {
  var i;
  var collection_c = [];
  for(i = 0; i < collection.length; i++){
    if (collection[i] % 2 === 0) {
      collection_c = collection_c.concat(collection[i]); //concat()：用于连接数组，但不会改变现有数组，仅仅会返回一个副本
}
  }
  return collection_c;
}

module.exports = collect_all_even;
