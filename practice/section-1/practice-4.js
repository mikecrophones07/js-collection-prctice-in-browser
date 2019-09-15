'use strict';

function collectSameElements(collectionA, objectB) {
  var results = new Set();
  collectionA.forEach(element1 => {
    objectB.value.forEach(element2 => {
      if(element1.key == element2){
        results.add(element1.key)
      }
    })
  });
  return Array.from(results);
}
