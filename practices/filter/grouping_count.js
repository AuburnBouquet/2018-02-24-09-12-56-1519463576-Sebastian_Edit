'use strict';

function grouping_count(collection) {
  var re = {};
  var arr = [];

  for(var i=0,v,l = collection.length; v = collection[i],i<l; i++) {
    var rv = /^([0-9]+)(?:.+?(\d+))?/i.exec(v);
    if (!re[rv[1]])
      re[rv[1]] = 0;
    re[rv[1]] += rv[2] ? parseInt(rv[2], 10) : 1;
  }

  return re;
}

module.exports = grouping_count;
