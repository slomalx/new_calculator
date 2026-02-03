
import './dropInput.js'



document.addEventListener('click', (event) => {
    if (event.target.classList.contains('operation')) {
       
    }
})

plus.addEventListener('click', () => {
    inputField.value += ' + '
})

minus.addEventListener('click', () => {
    inputField.value += ' - '
})

divide.addEventListener('click', () => {
    inputField.value += ' ÷ '
})

multi.addEventListener('click', () => {
    inputField.value += ' x '
})

eqw.addEventListener('click', ()=> {
    inputField.value = calculateExpression(inputField.value.split(' '))
})


function calculateExpression(expression) {
    // Шаг 1: Обрабатываем умножение и деление
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '÷' || expression[i] === 'x') {
            const left = expression[i - 1];
            const right = expression[i + 1];
            const operator = expression[i];
            
            let result;
            if (operator === 'x') {
                result = left * right;
            } else if (operator === '÷') {
                result = left / right;
            }
            
            // Заменяем три элемента (число, оператор, число) на результат
            expression.splice(i - 1, 3, result);
            i--; // Уменьшаем индекс, так как массив стал короче
        }
    }
    
    // Шаг 2: Обрабатываем сложение и вычитание
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '+' || expression[i] === '-') {
            const left = expression[i - 1];
            const right = expression[i + 1];
            const operator = expression[i];
            
            let result;
            if (operator === '+') {
                result = left + right;
            } else if (operator === '-') {
                result = left - right;
            }
            
            // Заменяем три элемента на результат
            expression.splice(i - 1, 3, result);
            i--; // Уменьшаем индекс
        }
    }
    
    // В конце должен остаться только один элемент - результат
    return expression[0];
}


