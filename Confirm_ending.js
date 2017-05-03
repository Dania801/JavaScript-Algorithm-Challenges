
function confirmEnding(str, target) {
  var counter = 0 ;
  var flag = false ;
  var i = str.length-1 ;
  var j = target.length-1 ;


  while (str.charAt(i) == target.charAt(j))
  { console.log(i+str.charAt(i)+"\n")
    if(counter == target.length-1)
      flag = true ;
    counter ++ ;
    i-- ;
    j-- ;
  }
  return flag;
}

console.log(confirmEnding("Bastian", "ian"));
