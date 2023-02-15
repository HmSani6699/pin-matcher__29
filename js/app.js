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
    }
    else {
        const newInputValue = getInputValue + number;
        getInputFiled.value = newInputValue
    }

})