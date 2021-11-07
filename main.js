const generatedNumbers = [];
const numbers = document.querySelector('.numbers');
const generateButton = document.querySelector('.generate');
const resetButton = document.querySelector('.reset');

function randomNumber(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function onClickGenerate () {
    const minNumber = +document.querySelector('.minNumber').value;
    const maxNumber = +document.querySelector('.maxNumber').value;
    if (minNumber > maxNumber || (minNumber === 0 && maxNumber === 0)) {
        alert('Not valid data, maxNumber is smallest then minNumber or you dont type minNumber and maxNumber');
        window.location.reload();
    }
    const number = randomNumber(minNumber, maxNumber);
    (!generatedNumbers.includes(number)) ? generatedNumbers.push(number) : onClickGenerate();
    numbers.innerHTML = generatedNumbers;
    if (generatedNumbers.length === maxNumber - minNumber + 1) {
        generateButton.setAttribute("disabled", "disabled")
        numbers.innerHTML = 'Elements are over';
    }
}

function reload () {
    window.location.reload()
}

generateButton.addEventListener('click', onClickGenerate);
resetButton.addEventListener('click', reload);
