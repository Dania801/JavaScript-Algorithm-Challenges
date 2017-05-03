
function truncateString(str, num) {
  var newLength = num ;
  var newStr = "" ;
  if(num > 3)
  {
    newLength = num - 3  ;
  }


  if(num < str.length)
  {
    if(str.charAt(newLength) == '-')
    {
      newStr += str.slice(0,newLength) + "...";
    }
    else
    {
        newStr += str.slice(0,newLength) + "...";
    }
  }
  else
  {
    newStr = str ; 
  }

  return newStr;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
