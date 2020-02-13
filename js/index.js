import { wordList } from './word-db-list.js';
"use strict";

$(document).ready(function () {
  alert('The DOM has finished loading!');

  // VARIABLES //
  const results = $('#result');
  const UNIsym = [33, 47];
  const UNInum = [48, 57];
  const UNIupper = [65, 90];
  const UNIlower = [97, 122];

  // EVENT LISTENERS //
  $('#generate').click(() => {
    // DOM SETTINGS DECLARED //
    let length = $('#length').val();
    const upper = $('#uppercase')[0].checked;
    const lower = $('#lowercase')[0].checked;
    const numbers = $('#numbers')[0].checked;
    const symbols = $('#symbols')[0].checked;

    let randSelector = [];
    let password = [];

    if (upper == true) {
      for (let i = UNIupper[0]; i < UNIupper[1]; i++) {
        randSelector.push(i);
      }
    }
    if (lower === true) {
      for (let i = UNIlower[0]; i < UNIlower[1]; i++) {
        randSelector.push(i);
      }
    }
    if (numbers === true) {
      for (let i = UNInum[0]; i < UNInum[1]; i++) {
        randSelector.push(i);
      }
    }
    if (symbols === true) {
      for (let i = UNIsym[0]; i < UNIsym[1]; i++) {
        randSelector.push(i);
      }
    }

    for (let i = 0; i < length; i++) {
      password.push(String.fromCharCode(randSelector[Math.floor(Math.random() * randSelector.length)]));
    }

    results[0].textContent = password.join('');
  });


  // COPY TO CLIPBOARD
  var btn = document.getElementById('clipboard');
  var clipboard = new ClipboardJS(btn);

  // clipboard.on('success', function (e) {
  //   console.log(e);
  // });

  // clipboard.on('error', function (e) {
  //   console.log(e);
  // });


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

});