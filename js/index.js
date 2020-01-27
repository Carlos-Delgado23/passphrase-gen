import { wordList } from './word-db-list.js';



// GET ELEMENTS //
const result = document.getElementById('result');
const upper = document.getElementById('uppercase');
const lower = document.getElementById('lowercase');
const num = document.getElementById('numbers');
const sym = document.getElementById('symbols');


let pwGen = () => {
  let resultOutput = [];

  if (upper === 'checked') {

  }
  if (lower === 'checked') {

  }
  if (num === 'checked') {

  }
  if (sym === 'checked') {

  }
}













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



