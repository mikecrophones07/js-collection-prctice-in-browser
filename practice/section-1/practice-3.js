'use strict';

function collectSameElements(collectionA, objectB) {
  var results = new Set();
  collectionA.forEach(element1 => {
    objectB.value.forEach(element2 => {
      if(element1==element2){
        results.add(element1);
      }
    })
  });
  return Array.from(results);
}
