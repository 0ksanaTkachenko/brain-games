import readlineSync from 'readline-sync';

export const settings = {
  shouldStop: false,
};

export const askQuestion = (question) => readlineSync.question(question);

let userName;
export const helloFunction = () => {
  console.log('Welcome to the Brain Games!');
  userName = askQuestion('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const generateNumber = (range) => Math.floor(Math.random() * range);

export const wrongAnswer = (correctAnswer, userAnswer) => {
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
  );
  console.log(`Let's try again, ${userName}!`);

  settings.shouldStop = true;
};

export const isCorrect = (correctAnswer, userAnswer) => {
  if (userAnswer === correctAnswer || +userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    wrongAnswer(correctAnswer, userAnswer);
  }
};

export const congratulations = () => {
  console.log(`Congratulations, ${userName}!`);
};
