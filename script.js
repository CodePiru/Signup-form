const dateInput = document.querySelector('[type="date"]');
const date = new Date().toLocaleDateString('en-ca');
const meter = document.querySelector('meter');
const passInput1 = document.querySelector('#user-password-1');
const passInput2 = document.querySelector('#user-password-2');
const errorOutput = document.querySelector('.error');
const form = document.querySelector('form');
const main = document.querySelector('main');
let passMatch = false;

dateInput.max = date;

function passPoints() {
    let points = 0;
    //Min 8 chars
    points += this.value.length >= 8 ? 1 : 0;
    //At least one lower case
    points += /[a-z]/.test(this.value) ? 1 : 0;
    //At least one upper case
    points += /[A-Z]/.test(this.value) ? 1 : 0;
    //At least one number
    points += /\d/.test(this.value) ? 1 : 0;
    //At least one symbol
    points += /(\W|_)/.test(this.value) ? 1 : 0;

    meter.value = points;
}

function checkPass() {
    if (passInput2.value !== passInput1.value) {
        errorOutput.style.color = 'red';
        errorOutput.textContent = '✘ Passwords does not match';
        passMatch = false;

    } else {
        errorOutput.style.color = 'green';
        errorOutput.textContent = '✔ Passwords match';
        passMatch = true;
    }
}

function submit(e) {
    e.preventDefault();
    checkPass();
    if (meter.value < 4) {
        errorOutput.style.color = 'red';
        errorOutput.textContent = 'Weak password';
        return;
    }
    if (!passMatch) {
        errorOutput.style.color = 'red';
        errorOutput.textContent = '✘ Passwords does not match';
        return;
    } 
    main.innerHTML = `
        <h2>¡Success!</h2>
        <h3>Congratulations on completing our sign up form.</h3>
        <p>This is just a dummy sign up form, your data is not going to be sent anywhere, and you won't receive any e-mails from us.</p>
        <p>Thanks for taking the time to complete it tho, I would love some review or comments from you.</p>
        <p>Discord: codePiru#9533</p>
    `;
}

passInput1.addEventListener('input', passPoints);
passInput2.addEventListener('change', checkPass);
form.addEventListener('submit', submit);


