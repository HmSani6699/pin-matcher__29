function getPin() {
    const pinNumber = Math.round(Math.random() * 10000) + '';
    if (pinNumber.length == 4) {
        return pinNumber
    }
    else {
        return getPin()
    }
}

document.getElementById('generatePin').addEventListener('click', function () {
    document.getElementById('click-input').value = getPin()
});

document.getElementById('type-number').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calculateInputFiled = document.getElementById('calculate-input-filed');
    const previousInputValue = calculateInputFiled.value;

    if (isNaN(number)) {

        if (number == "C") {
            calculateInputFiled.value = '';
        }
        else if (number == '<') {
            let inputValue = previousInputValue.split('');
            inputValue.pop()
            calculateInputFiled.value = inputValue.join('')
        }
    }
    else {
        const newInputValue = previousInputValue + number;
        calculateInputFiled.value = newInputValue
    }
})

function getInputValue(id) {
    const inputFiled = document.getElementById(id);
    const inputFiledValue = inputFiled.value;
    return inputFiledValue
}

function matchPin() {
    const pinInputValue = getInputValue('click-input');
    const calculateInputValue = getInputValue('calculate-input-filed');
    if (pinInputValue == '' || calculateInputValue == '') {
        return alert('Please provide your number')
    }


    const right = document.getElementById('right');
    const error = document.getElementById('error');
    if (pinInputValue == calculateInputValue) {
        right.style.display = 'block';
        error.style.display = 'none';
    }
    else {
        error.style.display = 'block';
        right.style.display = 'none';
    }
}