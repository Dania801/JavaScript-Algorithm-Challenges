
function slasher(arr, howMany) {
  var i = 0 ;
  var fixedLength = arr.length ;
  while (i < fixedLength && i !== howMany)
  {
    console.log(i + "  " + arr.length + "  " + howMany) ;
    arr.shift() ;
    i++;
  }
  console.log(arr) ;
  return arr;
}

slasher([1, 2, 3 ,4], 9)
