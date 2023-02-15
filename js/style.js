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
})