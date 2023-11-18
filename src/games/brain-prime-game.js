import { generateNumber } from '../utils.js';

import playGame from '../index.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no". ';
let randomNumber;

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

const questionGenerator = () => {
  randomNumber = generateNumber(50);
  return `Question: ${randomNumber} `;
};

const answerChecker = () => {
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return correctAnswer;
};

const playPrimeGame = () => {
  playGame(question, questionGenerator, answerChecker);
};

export default playPrimeGame;
