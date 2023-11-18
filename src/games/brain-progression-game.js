import { generateNumber } from '../utils.js';

import playGame from '../index.js';

// Define the question for the progression game
const question = 'What number is missing in the progression? ';
let missingNumber = 0;

// Function to generate a question for the progression game
const questionGenerator = () => {
  // Generate random parameters for the progression
  const firstElement = generateNumber(10);
  const progressionLength = 5 + generateNumber(6);
  const step = generateNumber(20);
  const hiddenIndex = generateNumber(progressionLength);

  // Generate the progression array with a missing element
  const progression = [];
  let currentElement = firstElement;

  for (let a = 0; a < progressionLength; a += 1) {
    if (a === hiddenIndex) {
      progression.push('..');
      missingNumber = currentElement;
    } else {
      progression.push(currentElement);
    }
    currentElement += step;
  }

  // Format and return the progression question
  return `Question: ${progression.join(' ')}`;
};

// Function to check the correctness of the user's answer
const answerChecker = () => {
  const correctAnswer = missingNumber;
  return correctAnswer;
};

// Function to start the progression game
const playProgressionGame = () => {
  playGame(question, questionGenerator, answerChecker);
};

export default playProgressionGame;
