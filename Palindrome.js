
function palindrome(str) {
  var modifiedStr = "";
  for(var i = 0 ; i < str.length ; i++)
  {
    if(str.charAt(i).match(/[a-z]/i) || str.charAt(i).match(/\d+/g))
      modifiedStr += str.charAt(i).toLowerCase() ;
  }

  var firstHalf = "" ;
  var secondHalf = "" ;

  console.log(modifiedStr) ;

  if(modifiedStr.length%2 === 0)
  {

    firstHalf = modifiedStr.slice(0 , (modifiedStr.length/2)) ;
    secondHalf = modifiedStr.slice(modifiedStr.length/2 , modifiedStr.length) ;
    console.log(secondHalf) ;
    secondHalf = reverseString(secondHalf) ;

    console.log(firstHalf+"\n"+secondHalf) ;

    for(var j = 0 ; j < firstHalf.length ; j++){
      if(firstHalf.charAt(j) === secondHalf.charAt(j))
        continue ;
      else
        return false ;
    }
  }
  if(modifiedStr.length%2 != 0)
  {
    firstHalf = modifiedStr.slice(0 , (modifiedStr.length/2)) ;
    secondHalf = modifiedStr.slice(modifiedStr.length/2+1 , modifiedStr.length) ;
    secondHalf = reverseString(secondHalf) ;

    console.log(firstHalf+"\n"+secondHalf) ;

    for(var k = 0 ; k < firstHalf.length ; k++){
      if(firstHalf.charAt(k) === secondHalf.charAt(k))
        continue ;
      else
        return false ;
      }
  }
  return true ;

}


function reverseString(str) {
  var newStr = "";
  for(var i = str.length-1 ; i >= 0 ; i--)
  {
    newStr += str.charAt(i) ;
  }
  return newStr;
}

palindrome("1 eye for of 1 eye.");
