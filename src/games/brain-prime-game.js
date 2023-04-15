import {
  helloFunction,
  askQuestion,
  generateNumber,
  isCorrect,
  settings,
  congratulations,
} from '../index.js';

const playPrimeGame = () => {
  helloFunction();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no". ');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = generateNumber(50);

    //   checking if a number is prime

    const isPrime = (number) => {
      if (number < 2) {
        return false;
      }
      for (let a = 2; a <= Math.sqrt(number); a += 1) {
        if (number % a === 0) {
          return false;
        }
      }
      return true;
    };

    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

    // Ask a user a question
    const userAnswer = askQuestion(`Question: ${randomNumber} `);

    // checking for the correctness of the answer
    isCorrect(correctAnswer, userAnswer);

    // Loop exit on wrong answer
    if (settings.shouldStop) {
      break;
    }

    // congratulations on victory
    if (i === 2) {
      congratulations();
    }
  }
};

export default playPrimeGame;
