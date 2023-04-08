import readlineSync from "readline-sync";

// Ask a user a question
export const askQuestion = (question) => readlineSync.question(question);

// welcome function
let userName;
export const helloFunction = () => {
  console.log("Welcome to the Brain Games!");
  userName = askQuestion("May I have your name? ");
  console.log(`Hello ${userName}!`);
};

// Loop exit on wrong answer
export let shouldStop = false;
const wrongAnswer = (correctAnswer, userAnswer) => {
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
  );
  console.log(`Let's try again, ${userName}!`);
  shouldStop = true;
};

// checking for the correctness of the answer

export const isCorrect = (correctAnswer, userAnswer) => {
  if (userAnswer === correctAnswer) {
    console.log("Correct!");
  } else {
    wrongAnswer(correctAnswer, userAnswer);
  }
};

// congratulations on victory
export const congratulations = () =>
  console.log(`Congratulations, ${userName}!`);
