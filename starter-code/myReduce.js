// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue) {
  var initialIndex;
  var returnValue;
  if (initialValue === undefined) {
    initialIndex = 1;
    returnValue = arr[0];
  }
  else {
    initialIndex = 0;
    returnValue = initialValue;
  }
  for (var i = initialIndex; i < arr.length; i++) {
    returnValue = callback(returnValue, arr[i], i, arr);
  }
  return returnValue;
}


/*
 Best if you don't code out here.
 If you want to check your code, use tests or `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
