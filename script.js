function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let resultElement = document.getElementById('result');
    let result = ''; // Placeholder for validation result

    // Validation logic: Check if input starts with 'pet_' followed by alphanumeric characters using regular expression
    const valid = /^pet_[a-zA-Z0-9]+$/;

    // Check if the input matches the regular expression
    if (valid.test(input)) {
        result = 'Valid Syntax';
        resultElement.className = 'valid'; // Add the valid class
        resultElement.innerHTML = `${result} <span class="emoji">🟢</span>`; 
    } else {
        result = 'Invalid Syntax';
        resultElement.className = 'invalid'; // Add the invalid class
        resultElement.innerHTML = `${result} <span class="emoji">🔴</span>`; 
    }
}
