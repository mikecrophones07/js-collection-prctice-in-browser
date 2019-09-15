'use strict';

function countSameElements(collection) {
  var distinctValues = new Set(collection);
  var results = new Set();

  Array.from(distinctValues).forEach(element => {
    var tempObj = new Object();
    var duplicateCounts = 0;
    collection.forEach(elements2 => {
       duplicateCounts = duplicateCounts + getCountDuplicates(duplicateCounts, element, elements2);
    })
    tempObj = {
      key: element,
      count: duplicateCounts
    };
    results.add(tempObj);
  })

  return Array.from(results);
}

function getCountDuplicates(counts, elem1, elem2){
  if(elem1==elem2){
    return 1;
  }
  return 0;
}
