function collect_same_elements(collection_a, object_b) {
  var temp = object_b.value.toString().split(',');
  var result = new Array();
  var t = 0;
  for(var i in collection_a) {
    for(var j in temp) {
      if(collection_a[i].key == temp[j]) {
        result[t] = collection_a[i].key; // Or use: result.push(collection_a[i].key);
        t++;
      }
    }
  }
  return result;
}

module.exports = collect_same_elements;
