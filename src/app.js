document.addEventListener("DOMContentLoaded", function() {
  // Select the form element
  let paymentForm = document.querySelector(".payment-form");

  // Add event listener for form submit
  paymentForm.addEventListener("submit", event => {
    // Prevent the form from submitting
    event.preventDefault();

    // Form validation
    let cardInput = document.getElementById("inputCard");
    let cvcInput = document.getElementById("inputCvc");
    let amountInput = document.getElementById("inputAmount");
    let firstNameInput = document.getElementById("inputFirstname");
    let lastNameInput = document.getElementById("inputLastname");
    let cityInput = document.getElementById("inputCity");
    let stateInput = document.getElementById("inputState");
    let zipInput = document.getElementById("inputZip");
    let messageInput = document.getElementById("message");

    // Reset styles
    let inputs = [
      cardInput,
      cvcInput,
      amountInput,
      firstNameInput,
      lastNameInput,
      cityInput,
      stateInput,
      zipInput,
      messageInput
    ];
    inputs.forEach(input => {
      input.style.backgroundColor = "";
    });

    // Validation errors
    let errors = {
      inputCard: "Card Number",
      inputCvc: "Card CVC",
      inputAmount: "Amount",
      inputFirstname: "First Name",
      inputLastname: "Last Name",
      inputCity: "City",
      inputState: "State",
      inputZip: "Postal Code",
      message: "Message"
    };

    let hasErrors = false;

    // Validate inputs
    for (let input of inputs) {
      let fieldName = input.id;

      // Check if the input is the state select dropdown
      if (input === stateInput) {
        if (input.value === "Pick a state...") {
          input.style.backgroundColor = "rgb(248,215,218,255)"; // same color as light danger
          hasErrors = true;
          document.getElementById("alerty").innerHTML =
            "Please review the following: " + errors[fieldName];
          break;
        }
      } else if (!input.value.trim()) {
        // For other inputs, check if they are empty
        input.style.backgroundColor = "rgb(248,215,218,255)"; // same color as light danger
        hasErrors = true;
        document.getElementById("alerty").innerHTML =
          "Please review the following: " + errors[fieldName];
        break;
      }
    }

    if (!hasErrors) {
      alert("Successfully submitted!");
      event.target.submit();
    }
  });
});
