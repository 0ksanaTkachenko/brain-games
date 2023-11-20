import readlineSync from 'readline-sync';
import questionName from './cli.js';

const playGame = (gameInformationGenerator) => {
  const userName = questionName();
  const [gameRules] = gameInformationGenerator();
  console.log(gameRules);
  const gameRounds = 3;

  for (let i = 0; i < gameRounds; i += 1) {
    const [, questionForUser, correctAnswer] = gameInformationGenerator();
    console.log(questionForUser);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer || +userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default playGame;
