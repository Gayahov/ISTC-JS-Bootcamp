  //TASK1
function convertToUpperCase(string) {
  var split = string.toLowerCase().split(' ');
  for (var i = 0; i < split.length; i++) {

      split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1);
  }

  console.log(split.join(' '));
}

convertToUpperCase("the sun is shining")


//TASK2
function longestWord(string) {
   var str = string.split(" ");
   var longest = 0;
   var word= 0;
   for (var i = 0; i < str.length-1; i++) {
       if (longest < str[i].length) {
           longest = str[i].length;
           word = str[i];
       }
   }
   console.log(word);
}

longestWord("I love you");

//TASK3

var vowels = ['a', 'e', 'i', 'o', 'u', "A", "E", "I", "O", "U"]

function countOfVowels(text) {
   var countVowels = 0;

   for (var x = 0; x < text.length; x++) {
       if (vowels.indexOf(text[x]) !== -1) {
           countVowels++
       }
   }
   console.log(countVowels);
}

countOfVowels("hello, world - world, hello");
