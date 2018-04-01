function collect_same_elements(collection_a, collection_b) {
  var temp;
  var result = [];
  for(var i = 0; i < collection_a.length; i++){
    temp = collection_a[i];
    for(var j = 0; j < collection_b.length; j++){
      for(var k = 0; k < collection_b[j].length; k++){
        if(temp === collection_b[j][k]){
          result.push(temp);
        }
      }
    }
  }

  return result;
}

module.exports = collect_same_elements;
