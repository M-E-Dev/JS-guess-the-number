let message = document.querySelector("#middle");
let help = document.querySelector("#help");
let button = document.querySelector("#submitguess");
let attempt = document.querySelector("#attempt");
let guessArea = document.getElementById("inp");
let counter = 0;
let number = Math.floor(Math.random() * 100 + 1);
console.log(number);


const guessFunc = () => {
  event.preventDefault();
    let guess = guessArea.value;
  if (number < guess) {
    message.classList.add("fail");
    help.innerHTML = "Try little low!";
    counter++;
  } else if (number > guess) {
    message.classList.add("fail");
    help.innerHTML = "Try little high!";
    counter++;
  } else if (number == guess) {
    message.classList.add("success");
    help.innerHTML = "Absolutely true! Congrats!";
    counter++;
  }
  attempt.innerText = counter;
}

button.addEventListener("click", guessFunc)