function create_updated_collection(collection_a, object_b) {
  var value = Object.values(object_b); // [ [ 'a', 'd', 'e', 'f' ] ]
  var filter = [].concat.apply([],value); // [ 'a', 'd', 'e', 'f' ]
  var collection_c = count(collection_a);

  for(var k in filter) {
    var temp = filter[k];
    for (var i in collection_c){
      if (collection_c[i].key === temp) {
        var x = Math.floor(collection_c[i].count / 3);
        collection_c[i].count -= x;
      }
    }
  }
  return collection_c;
}

function count(collection){
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

module.exports = create_updated_collection;
