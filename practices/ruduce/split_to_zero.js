'use strict';

function spilt_to_zero(number, interval) {
  var result = [number];
  while(number > 0){
    if(number <= interval){ // 此时 number - interval 的结果为0或负数，需跳出循环
      var flag = true;
      break;
    }
    var temp = Number((number - interval).toFixed(1));
    result.push(temp);
    number = temp;
  }
  if(flag){
    result.push(Number((number - interval).toFixed(1)));
  }

  return result;
}

module.exports = spilt_to_zero;
