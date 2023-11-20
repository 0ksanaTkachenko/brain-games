import { generateNumber } from '../utils.js';

import playGame from '../index.js';

const question = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
let randomNumber1;
let randomNumber2;
let operation;

const questionGenerator = () => {
  const randomIndex = generateNumber(operations.length);
  randomNumber1 = generateNumber(10);
  randomNumber2 = generateNumber(10);
  operation = operations[randomIndex];

  return `Question: ${randomNumber1} ${operation} ${randomNumber2} `;
};

const answerChecker = () => {
  let correctAnswer;

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
      break;
  }

  return correctAnswer;
};

const playCalcGame = () => {
  playGame(question, questionGenerator, answerChecker);
};

export default playCalcGame;
