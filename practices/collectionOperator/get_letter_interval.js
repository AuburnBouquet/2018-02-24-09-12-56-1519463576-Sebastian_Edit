'use strict';

function get_letter_interval(number_a, number_b) {
  var collection_c = [];
  var i;
  if(number_a < number_b){
    for(i = number_a; i<= number_b; i++){
      collection_c.push(String.fromCharCode(97 + i - 1)); //fromCharCode()方法：将十进制ASCII码转换成对应的字符
    }
  }

  if(number_a > number_b){
    for(i = number_a; i>= number_b; i--){
      collection_c.push(String.fromCharCode(97 + i - 1));
    }
  }

  if(number_a === number_b) collection_c.push(String.fromCharCode(97 + number_a - 1));

  return collection_c;
}

module.exports = get_letter_interval;
