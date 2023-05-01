const answers = [
  "As I see it, yes.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "It is certain.",
  "It is decidedly so.",
  "Most likely.",
  "My reply is no.",
  "My sources say no.",
  "No.",
  "Outlook good.",
  "Outlook not so good.",
  "Reply hazy, try again.",
  "Signs point to yes.",
  "Very doubtful.",
  "Without a doubt.",
  "Yes.",
  "Yes – definitely.",
  "You may rely on it."
];

const showAnswer = () => {
  const answerContainer = document.getElementById("answer");
  answerContainer.innerHTML = getAnswer();
};

const getAnswer = () => {
  const randomIndex = Math.floor(Math.random() * answers.length);
  return answers[randomIndex];
};

const resetAnswer = () => {
  const answerContainer = document.getElementById("answer");
  answerContainer.innerHTML = "";
};

const askButton = document.querySelector(".btn-primary");
askButton.addEventListener("click", showAnswer);

const resetButton = document.querySelector(".btn-secondary");
resetButton.addEventListener("click", resetAnswer);
