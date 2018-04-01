function count_same_elements(collection) {
  var result = [];
  var temp1, temp2;

  for(var i in collection){
    var count = 0;
    temp1 = collection[i];
    if(temp1 !== temp2) {
      for (var j in collection) {
        if (temp1 === collection[j]) {
          count++;
        }
      }
      temp2 = temp1;
      result.push({"key": temp1, 'count': + count});
    }
  }

  return result;
}

module.exports = count_same_elements;
