const signalButton = document.querySelector("#signal-button");
const domeStatus = document.querySelector("#dome-status");

// TODO: Add a click event listener.
// When the learner presses the button, change domeStatus.textContent so the
// next crew can confirm the dome is online or read its next instruction.
signalButton.addEventListener("click", function () {
    domeStatus.textContent = "The dome is online.";
signalButton.style.backgroundColor = "green";
});