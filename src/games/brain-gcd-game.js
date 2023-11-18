import { generateNumber } from '../utils.js';

import playGame from '../index.js';

// Setup: Define the question for the greatest common divisor (GCD) game
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

// Generate random numbers for the question
const questionGenerator = () => {
  randomNumber1 = generateNumber(30);
  randomNumber2 = generateNumber(30);
  return `Question: ${randomNumber1} ${randomNumber2} `;
};

// Calculate the correct answer using the GCD function
const answerChecker = () => {
  const correctAnswer = gcd(randomNumber1, randomNumber2);
  return correctAnswer;
};

// Start the GCD game
const playGcdGame = () => {
  playGame(question, questionGenerator, answerChecker);
};

export default playGcdGame;
