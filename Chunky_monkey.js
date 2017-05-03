
function chunkArrayInGroups(arr, size) {
  var index = size ;
  var newArray = [] ;
  var subArray = [] ;

  for(var i = 0 ; i < arr.length ; i+=size)
  {
    subArray = arr.slice(i , index) ;
    index += size ;
    console.log(subArray) ;
    newArray.push(subArray) ;
  }

  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
