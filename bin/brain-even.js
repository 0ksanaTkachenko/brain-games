#!/usr/bin/env node

import readlineSync from "readline-sync";
import { userName, questionName } from "../src/cli.js";

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no". ');

  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    const correctAnswer = randomNumber % 2 === 0 ? "yes" : "no";
    const userAnswer = readlineSync.question(`Question: ${randomNumber} `);

    const wrongAnswer = () => {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
    };

    console.log(`Your answer: ${userAnswer}`);

    if (userAnswer === correctAnswer) {
      console.log("Correct!");
    } else {
      wrongAnswer();
      break;
    }

    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

questionName();
evenGame();
