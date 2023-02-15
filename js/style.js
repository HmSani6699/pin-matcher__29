function getPin() {
    const pinNumber = Math.round(Math.random() * 10000) + '';
    if (pinNumber.length == 4) {
        return pinNumber
    }
    else {
        return getPin()
    }
}

function getInputValue(id, value) {
    const inputFiled = document.getElementById(id);
    const newInputFiledValue = inputFiled.value = value;
    return newInputFiledValue
}

document.getElementById('generatePin').addEventListener('click', function () {
    const pinNumber = getPin();
    getInputValue('click-input', pinNumber);
});

document.getElementById('type-number').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calculateInputFiled = document.getElementById('calculate-input-filed');

    if (isNaN(number)) {

        if (number == "C") {
            calculateInputFiled.value = '';
        }
    }
    else {
        const previousInputValue = calculateInputFiled.value;
        const newInputValue = previousInputValue + number;
        calculateInputFiled.value = newInputValue
    }
})