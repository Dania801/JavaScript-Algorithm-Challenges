
function findLongestWord(str) {
  var longest = Number.NEGATIVE_INFINITY ;
  var wordsArray = str.split(' ') ;

  for(var i = 0 ; i < wordsArray.length ; i++)
  {
    if(wordsArray[i].length > longest)
      longest = wordsArray[i].length;
  }

  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
