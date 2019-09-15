'use strict';

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
      var toBeDeleted;
      var tempRes = new Object();
      var tempArr = element.split(format);
      results.forEach(keyValue => {
        if(keyValue.name==tempArr[0]){
          tempRes = setObjectValues(tempArr[0], Number(tempArr[1]) + keyValue.summary);
          toBeDeleted = keyValue;
        }
        else{
          tempRes = setObjectValues(tempArr[0], Number(tempArr[1]));
        }
      });
      results.delete(toBeDeleted);
      results.add(tempRes);
    }
  });
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
    name: keys,
    summary: counts
  };
  return tempObj;
}
