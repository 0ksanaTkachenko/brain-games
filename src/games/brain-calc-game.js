import {
  helloFunction,
  askQuestion,
  generateNumber,
  isCorrect,
  settings,
  congratulations,
} from '../index.js';

const playCalcGame = () => {
  helloFunction();
  console.log('What is the result of the expression?');

  const operations = ['+', '-', '*'];

  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = generateNumber(10);
    const randomNumber2 = generateNumber(10);

    // random operator generation
    const randomIndex = generateNumber(operations.length);
    const operation = operations[randomIndex];

    // correct answer
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
        // обработка некорректной операции
        break;
    }

    // Ask a user a question
    const userAnswer = askQuestion(`Question: ${randomNumber1} ${operation} ${randomNumber2}`);

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

export default playCalcGame;
