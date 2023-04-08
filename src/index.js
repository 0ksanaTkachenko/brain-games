import readlineSync from "readline-sync";

let userName;

// welcome function
export const helloFunction = () => {
  console.log("Welcome to the Brain Games!");
  userName = readlineSync.question("May I have your name? ");
  console.log(`Hello ${userName}!`);
};

// checking for the correctness of the answer. Loop exit on wrong answer
export let shouldStop = false;
export const isCorrect = (correctAnswer, userAnswer) => {
  if (userAnswer === correctAnswer) {
    console.log("Correct!");
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
    );
    console.log(`Let's try again, ${userName}!`);
    shouldStop = true;
  }
};

// congratulations on victory
export const congratulations = () => {
  console.log(`Congratulations, ${userName}!`);
};
