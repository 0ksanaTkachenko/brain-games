import {
  helloFunction,
  askQuestion,
  generateNumber,
  isCorrect,
  shouldStop,
  congratulations,
} from "../index.js";

export const playGcdGame = () => {
  helloFunction();
  console.log("Find the greatest common divisor of given numbers. ");

  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = generateNumber(30);
    const randomNumber2 = generateNumber(30);

    //   A function that determines the largest divisor of two numbers

    function gcd(randomNumber1, randomNumber2) {
      if (randomNumber2 === 0) {
        return randomNumber1;
      }
      return gcd(randomNumber2, randomNumber1 % randomNumber2);
    }

    const correctAnswer = gcd(randomNumber1, randomNumber2);

    // Ask a user a question
    const userAnswer = askQuestion(
      `Question: ${randomNumber1} ${randomNumber2} `
    );

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
