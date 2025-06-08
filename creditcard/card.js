function isCardNumberValid(number) {
    return number === '1234123412341234';
  }
  
  function displayError(msg) {
    document.querySelector('.errorMsg').innerText = msg;
  }
  
  function submitHandler(event) {
    event.preventDefault();
    displayError('');
    
    const cardNumber = this.cardNumber.value.replace(/\s/g, '');
    const expMonth = this.expMonth.value;
    const expYear = this.expYear.value;
    let errorMsg = '';
  
    if (isNaN(cardNumber)) {
      errorMsg += 'Card number must be numeric.\n';
    } else if (!isCardNumberValid(cardNumber)) {
      errorMsg += 'Card number is not valid.\n';
    }
  
    // Expiration date check
    const today = new Date();
    const inputDate = new Date(`20${expYear}`, expMonth - 1);
    if (inputDate < today) {
      errorMsg += 'Expiration date is not valid.\n';
    }
  
    if (errorMsg) {
      displayError(errorMsg);
      return false;
    }
  
    alert('Form submitted successfully!');
    return true;
  }
  
  document.querySelector('#credit-card').addEventListener('submit', submitHandler);
  