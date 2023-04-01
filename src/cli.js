import readlineSync from "readline-sync";

const questionName = () => {
  const userName = readlineSync.question("May I have your name? ");
  console.log("Hello " + userName + "!");
};

export default questionName;
