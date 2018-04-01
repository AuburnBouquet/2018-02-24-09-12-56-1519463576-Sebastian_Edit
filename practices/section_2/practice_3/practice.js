function count_same_elements(collection) {
  var re = {};
  var arr = [];

  for(var i=0,v,l = collection.length; v = collection[i],i<l; i++)
  {
    var rv = /^([a-z]+)(?:.+?(\d+))?/i.exec(v);
    if (!re[rv[1]])
      re[rv[1]] = 0;
    re[rv[1]] += rv[2] ? parseInt(rv[2], 10) : 1;
  }
  var keys = Object.keys(re); // 获取re中的属性
  var count = Object.values(re); // 获取re中的属性值

  for(var j in keys){
    arr.push({"name": keys[j], "summary": + count[j]});
  }

  return arr;
}

module.exports = count_same_elements;
