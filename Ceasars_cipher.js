function rot13(str) {
  var newStr = "" ;

  for(var i = 0 ; i < str.length ; i++){

      if(str.charAt(i).match(/[a-z]/i)){
        var currCharValue = str.charCodeAt(i);
        var newCharValue = ((currCharValue - 65 + 13) % 26 + 65) ;
        var newCharSymb = String.fromCharCode(newCharValue) ;
        newStr+= newCharSymb ;
        console.log(str.charAt(i) + "  " + currCharValue + "  " + newCharValue) ;
    }
    else{
      newStr += str.charAt(i) ;
    }
  }

  console.log(newStr) ;
  return newStr;
}

rot13("SERR PBQR PNZC");
