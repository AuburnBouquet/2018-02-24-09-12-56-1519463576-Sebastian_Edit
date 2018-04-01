'use strict';

function collect_last_element(collection) {
  return collection.pop(); /* pop()方法 将删除数组的最后一个元素，把数组长度减 1，并且返回它删除的元素的值。
                              如果数组已经为空，则 pop() 不改变数组，并返回 undefined 值。*/
}

module.exports = collect_last_element;
