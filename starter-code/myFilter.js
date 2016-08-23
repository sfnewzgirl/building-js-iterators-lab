// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Filter
function myFilter(arr, callback) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr )) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

/*
 Best if you don't code out here.
 If you want to check your code, use tests or `index.js`!
*/






// export this function (you can ignore this for now)
module.exports = myFilter;
