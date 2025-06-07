// form-demo.js

function validateForm(event) {
  const theForm = event.target;
  const errors = [];
  let isValid = true;

  const fullName = theForm.fullName.value.trim();
  const creditCard = theForm.creditCard.value.trim();
  const paymentMethod = theForm.paymentMethod.value;

  if (fullName !== "Bob") {
    isValid = false;
    errors.push("Only users named 'Bob' can submit this form.");
  }

  if (paymentMethod === "credit" && creditCard !== "1234123412341234") {
    isValid = false;
    errors.push("Invalid credit card number. Only 1234123412341234 is allowed.");
  }

  if (!isValid) {
    event.preventDefault();
    showErrors(errors);
    return false;
  }
}

function togglePaymentDetails(e) {
  const theForm = document.getElementById("checkoutForm");
  const creditCardContainer = document.getElementById("creditCardContainer");
  const paypalContainer = document.getElementById("paypalContainer");

  // Hide both initially
  creditCardContainer.classList.add("hide");
  paypalContainer.classList.add("hide");

  theForm.creditCard.required = false;
  theForm.paypalUsername.required = false;

  if (e.target.value === "credit") {
    creditCardContainer.classList.remove("hide");
    theForm.creditCard.required = true;
  } else if (e.target.value === "paypal") {
    paypalContainer.classList.remove("hide");
    theForm.paypalUsername.required = true;
  }
}

function showErrors(errors) {
  const errorEl = document.querySelector(".errors");
  const html = errors.map((error) => `<p>${error}</p>`);
  errorEl.innerHTML = html.join("");
}

// Event listeners
document.getElementById("paymentMethod").addEventListener("change", togglePaymentDetails);
document.getElementById("checkoutForm").addEventListener("submit", validateForm);
