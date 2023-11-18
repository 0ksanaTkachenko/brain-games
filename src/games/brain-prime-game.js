import { generateNumber } from '../utils.js';

import playGame from '../index.js';

// Setup: Define the question for the prime number game
const question = 'Answer "yes" if given number is prime. Otherwise answer "no". ';
let randomNumber;

//   Сhecking if a number is prime
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

// Generate a random number for the question
const questionGenerator = () => {
  randomNumber = generateNumber(50);
  return `Question: ${randomNumber} `;
};

// Check if the user's answer is correct using the isPrime function
const answerChecker = () => {
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return correctAnswer;
};

// Start the prime number game
const playPrimeGame = () => {
  playGame(question, questionGenerator, answerChecker);
};

export default playPrimeGame;
