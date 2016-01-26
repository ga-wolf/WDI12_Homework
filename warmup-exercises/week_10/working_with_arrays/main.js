var reverse = function (arr) {
  var reversedArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    reversedArr.push( arr[i] );
  }
  return reversedArr;
};

var flatten = function (arr) {
  var flatArray = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      for (var j = 0; j < arr[i].length; j++) {
        flatArray.push( arr[i][j] );
      }
    } else {
      flatArray.push( arr[i] );
    }
  }

  return flatArray;
};
