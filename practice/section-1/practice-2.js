'use strict';

function collectSameElements(collectionA, collectionB) {
  var results = new Set();
  collectionA.forEach(element1 => {
    collectionB.forEach(element2 => {
      element2.forEach(element3 => {
        if(element3 == element1){
          results.add(element3);
        }
      })
    })
  });
  return Array.from(results);
}
