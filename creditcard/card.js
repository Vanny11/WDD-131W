function isCardNumberValid(number) {
    return number === "1234123412341234";
  }
  
  function displayError(msg) {
    document.querySelector('.errorMsg').innerText = msg;
  }
  
  function submitHandler(event) {
    event.preventDefault();
    displayError("");
  
    const form = event.target;
    const cardNumber = form.cardNumber.value;
    const expMonth = parseInt(form.expMonth.value);
    const expYear = parseInt(form.expYear.value);
    let errorMsg = "";
  
    if (isNaN(cardNumber)) {
      errorMsg += "Card number is not a number.\n";
    } else if (!isCardNumberValid(cardNumber)) {
      errorMsg += "Card number is not valid.\n";
    }
  
    const today = new Date();
    const enteredDate = new Date(expYear, expMonth - 1);
    if (enteredDate < today) {
      errorMsg += "Card is expired.\n";
    }
  
    if (errorMsg !== "") {
      displayError(errorMsg);
      return false;
    }
  
    alert("Form submitted successfully!");
    return true;
  }
  
  document.querySelector("#credit-card").addEventListener("submit", submitHandler);
  