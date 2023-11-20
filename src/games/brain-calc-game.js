import generateNumber from '../utils.js';
import playGame from '../index.js';

const gameInformationGenerator = () => {
  const gameRules = 'What is the result of the expression?';
  const operations = ['+', '-', '*'];
  const randomIndex = generateNumber(operations.length);
  const randomNumber1 = generateNumber(10);
  const randomNumber2 = generateNumber(10);
  const operation = operations[randomIndex];
  const questionForUser = `Question: ${randomNumber1} ${operation} ${randomNumber2} `;

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
  return [gameRules, questionForUser, correctAnswer];
};

const playCalcGame = () => {
  playGame(gameInformationGenerator);
};

export default playCalcGame;
