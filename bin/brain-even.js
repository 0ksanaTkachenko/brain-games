#!/usr/bin/env node

import {
  helloFunction,
  askQuestion,
  isCorrect,
  shouldStop,
  congratulations,
} from "../src/index.js";

const playEvenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no". ');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    const correctAnswer = randomNumber % 2 === 0 ? "yes" : "no";

    // Ask a user a question
    const userAnswer = askQuestion(`Question: ${randomNumber} `);
    console.log(`Your answer: ${userAnswer}`);

    // checking for the correctness of the answer
    isCorrect(correctAnswer, userAnswer);

    // Loop exit on wrong answer
    if (shouldStop) {
      break;
    }

    // congratulations on victory
    if (i === 2) {
      congratulations();
    }
  }
};

helloFunction();
playEvenGame();
