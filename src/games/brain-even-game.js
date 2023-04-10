import {
  helloFunction,
  askQuestion,
  generateNumber,
  isCorrect,
  shouldStop,
  congratulations,
} from "../index.js";

export const playEvenGame = () => {
  helloFunction();
  console.log('Answer "yes" if the number is even, otherwise answer "no". ');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = generateNumber(100);
    const correctAnswer = randomNumber % 2 === 0 ? "yes" : "no";

    // Ask a user a question
    const userAnswer = askQuestion(`Question: ${randomNumber} `);

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
