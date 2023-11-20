import generateNumber from '../utils.js';
import playGame from '../index.js';

const gameInformationGenerator = () => {
  const gameRules = 'What number is missing in the progression? ';
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

  const questionForUser = `Question: ${progression.join(' ')}`;
  const correctAnswer = missingNumber;
  return [gameRules, questionForUser, correctAnswer];
};

const playProgressionGame = () => {
  playGame(gameInformationGenerator);
};

export default playProgressionGame;
