import {
  helloFunction,
  isCorrect,
  settings,
  congratulations,
  askQuestion,
} from './utils.js';

const playGame = (question, questionGenerator, answerChecker) => {
  helloFunction();
  console.log(question);
  for (let i = 0; i < 3; i += 1) {
    const questionForUser = questionGenerator();
    console.log(questionForUser);
    const userAnswer = askQuestion('Your answer: ');
    const correctAnswer = answerChecker();
    isCorrect(correctAnswer, userAnswer);
    if (settings.shouldStop) {
      break;
    }
    if (i === 2) {
      congratulations();
    }
  }
};

export default playGame;
