const form = document.querySelector(".form");
const emailInput = document.getElementById("email");
const errorMessage = document.querySelector(".form-email-error");

const containerWrapper = document.querySelector(".container-wrapper");
const successWrapper = document.querySelector(".success-wrapper");

const successButton = document.querySelector(".success-button");
const successEmail = document.querySelector(".success-email");

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = emailInput.value;

  if (!emailRegex.test(emailValue)) {
    errorMessage.classList.remove("hidden");
    emailInput.classList.add("error");
    return;
  }

  errorMessage.classList.add("hidden");
  emailInput.classList.remove("error");

  containerWrapper.classList.add("hidden");
  successWrapper.classList.remove("hidden");
  successEmail.textContent = emailInput.value;
});

successButton.addEventListener("click", () => {
  containerWrapper.classList.remove("hidden");
  successWrapper.classList.add("hidden");
  emailInput.value = "";
});
