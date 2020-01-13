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
  return newSentence;
}

console.log(uppercaseFirstLast(sentence));