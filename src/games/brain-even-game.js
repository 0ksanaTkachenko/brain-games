import { generateNumber } from '../utils.js';
import playGame from '../index.js';

// Setup: Define the question for the even/odd number game
const question = 'Answer "yes" if the number is even, otherwise answer "no". ';
let randomNumber;

// Generate a random number for the question
const questionGenerator = () => {
  randomNumber = generateNumber(100);
  return `Question: ${randomNumber} `;
};

// Check if the user's answer is correct
const answerChecker = () => {
  // Determine the correct answer based on whether the number is even or odd
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return correctAnswer;
};

// Start the even/odd number game
const playEvenGame = () => {
  playGame(question, questionGenerator, answerChecker);
};

export default playEvenGame;
