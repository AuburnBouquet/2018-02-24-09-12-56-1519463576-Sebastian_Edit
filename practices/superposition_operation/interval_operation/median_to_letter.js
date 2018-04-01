'use strict';

function median_to_letter(collection) {
  var len = collection.length;
  var i = Math.ceil(len / 2);
  var temp = collection[i];

  if (temp > 26 && temp % 2 !== 0){
    var j1 = (temp - 0.5)/ 26; var k1 = temp % 26;
    return (String.fromCharCode(96 + j1) + String.fromCharCode(96 + k1));
  }

  else if (temp > 26 && temp % 2 === 0){
    var j1 = (temp - 0.5)/ 26;
    return (String.fromCharCode(96 + j1) + String.fromCharCode(122));
  }

  else  return String.fromCharCode(temp);
  return temp;
}

module.exports = median_to_letter;
