function longestWord(text) {
  let words = text.split(" ");
  let highestLength = 0;
  let longestWord;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > highestLength) {
      highestLength = words[i].length;
      longestWord = words[i];
    }
  }
  return longestWord;
}

console.log(
  longestWord("weqwe wqeqwewqe tooooooooooo wwwwwwwwwwwww qweqwewq fdsa")
);
