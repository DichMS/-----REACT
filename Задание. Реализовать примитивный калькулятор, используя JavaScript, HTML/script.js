let displayValue = "";           // Текущее значение на дисплее
let operationLabel = "";          // Текущая операция, отображаемая сверху
let currentOperator = null;       // Оператор (+, -, *, /)
let firstOperand = null;          // Первый операнд для операции
let awaitingSecondOperand = false; // Флаг для ожидания второго операнда

function appendValue(value) {
    const display = $('#display');

    // Если начинаем новый расчет после "=" и вводится число
    if (awaitingSecondOperand && !isNaN(value)) {
        displayValue = ""; // Очищаем дисплей
        operationLabel = ""; // Очищаем метку операции
        awaitingSecondOperand = false;
    }

    // Если вводится оператор
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

    // Проверка для десятичной точки
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
        // Обновляем operationLabel для записи в историю
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
