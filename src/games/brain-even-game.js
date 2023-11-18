import { generateNumber } from '../utils.js';
import playGame from '../index.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no". ';
let randomNumber;

const questionGenerator = () => {
  randomNumber = generateNumber(100);
  return `Question: ${randomNumber} `;
};

const answerChecker = () => {
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return correctAnswer;
};

const playEvenGame = () => {
  playGame(question, questionGenerator, answerChecker);
};

export default playEvenGame;
