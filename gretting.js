const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  const date = new Date();
  const hours = date.getHours();

  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `${
    hours < 6
      ? `Sleeping Now :) ${text}`
      : hours < 12
      ? `Good Morning :) ${text}`
      : hours < 18
      ? `Good Afternoon :) ${text}`
      : `Good Evening :) ${text}`
  }`;
}
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
  setInterval(loadName, 3600000);
}

init();
