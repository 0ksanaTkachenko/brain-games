import {
  helloFunction,
  askQuestion,
  generateNumber,
  isCorrect,
  settings,
  congratulations,
} from '../index.js';

const playGcdGame = () => {
  helloFunction();
  console.log('Find the greatest common divisor of given numbers. ');

  //   A function that determines the largest divisor of two numbers
  const gcd = (number1, number2) => {
    if (number2 === 0) {
      return number1;
    }
    return gcd(number2, number1 % number2);
  };

  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = generateNumber(30);
    const randomNumber2 = generateNumber(30);

    //   A function that determines the largest divisor of two numbers
    gcd(randomNumber1, randomNumber2);

    const correctAnswer = gcd(randomNumber1, randomNumber2);

    // Ask a user a question
    const userAnswer = askQuestion(
      `Question: ${randomNumber1} ${randomNumber2} `,
    );

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

export default playGcdGame;
