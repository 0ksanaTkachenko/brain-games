import { generateNumber } from '../utils.js';

import playGame from '../index.js';

const question = 'What number is missing in the progression? ';
let missingNumber = 0;

const questionGenerator = () => {
  const firstElement = generateNumber(10);
  const progressionLength = 5 + generateNumber(6);
  const step = generateNumber(20);
  const hiddenIndex = generateNumber(progressionLength);

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

  return `Question: ${progression.join(' ')}`;
};

const answerChecker = () => {
  const correctAnswer = missingNumber;
  return correctAnswer;
};

const playProgressionGame = () => {
  playGame(question, questionGenerator, answerChecker);
};

export default playProgressionGame;
