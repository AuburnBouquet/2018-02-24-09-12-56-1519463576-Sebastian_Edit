'use strict';

function compute_median(collection) {
  var len = collection.length;
  var flag;
  collection.sort(function(a,b){ return a - b; });

  if(len % 2 !== 0) flag = 1;
  else flag = 2;

  if(flag === 1){
    return collection[(len - 1)/2];
  }
  if(flag === 2){
    var lowMiddle = Math.floor((len - 1) / 2);
    var highMiddle = Math.ceil((len - 1) / 2);
    return (Number(collection[lowMiddle]) + Number(collection[highMiddle])) / 2;
  }

}

module.exports = compute_median;


