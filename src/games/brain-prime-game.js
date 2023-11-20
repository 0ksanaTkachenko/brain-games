import generateNumber from '../utils.js';
import playGame from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let a = 2; a <= Math.sqrt(number); a += 1) {
    if (number % a === 0) {
      return false;
    }
  }
  return true;
};

const gameInformationGenerator = () => {
  const randomNumber = generateNumber(50);
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no". ';
  const questionForUser = `Question: ${randomNumber} `;
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [gameRules, questionForUser, correctAnswer];
};

const playPrimeGame = () => {
  playGame(gameInformationGenerator);
};

export default playPrimeGame;
