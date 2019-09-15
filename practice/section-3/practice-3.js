'use strict';

function createUpdatedCollection(collectionA, objectB) {
  return updatedCollections(countSameElements(collectionA), objectB);
}

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

function updatedCollections(collectionA, objectB) {
  var finalSet = collectionA;
  var ctr = 0;
  var minusCtr = 1;

  collectionA.forEach(value => {
    objectB.value.forEach(compareVal => {
      if(value.key==compareVal){
        if(minusCtr>3){
          minusCtr = 1;
        }
        var object = new Object ({
          key: compareVal, 
          count: value.count - minusCtr
        });
        finalSet = replaceAt(finalSet, ctr, object);
        minusCtr++;
      }
    })
    ctr++;
  })
  return finalSet;
}

function replaceAt(array, index, value) {
  const ret = array.slice(0);
  ret[index] = value;
  return ret;
}