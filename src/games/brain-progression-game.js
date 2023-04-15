import {
  helloFunction,
  askQuestion,
  generateNumber,
  isCorrect,
  settings,
  congratulations,
} from '../index.js';

const playProgressionGame = () => {
  helloFunction();
  console.log('What number is missing in the progression? ');

  for (let i = 0; i < 3; i += 1) {
    // forming an arithmetic progression

    const firstElement = generateNumber(10);
    const progressionLength = 5 + generateNumber(6);
    const step = generateNumber(20);
    const hiddenIndex = generateNumber(progressionLength);
    const progression = [];
    let currentElement = firstElement;

    let missingNumber = 0;
    for (let a = 0; a < progressionLength; a += 1) {
      if (a === hiddenIndex) {
        progression.push('..');
        missingNumber = currentElement;
      } else {
        progression.push(currentElement);
      }
      currentElement += step;
    }

    const correctAnswer = missingNumber;

    // Ask a user a question
    const userAnswer = askQuestion(`Question: ${progression.join(' ')}`);

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

export default playProgressionGame;
