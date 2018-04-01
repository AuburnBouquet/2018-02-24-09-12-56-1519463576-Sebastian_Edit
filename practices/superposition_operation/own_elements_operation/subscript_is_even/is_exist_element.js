'use strict';
var is_exist_element = function(collection,element){
  var flag = 0;

  for(var i = 0; i < collection.length; i += 2){
    if(collection[i] === element) {
      flag = 1;
      break;
    }
  }

  if(flag === 1) return true;
  else return false;
};
module.exports = is_exist_element;
