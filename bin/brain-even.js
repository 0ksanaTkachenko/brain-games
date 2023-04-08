#!/usr/bin/env node

import readlineSync from "readline-sync";
import {
  helloFunction,
  isCorrect,
  shouldStop,
  congratulations,
} from "../src/index.js";

const playEvenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no". ');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    const correctAnswer = randomNumber % 2 === 0 ? "yes" : "no";
    const userAnswer = readlineSync.question(`Question: ${randomNumber} `);

    console.log(`Your answer: ${userAnswer}`);

    isCorrect(correctAnswer, userAnswer);
    if (shouldStop) {
      break;
    }

    if (i === 2) {
      congratulations();
    }
  }
};

helloFunction();
playEvenGame();
