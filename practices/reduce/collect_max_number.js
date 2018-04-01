'use strict';

function collect_max_number(collection) {
  var temp;
  for(var i = 0; i < collection.length; i++){
    temp = collection[i];
    for(var j = 0; j < collection.length; j++){
      if(temp < collection[j]){
        temp = collection[j];
      }
    }
  }

  return temp;
}

module.exports = collect_max_number;
