'use strict';

function createUpdatedCollection(collectionA, objectB) {
  return updatedCollections(countSameElements(collectionA), objectB);
}

function countSameElements(collection) {
  var distinctValues = new Set(collection);
  var results = new Set();

  Array.from(distinctValues).forEach(element => {
    var duplicateCounts = 0;
    var format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    var condition = element.match(format) ? true : false;
    if(condition==false){
      collection.forEach(elements2 => {
        duplicateCounts = duplicateCounts + getCountDuplicates(element, elements2);
      })
      results.add(setObjectValues(element, duplicateCounts));
    }
    else{
      var tempArr = element.split(format)
      results.add(setObjectValues(tempArr[0], Number(tempArr[1])));
    }
  })
  return Array.from(results);
}

function getCountDuplicates(elem1, elem2){
  if(elem1==elem2){
    return 1;
  }
  return 0;
}

function setObjectValues(keys, counts){
  var tempObj = new Object();
  tempObj = {
    key: keys,
    count: counts
  };
  return tempObj;
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
