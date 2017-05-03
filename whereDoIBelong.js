
function getIndexToIns(arr, num) {
  var sortedArray = arr.sort(function(a,b){
    return a-b ;
  });

  var index = 0 ;
  var flag = false ;
  console.log(sortedArray) ;
  for(var i = 0 ; i < arr.length ; i++)
  {
    if(arr[i]>= num){
      index = i ;
      flag = true ;
      break ;
    }
  }
  if (index === 0 && flag === false)
    index = arr.length ;
  return index ;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
