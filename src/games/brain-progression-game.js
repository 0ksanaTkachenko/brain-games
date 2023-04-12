import {
  helloFunction,
  askQuestion,
  generateNumber,
  isCorrect,
  shouldStop,
  congratulations,
} from "../index.js";

export const playProgressionGame = () => {
  helloFunction();
  console.log("What number is missing in the progression? ");

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = generateNumber(10);

    // forming an arithmetic progression
    const rowLength = 10;
    const progressionStep = generateNumber(20);
    const indexToReplace = generateNumber(rowLength);
    let rowArr = "";
    let rowNumber = randomNumber;
    let missingNumber = "";
    for (let i = 0; i < rowLength; i += 1) {
      if (i === indexToReplace) {
        rowArr = rowArr + " " + "..";
        missingNumber = rowNumber;
      } else {
        rowArr = rowArr + " " + rowNumber;
      }
      rowNumber += progressionStep;
    }

    const correctAnswer = missingNumber;

    // Ask a user a question
    const userAnswer = askQuestion(`Question: ${rowArr}`);

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
