'use strict';

function get_letter_interval_2(number_a, number_b) {
  var collection_c = [];
  var i;

  if(number_a < number_b){
    for(i = number_a; i<= number_b; i++){
      if(i > 26 && i % 26 !== 0) { // 在'z'之后重新进行循环
        var j1 = (i - 0.5) / 26;
        var k1 = i % 26;
        collection_c.push(String.fromCharCode(96 + j1) + String.fromCharCode(96 + k1));
      }
      else if(i > 26 && i % 26 === 0){
        var j2 = (i - 0.5) / 26;
        collection_c.push(String.fromCharCode(96 + j2) + String.fromCharCode(122));
      }
      else collection_c.push(String.fromCharCode(96 + i));
    }
  }

  if(number_a > number_b){
    for(i = number_a; i>= number_b; i--){
      if(i > 26 && i % 26 !== 0) { // 在'z'之后重新进行循环
        var j1 = (i - 0.5) / 26;
        var k1 = i % 26;
        collection_c.push(String.fromCharCode(97 + j1 - 1) + String.fromCharCode(97 + k1 - 1));
      }
      else if(i > 26 && i % 26 === 0){
        var j2 = (i - 0.5) / 26;
        collection_c.push(String.fromCharCode(97 + j2 - 1) + String.fromCharCode(122));
      }
      else collection_c.push(String.fromCharCode(97 + i - 1));
    }
  }

  if(number_a === number_b){
    i = number_b;
    if(i > 26 && i % 26 !== 0) { // 在'z'之后重新进行循环
      var j1 = (i - 0.5) / 26;
      var k1 = i % 26;
      collection_c.push(String.fromCharCode(97 + j1 - 1) + String.fromCharCode(97 + k1 - 1));
    }
    else if(i > 26 && i % 26 === 0){
      var j2 = (i - 0.5) / 26;
      collection_c.push(String.fromCharCode(97 + j2 - 1) + String.fromCharCode(122));
    }
    else collection_c.push(String.fromCharCode(97 + i - 1));
  }

  return collection_c;
}


module.exports = get_letter_interval_2;

