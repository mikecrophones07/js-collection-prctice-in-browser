'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var finalSet = collectionA;
  var ctr = 0;

  collectionA.forEach(value => {
    objectB.value.forEach(compareVal => {
      if(value.key==compareVal){
        
        var object = new Object ({
          key: compareVal, 
          count: value.count - 1
        });
        finalSet = replaceAt(finalSet, ctr, object);
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
