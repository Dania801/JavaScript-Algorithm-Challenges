
function mutation(arr) {
  var word = String(arr[0]) ;
  var subWord = String(arr[1]) ;
  var flag = true ;
  var i = 0 ;

  while(i < subWord.length && flag===true)
  {
    if((word.indexOf(subWord.charAt(i).toLowerCase())!= -1) || (word.indexOf(subWord.charAt(i).toUpperCase())!= -1))
    {
      flag = true ;
      console.log(subWord.charAt(i) + "   " + word.indexOf(subWord.charAt(i).toLowerCase()));
    }
    else
    {
      flag = false ;
      console.log(subWord.charAt(i) + "   " + word.indexOf(subWord.charAt(i).toLowerCase()));
    }
    i++ ;
  }

  return flag ;

}

mutation(["hello", "hey"]);
