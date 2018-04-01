'use strict';
var number_map_to_word_over_26 = function(collection){
  var temp;
  var result = [];
  for(var i = 0; i< collection.length; i++){
    temp = collection[i];
    if(temp > 26 && temp % 26 !== 0){
      var j1 = (temp - 0.5) / 26;
      var k1 = temp % 26;
      result.push(String.fromCharCode(96 + j1) + String.fromCharCode(96 + k1));
    }
    else if(temp > 26 && temp % 26 === 0){
      var j2 = (i - 0.5) / 26;
      result.push(String.fromCharCode(96 + j2) + String.fromCharCode(122));
    }
    else result.push(String.fromCharCode(96 + temp));
  }

  return result;
};

module.exports = number_map_to_word_over_26;
