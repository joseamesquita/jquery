var sentence = prompt("Enter a sentence");
console.log(sentence);

var uppercaseFirstLast = function(sentence) {
  var newSentence = "";
  for(var i = 0; i < sentence.length; i++) {
    if(i === 0 || i === sentence.length - 1) {
      newSentence += (sentence[i].toUpperCase());
    } else {
      newSentence += (sentence[i]);
    }
  }
  var firstLast = newSentence[0] + newSentence[sentence.length - 1];
  return firstLast;
}

var switchFirstLast = function(sentence) {
  var result = "";
  result += sentence[sentence.length - 1]
  result += sentence.slice(1, sentence.length - 1)
  result += sentence[0]
  var lastFirst = result[0] + result[result.length - 1];
  return lastFirst;
}

var addFirstLastToEnd = function(sentence) {
  return sentence += switchFirstLast(uppercaseFirstLast(sentence));
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

var midFirst = function(sentence){
  var mid = Math.floor(sentence.length / 2);
  var result = addFirstLastToEnd(sentence);
  var final = sentence[mid] + result;
  return final;
}

var cipher = function(string) {
  return reverseString(midFirst(string));
}

console.log(cipher(sentence));

$(document).ready(function() {
  $("#normal").click(function() {
    alert(sentence);
  });

  $("#cipher").click(function() {
    alert(cipher(sentence));
  });
});