import { generateNumber } from '../utils.js';

import playGame from '../index.js';

// Game setup: Define the question and available arithmetic operations
const question = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

// Variables to store random numbers and operation
let randomNumber1;
let randomNumber2;
let operation;

// Generate a random arithmetic question
const questionGenerator = () => {
  // Randomly select an operation and generate two random numbers
  const randomIndex = generateNumber(operations.length);
  randomNumber1 = generateNumber(10);
  randomNumber2 = generateNumber(10);
  operation = operations[randomIndex];

  // Return the formatted arithmetic question
  return `Question: ${randomNumber1} ${operation} ${randomNumber2} `;
};

// Check the correctness of the user's answer
const answerChecker = () => {
  let correctAnswer;

  // Calculate the correct answer based on the generated numbers and operation
  switch (operation) {
    case '+':
      correctAnswer = randomNumber1 + randomNumber2;
      break;
    case '-':
      correctAnswer = randomNumber1 - randomNumber2;
      break;
    case '*':
      correctAnswer = randomNumber1 * randomNumber2;
      break;
    default:
      // Handle an incorrect operation (if needed)
      break;
  }

  // Return the correct answer
  return correctAnswer;
};

// Start the arithmetic calculation game
const playCalcGame = () => {
  playGame(question, questionGenerator, answerChecker);
};

export default playCalcGame;
