const signalButton = document.querySelector("#signal-button");
const domeStatus = document.querySelector("#dome-status");

signalButton.addEventListener("click", () => {
  console.log("The button was clicked!");

  domeStatus.textContent = "Kairova status: dome is ACTIVE — signal confirmed.";
});