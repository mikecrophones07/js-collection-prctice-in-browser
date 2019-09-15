'use strict';

function collectSameElements(collectionA, collectionB) {
  var results = [];
  // var results = '';
  collectionA.forEach(element1 => {
    collectionB.forEach(element2 => {
      if(element1==element2){
        results.push(element1);
      }
    })
  });
  return results;
}
