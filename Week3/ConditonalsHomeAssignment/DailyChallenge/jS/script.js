var sentence = "the movie is not that bad"
var wordNot = sentence.indexOf("not")
var wordBad = sentence.indexOf("bad")
//the following expression is taking wordNot !== -1 
//and wordBad to pinpoint to the 1st occurence of those 
//words (in this case it doesn't matter since there is only
//one occurence of each word)
//wordBad > wordNot means that the word "bad" comes after the 
//word "not"
//sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
//the slice components in the above go from 0-3 in order to
//cut the words "not that bad" and replace it with good
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    let replacedSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
    console.log(replacedSentence);
} else {
    console.log(sentence);
} 