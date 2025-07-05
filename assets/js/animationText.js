function changeWord(words, wordArray, currentWord) {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
    return currentWord;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
    cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
    nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word, wordArray) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}


//First

var wordsFirst = document.getElementById('wordFirst').children;

var wordArrayFirst = [];
var currentWordFirst = 0;
wordsFirst[currentWordFirst].style.opacity = 1;

for (var i = 0; i < wordsFirst.length; i++) {
  splitLetters(wordsFirst[i], wordArrayFirst);
}
function WordsFirst(){
    currentWordFirst = changeWord(wordsFirst, wordArrayFirst, currentWordFirst);
}

WordsFirst();
setInterval(WordsFirst, 4000);


//Second

var wordsSecond = document.getElementById('wordSecond').children;

var wordArraySecond = [];
var currentWordSecond = 0;

wordsSecond[currentWordSecond].style.opacity = 1;


for (var i = 0; i < wordsSecond.length; i++) {
  splitLetters(wordsSecond[i], wordArraySecond);
}
function WordsSecond(){
    currentWordSecond = changeWord(wordsSecond, wordArraySecond, currentWordSecond);
}

WordsSecond();
setInterval(WordsSecond, 4000);


//Three

var wordsThree = document.getElementById('wordThree').children;

var wordArrayThree = [];
var currentWordThree = 0;

wordsThree[currentWordThree].style.opacity = 1;


for (var i = 0; i < wordsThree.length; i++) {
  splitLetters(wordsThree[i], wordArrayThree);
}
function WordsThree(){
    currentWordThree = changeWord(wordsThree, wordArrayThree, currentWordThree);
}

WordsThree();
setInterval(WordsThree, 4000);

//Four


var wordsFour = document.getElementById('wordFour').children;

var wordArrayFour = [];
var currentWordFour = 0;

wordsFour[currentWordFour].style.opacity = 1;

for (var i = 0; i < wordsFour.length; i++) {
  splitLetters(wordsFour[i], wordArrayFour);
}
function WordsFour(){
    currentWordFour = changeWord(wordsFour, wordArrayFour, currentWordFour);
}

WordsFour();
setInterval(WordsFour, 4000);