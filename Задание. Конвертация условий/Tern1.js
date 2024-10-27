let a = Math.floor(Math.random() * 100);
let result;


console.log("Start: " + a);

if (a > 10) {
    // Если a больше 10, то просто сравниваем a с 5
    if (a > 5) {
        // Если a > 5, результат будет (2 * a) + 1
        result = (2 * a) + 1;
    } else {
        // Теоретически, это условие никогда не выполнится, потому что a > 10 уже гарантирует, что a > 5.
        // Но оставим его для ясности.
    }
} else {
    // Если a не больше 10, мы переходим к ветке, где используется a * 2
    if ((a * 2) > 5) {
        // Если удвоенное значение a больше 5, результат будет (2 * a) + 1
        result = (2 * a) + 1;
    } else {
        // Если удвоенное значение a не больше 5, переходим к следующей проверке
        if (a < 3) {
            // Если a меньше 3, значение 1
            if (1 > 4) {
                // Теоретически, это условие всегда ложно, но включим для полноты
                result = 5;
            } else {
                // Переходим к проверке четности, так как (1 > 4) не выполнено
                if (a % 2 == 0) {
                    result = 6; // Четное значение
                } else {
                    result = 7; 
                }
            }
        } else {
            if ((2 * (a - 2)) > 4) {
                result = 5;
            } else {
                if (a % 2 == 0) {
                    result = 6; 
                } else {
                    result = 7; 
                }
            }
        }
    }
}

let switchResult;

switch (true) {
    case (a > 10 && a > 5):
        switchResult = (2 * a) + 1;
        break;

    case (a <= 10 && (a * 2) > 5):
        switchResult = (2 * a) + 1;
        break;

    case (a <= 10 && (a * 2) <= 5 && a < 3):
        switch (a % 2) {
            case 0:
                switchResult = 6;
                break;
            default:
                switchResult = 7;
                break;
        }
        break;

    case (a <= 10 && (a * 2) <= 5 && a >= 3 && (2 * (a - 2)) > 4):
        switchResult = 5;
        break;

    case (a <= 10 && (a * 2) <= 5 && a >= 3 && (2 * (a - 2)) <= 4):
        switch (a % 2) {
            case 0:
                switchResult = 6;
                break;
            default:
                switchResult = 7;
                break;
        }
        break;
}

console.log("Standart result " + ((a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7)));
console.log("If-else result " + result);
console.log("Switch-case result " + switchResult);

console.log("Are they equals? " + (((a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7)) === result && result === switchResult));