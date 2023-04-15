import readlineSync from 'readline-sync';

export const settings = {
  // The loops will stop when the variable changes to true in the wrongAnswer function
  shouldStop: false,
};

// Ask a user a question function
export const askQuestion = (question) => readlineSync.question(question);

// welcome function
let userName;
export const helloFunction = () => {
  console.log('Welcome to the Brain Games!');
  userName = askQuestion('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

// random number generation function
export const generateNumber = (range) => Math.floor(Math.random() * range);
// return Math.floor(Math.random() * (max - min + 1)) + min;

// Loop exit on wrong answer

export const wrongAnswer = (correctAnswer, userAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);

  // changing shouldStop to true stops the loop
  settings.shouldStop = true;
};

// checking for the correctness of the answer
export const isCorrect = (correctAnswer, userAnswer) => {
  console.log(`Your answer: ${userAnswer}`);
  if (userAnswer === correctAnswer || +userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    wrongAnswer(correctAnswer, userAnswer);
  }
};

// congratulations on victory
export const congratulations = () => console.log(`Congratulations, ${userName}!`);
