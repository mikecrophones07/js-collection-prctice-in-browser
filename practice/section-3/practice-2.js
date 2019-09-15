'use strict';

function createUpdatedCollection(collectionA, objectB) {
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