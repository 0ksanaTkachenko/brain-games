import {
  helloFunction,
  askQuestion,
  generateNumber,
  isCorrect,
  shouldStop,
  congratulations,
} from "../index.js";

export const playPrimeGame = () => {
  helloFunction();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no". ');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = generateNumber(50);

    //   checking if a number is prime

    const isPrime = (randomNumber) => {
      if (randomNumber < 2) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(randomNumber); i++) {
        if (randomNumber % i === 0) {
          return false;
        }
      }
      return true;
    };

    const correctAnswer = isPrime(randomNumber) ? "yes" : "no";

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
