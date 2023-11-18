import {
  helloFunction,
  isCorrect,
  settings,
  congratulations,
  askQuestion,
} from './utils.js';

// Function to play a game based on user interaction
const playGame = (question, questionGenerator, answerChecker) => {
  // Display a welcome message
  helloFunction();
  // Display the initial question
  console.log(question);
  // Iterate for 3 rounds of the game
  for (let i = 0; i < 3; i += 1) {
    // Generate a question for the user
    const questionForUser = questionGenerator();
    // Display the user's question
    console.log(questionForUser);
    // Ask the user for their answer
    const userAnswer = askQuestion('Your answer: ');
    // Get the correct answer based on the generated question
    const correctAnswer = answerChecker();
    // Check if the user's answer is correct
    isCorrect(correctAnswer, userAnswer);
    // Check if the game should stop based on settings
    if (settings.shouldStop) {
      break;
    }
    // Display congratulations message if it's the last round
    if (i === 2) {
      congratulations();
    }
  }
};

export default playGame;
