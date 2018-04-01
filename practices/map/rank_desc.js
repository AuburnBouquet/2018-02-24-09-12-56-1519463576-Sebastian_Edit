'use strict';
var rank_desc = function(collection){
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

module.exports = rank_desc;
