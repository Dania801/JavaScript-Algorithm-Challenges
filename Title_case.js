
function titleCase(str) {
  var wordsArray = str.split(' ');
  var capitalizedStr = "" ;

  for(var i = 0 ; i < wordsArray.length ; i++)
  {
    for(var j = 0 ; j < String(wordsArray[i]).length ; j++)
    {
      if(j === 0)
        capitalizedStr += String(wordsArray[i]).charAt(j).toUpperCase() ;
      else {
        if(String(wordsArray[i]).charAt(j).toLowerCase() === String(wordsArray[i]).charAt(j))
          capitalizedStr += String(wordsArray[i]).charAt(j) ;
        else {
          capitalizedStr += String(wordsArray[i]).charAt(j).toLowerCase() ;
        }
      }
    }
    capitalizedStr += " " ;
  }
 return capitalizedStr;
}

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
