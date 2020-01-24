import { wordList } from './eff-db-list.js';





let wordArrGen = (wordList) => {
  let wordArr = [];

  for (var i = 0; i < 6; i++) {
    wordArr.push(
      wordList[Math.round(Math.random() * wordList.length)]);
  };
  return wordArr;
};

// console.log(wordArrGen(wordList));

for (var i = 0; i < 20000; i++) {
  let wordArr = wordArrGen(wordList);

  if (wordArr === '') {
    console.log("here");

  }

}

// const diceWord = (wordList) => {
//   return wordList[Math.round(Math.random() * wordList.length)];
// };
// console.log(diceWord(wordList));