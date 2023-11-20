import generateNumber from '../utils.js';
import playGame from '../index.js';

const gameInformationGenerator = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no". ';
  const randomNumber = generateNumber(100);
  const questionForUser = `Question: ${randomNumber}`;
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [gameRules, questionForUser, correctAnswer];
};

const playEvenGame = () => {
  playGame(gameInformationGenerator);
};

export default playEvenGame;
