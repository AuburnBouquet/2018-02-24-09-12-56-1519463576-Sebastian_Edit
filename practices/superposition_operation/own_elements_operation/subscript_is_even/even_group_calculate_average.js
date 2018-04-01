'use strict';
var even_group_calculate_average = function(collection){
  var zero = [0];
  var step1 = collect_even_element(collection); //
  var step2 = even_number_judge(step1);  //
  var step3;
  if (step2.toString() !== zero.toString()) {
    step3 = numerical_digit_judge(step2);
    return step3;
  }
  else {
    return step2;
  }
};

function collect_even_element(array) { // 选出所有第偶数个元素
  var result1 = [];

  for(var i = 0; i < array.length; i++){
    if(i % 2 !== 0) result1.push(array[i]);
  }
  return result1;
};

function even_number_judge(array) {  // 选其中的偶数
  var flag = 0;
  var zero = [0];
  var result2 = [];
  for(var i in array){
    if(array[i] % 2 === 0){
      result2.push(array[i]);
      flag++;
    }
  }
  if(flag === 0) return zero;
  else return result2;
};

function numerical_digit_judge(array) { // 按位数分类并求平均值
  var array_1 = []; var array_2 = []; var array_3 = [];
  var result3 = [];
  var flag;

  for(var i = 0; i < array.length; i++){
    if(Math.floor(array[i] / 10) === 0) array_1.push(array[i]); // 个位数放进array_1
    else if(array[i] / 10 > 0 && Math.floor(array[i] / 10 ) < 10) array_2.push(array[i]); // 十位数放进array_2
    else /*(array[i] / 10 >= 10 && Math.floor(array[i] / 10 ) < 100)*/ array_3.push(array[i]); // 百位数放进array_3
  }
  if(array_1.length === 0 && array_2.length === 0 && array_3.length > 0) flag = 1;
  if(array_1.length > 0 && array_2.length > 0 && array_3.length > 0) flag = 2;
  if(flag === 1){
    result3.push(average(array_3));
    return result3;
  }
  if(flag === 2){
    result3.push(average(array_1)); result3.push(average(array_2)); result3.push(average(array_3));
    return result3;
  }
};

function average(collection) {  // 求平均数
  var avg = 0;
  for(var i = 0;i<collection.length;i++){

    avg += collection[i];
  }
  return (avg / collection.length);
}

module.exports = even_group_calculate_average;
