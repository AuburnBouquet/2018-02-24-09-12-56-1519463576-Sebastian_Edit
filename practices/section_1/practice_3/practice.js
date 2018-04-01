function collect_same_elements(collection_a, object_b) {
  var x;
  var result = [];
  var temp = object_b.value.toString().split(','); // toSting()!!!

  for(var i = 0; i < collection_a.length; i++){
    x = collection_a[i];
    for(var j = 0; j < temp.length; j++){
        if(x === temp[j]){
          result.push(x);
        }
      }

  }

  return result ;
}

module.exports = collect_same_elements;
