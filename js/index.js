import { wordList } from './word-db-list.js';




// GENERATE SIX WORDS FROM WORD DB //
let wordArrGen = (wordList) => {
  let wordArr = [];

  for (var i = 0; i < 6; i++) {
    wordArr.push(
      wordList[Math.round(Math.random() * wordList.length)]);
  };
  return wordArr;
};

console.log(wordArrGen(wordList));



// const diceWord = (wordList) => {
//   return wordList[Math.round(Math.random() * wordList.length)];
// };
// console.log(diceWord(wordList));