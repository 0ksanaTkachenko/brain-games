# Brain-games

### Hexlet tests and linter status:

[![Actions Status](https://github.com/0ksanaTkachenko/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/0ksanaTkachenko/frontend-project-44/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/8934dc09aa0163baa1cd/maintainability)](https://codeclimate.com/github/0ksanaTkachenko/frontend-project-44/maintainability)

## <a name="Game process"></a>Game process:

"Brain Games" is a set of five console games built on the principle of popular mobile brain training applications. Each game poses questions that require correct answers. After three correct answers, the game is considered passed. Incorrect answers conclude the game and prompt to start over.

- brain-even - parity of a number
- brain-calc - mathematical operations between numbers
- brain-gcd - greatest common divisor of two numbers
- brain-progression - missing number in an arithmetic progression
- brain-prime - prime number or not

Game Example:

```console
brain-progression
Welcome to the Brain Game!
What number is missing in the progression?
May I have your name? Roman
Hello, Roman!
Question: 14 .. 18 20 22 24 26 28
Your answer: 16 # Пользователь вводит ответ
Correct!
Question: 5 6 7 8 9 .. 11 12
Your answer: 10 # Пользователь вводит ответ
Correct!
Question: 12 15 18 21 .. 27 30 33
Your answer: 24 # Пользователь вводит ответ
Correct!
Congratulations, Roman!
```

To win the game, you need to provide the correct answer to three consecutive questions. All games are launched in the terminal by their names. The gameplay process is accessible through the links in the 'Installation' section.

## <a name="installation"></a>Installation

Before starting the games, you need to install them once by running the command "make install" or "npm ci && sudo npm link" in the terminal, after which you can enter the name of the game in the terminal and start playing.

```console
make install
```

or

```console
npm ci && sudo npm link
```

To see an example of installation and the gameplay process, follow the links in the file.

- brain-even game https://asciinema.org/a/575427
- brain-calc game https://asciinema.org/a/576463
- brain-gcd game https://asciinema.org/a/576481
- brain-progression game https://asciinema.org/a/576708
- brain-prime game https://asciinema.org/a/576717

## <a name="Game-Launch"></a>Game Launch

Game Launch Options:

- Open the terminal.
- Navigate to the game's directory.
- Enter the command for the specific game:

```console
brain-even
```

```console
brain-calc
```

```console
brain-gcd
```

```console
brain-progression
```

```console
brain-prime
```

Enjoy playing the "Brain Games!"

## <a name="pre-requirements"></a>Prerequisites for Installation

To run this console game, you will need:

1. **Node.js:** Ensure that you have Node.js installed, version 12 or higher. [Download Node.js](https://nodejs.org/)

2. **npm/yarn:** Install npm (comes with Node.js). [Instructions for installing npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

3. **Cross-Platform Compatibility:** This game is supported on all major operating systems (Windows, macOS, Linux).
