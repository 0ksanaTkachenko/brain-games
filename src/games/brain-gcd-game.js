import generateNumber from '../utils.js';
import playGame from '../index.js';

const gcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return gcd(number2, number1 % number2);
};

const gameInformationGenerator = () => {
  const randomNumber1 = generateNumber(30);
  const randomNumber2 = generateNumber(30);
  const gameRules = 'Find the greatest common divisor of given numbers. ';
  const questionForUser = `Question: ${randomNumber1} ${randomNumber2} `;
  const correctAnswer = gcd(randomNumber1, randomNumber2);
  return [gameRules, questionForUser, correctAnswer];
};

const playGcdGame = () => {
  playGame(gameInformationGenerator);
};

export default playGcdGame;
