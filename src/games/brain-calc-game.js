import {
  helloFunction,
  askQuestion,
  generateNumber,
  isCorrect,
  shouldStop,
  congratulations,
} from "../index.js";

export const playCalcGame = () => {
  helloFunction();
  console.log("What is the result of the expression?");

  const operations = ["+", "-", "*"];

  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = generateNumber(10);
    const randomNumber2 = generateNumber(10);

    // random operator generation
    const randomIndex = generateNumber(operations.length);
    const operation = operations[randomIndex];

    // correct answer
    const correctAnswer = eval(
      `${randomNumber1} ${operation} ${randomNumber2}`
    );

    // Ask a user a question
    const userAnswer = askQuestion(
      `Question: ${randomNumber1} ${operation} ${randomNumber2}`
    );

    // checking for the correctness of the answer
    isCorrect(correctAnswer, userAnswer);

    // Loop exit on wrong answer
    if (shouldStop) {
      break;
    }

    // congratulations on victory
    if (i === 2) {
      congratulations();
    }
  }
};
