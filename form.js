function submitForm(event) {
  event.preventDefault();
  createSubmissionText();
}

function createSubmissionText() {
  //remove the form elements
  while (signupElements.hasChildNodes()) {
    signupElements.removeChild(signupElements.lastChild);
  }

  //create new nodes and add them to where the form area was
  let heading = document.createElement("P");
  heading.innerHTML = "Thanks for registering!";
  let messageText = document.createElement("P");
  messageText.innerHTML =
    "You’ll receive a confirmation message at the address provided. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feel free to opt out at any time.";
  signupElements.appendChild(heading);
  signupElements.appendChild(messageText);
}

function toggleArrow() {
  dropdownOpen = !dropdownOpen;
  if (dropdownOpen) {
    dropdownArrow.classList.add("dropdown-opened");
  } else {
    dropdownArrow.classList.remove("dropdown-opened");
  }
}

function handleDropDownBlur() {
  if (dropdownOpen) {
    toggleArrow();
  }
}

let signupElements = document.querySelector(".signup-elements");
let signupButton = document.getElementById("signup-button");
let dropdownMenu = document.getElementById("frequency");
let dropdownArrow = document.querySelector(".dropdown-arrow");
let dropdownOpen = false;

signupButton.addEventListener("click", submitForm, false);
dropdownMenu.addEventListener("click", toggleArrow, false);
dropdownMenu.addEventListener("blur", handleDropDownBlur, false);
