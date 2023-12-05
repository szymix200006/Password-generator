const passwordInput = document.querySelector(".password-input");
const generateButton = document.querySelector(".generate-password");
const lengthLabel = document.querySelector(".password-length");
const copiedText = document.querySelector('.copy-text');

const generatePassword = () => {
    let password = "";
    const reqs = getRequirements();
    const reqsFinal = Array.from(Object.keys(reqs).filter(el => reqs[el] == true));
    console.log(reqsFinal);
    for(i = 0; i<reqs.leng; i++) {
        const sign = getRandom[reqsFinal[Math.floor(Math.random() * reqsFinal.length)]]();
        password += sign;
    }
    passwordInput.value = password;
}

const getRequirements = () => {
    let reqs = {};
    reqs.uppercase = document.querySelector('.uppercase').checked ? true : false;
    reqs.lowercase = document.querySelector('.lowercase').checked ? true : false;
    reqs.numbers = document.querySelector('.numbers').checked ? true : false;
    reqs.signs = document.querySelector('.signs').checked ? true : false;
    reqs.leng = parseInt(document.querySelector('.password-length').value);
    
    return reqs;
}

const updateLength = () => {
    const lengthInput = document.querySelector(".password-length").value;
    const inputValue = document.querySelector('.input-value');
    inputValue.innerHTML = lengthInput;
}

const copyText = () => {
    const text = document.querySelector('.password-input');
    text.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}

const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

const getRandomSymbol = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 34);
}

const getRandom = {
    uppercase: getRandomUpper,
    lowercase: getRandomLower,
    numbers: getRandomNumber,
    signs: getRandomSymbol
}

generateButton.addEventListener('click', generatePassword);
lengthLabel.addEventListener('input', updateLength);
copiedText.addEventListener('click', copyText);