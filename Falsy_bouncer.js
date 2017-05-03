
function bouncer(arr) {
  var newArr = [] ;
  newArr = arr.filter(function(val){
    return val !== null ;
  });

  newArr = arr.filter(function(val){
    return val !== "" ;
  });

  newArr = arr.filter(function(val){
    return val !== undefined ;
  });

  newArr = arr.filter(function(val){
    return val !== 0 ;
  });

  newArr = newArr.filter(function(val){
   return val ;
 });

  return newArr ;
}

console.log(bouncer([null, null, null, null]));
