let displayValue = "";
let operationLabel = "";
let currentOperator = null;
let firstOperand = null;
let awaitingSecondOperand = false;

function appendValue(value) {
    const display = $('#display');

    if (awaitingSecondOperand && !isNaN(value)) {
        displayValue = "";
        operationLabel = "";
        awaitingSecondOperand = false;
    }

    if (['+', '-', '*', '/'].includes(value)) {
        if (firstOperand === null) {
            firstOperand = parseFloat(displayValue);
        } else if (currentOperator) {
            const result = performCalculation(currentOperator, firstOperand, parseFloat(displayValue));
            displayValue = String(result);
            firstOperand = result;
        }
        currentOperator = value;
        awaitingSecondOperand = true;
        operationLabel = firstOperand + " " + currentOperator + " ";
        $('#operation-label').text(operationLabel);
        $('#display').val(displayValue);
        return;
    }

    if (value === ',') {
        value = '.';
    }
    if (value === '.' && displayValue.includes('.')) {
        return;
    }

    displayValue += value;
    $('#display').val(displayValue);
}

function clearDisplay() {
    displayValue = "";
    firstOperand = null;
    currentOperator = null;
    awaitingSecondOperand = false;
    $('#display').val('');
    $('#operation-label').text('');
}

function calculate() {
    if (currentOperator && firstOperand !== null) {
        const secondOperand = parseFloat(displayValue);
        const result = performCalculation(currentOperator, firstOperand, secondOperand);
        displayValue = String(result);
        operationLabel = `${firstOperand} ${currentOperator} ${secondOperand} = ${displayValue}`;
        addHistory(operationLabel.replace(/\./g, ','));
        $('#display').val(displayValue);
        $('#operation-label').text(displayValue);
        firstOperand = result;
        currentOperator = null;
        awaitingSecondOperand = true;
    }
}

function performCalculation(operator, firstOperand, secondOperand) {
    switch (operator) {
        case '+': return firstOperand + secondOperand;
        case '-': return firstOperand - secondOperand;
        case '*': return firstOperand * secondOperand;
        case '/': return firstOperand / secondOperand;
        default: return secondOperand;
    }
}

function addHistory(operation) {
    const entry = $('<div></div>').text(operation);
    $('#history').append(entry);
}
