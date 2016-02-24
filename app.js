// Exercise 1

exports.firstAndLastWord = function (string) {
  var splited = string.split(' '),
      indexOfLast = splited.length - 1,
      arr = [];

  (splited.length > 1) ? arr.push([splited[0]], [splited[indexOfLast]]) : arr.push([splited[0]], []) 
  return arr
}


// Exercise 2

exports.stringConvert = function(string) {
  return string.toLowerCase().split('').map((letter) => {
      if (letter == 'ö') {
        return 'o'
      } else if (letter == 'å' || letter == 'ä') {
        return 'a'
      } else {
        return letter
      }
    }).join('')
}

// Exercise 3

exports.largestNumber = function( a, b) { return (a > b) ?  a : b;}

// Exercise 4

exports.spaceRemover = function(str) { return str.split(' ').join('');}

// Exercise 5 

exports.isOdd = function(n) { return (n % 2 !== 0) ? true : false;}