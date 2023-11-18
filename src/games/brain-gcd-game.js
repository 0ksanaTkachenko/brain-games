import { generateNumber } from '../utils.js';

import playGame from '../index.js';

const question = 'Find the greatest common divisor of given numbers. ';
let randomNumber1;
let randomNumber2;

//   A function that determines the largest divisor of two numbers
const gcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return gcd(number2, number1 % number2);
};

const questionGenerator = () => {
  randomNumber1 = generateNumber(30);
  randomNumber2 = generateNumber(30);
  return `Question: ${randomNumber1} ${randomNumber2} `;
};

const answerChecker = () => {
  const correctAnswer = gcd(randomNumber1, randomNumber2);
  return correctAnswer;
};

const playGcdGame = () => {
  playGame(question, questionGenerator, answerChecker);
};

export default playGcdGame;
