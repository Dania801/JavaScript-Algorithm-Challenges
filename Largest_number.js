
function largestOfFour(arr) {
  var largest = Number.NEGATIVE_INFINITY ;
  var largestArray = [];
  for(var i = 0 ; i < arr.length ; i++)
  {
    for(var j = 0 ; j < arr[i].length ; j++)
    {
      if(arr[i][j] > largest){
        largest = arr[i][j] ;
      }
    }
    console.log(largest) ;
    largestArray.push(largest) ;
    largest = Number.NEGATIVE_INFINITY ;
  }

  return largestArray;
}

console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
