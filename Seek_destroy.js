
function destroyer(arr) {
  var temp = [];
    for (var i = 1; i < arguments.length; i++) {
        temp.push(arguments[i]);
        arr = arguments[0].filter(function(value) {
            return ( value !== temp[i - 1]) ;
        });
    }
    return arr;
}


console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
