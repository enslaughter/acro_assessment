function submitForm(event) {
  event.preventDefault();
  createSubmissionText();
}

function createSubmissionText() {
  signupElements.innerHTML = "";
  let heading = document.createElement("P");
  heading.innerHTML = "Thanks for registering!";
  let messageText = document.createElement("P");
  messageText.innerHTML =
    "You’ll receive a confirmation message at the address provided. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feel free to opt out at any time.";
  signupElements.appendChild(heading);
  signupElements.appendChild(messageText);
}

let signupElements = document.querySelector(".signup-elements");
let signupButton = document.getElementById("signup-button");

signupButton.addEventListener("click", submitForm, false);
