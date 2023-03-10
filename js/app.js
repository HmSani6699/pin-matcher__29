function getPin() {
    let generatePin = Math.round(Math.random() * 10000) + '';
    if (generatePin.length == 4) {
        return generatePin
    }
    else {
        return getPin()
    }
}

function getGeneratePin() {
    document.getElementById('click-input').value = getPin();
}

document.getElementById('type-number').addEventListener('click', function (event) {
    const number = event.target.innerText;

    const getInputFiled = document.getElementById('calculate-input-filed');
    const getInputValue = getInputFiled.value;

    if (isNaN(number)) {
        if (number === 'C') {
            getInputFiled.value = '';
        }
        else if (number == '<') {
            let numberString = getInputValue + '';
            let split = numberString.split('');
            split.pop();
            getInputFiled.value = split.join('')
        }
    }
    else {
        const newInputValue = getInputValue + number;
        getInputFiled.value = newInputValue
    }
})

function matchPin() {
    const generateInputFiled = document.getElementById('click-input').value;
    const calculateInputFiled = document.getElementById('calculate-input-filed').value;

    const right = document.getElementById('right');
    const error = document.getElementById('error');

    if (generateInputFiled == calculateInputFiled) {
        right.style.display = 'block';
        error.style.display = 'none';
    }
    else {
        error.style.display = 'block';
        right.style.display = 'none'
    }
}