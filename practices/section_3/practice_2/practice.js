function create_updated_collection(collection_a, object_b) {
  var value = Object.values(object_b); // [ [ 'a', 'd', 'e', 'f' ] ]
  var filter = [].concat.apply([],value); // [ 'a', 'd', 'e', 'f' ]

  for(var k in filter) {
    var temp = filter[k];
    for (var i in collection_a){
      if (collection_a[i].key === temp) {
        var x = Math.floor(collection_a[i].count / 3);
        collection_a[i].count -= x;
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
