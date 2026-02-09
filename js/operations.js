
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

percent.addEventListener('click', () => {
    inputField.value += ' % '
})

eqw.addEventListener('click', ()=> {
    inputField.value = calculateExpression(inputField.value.split(' '))
})


function calculateExpression(expression) {




    // преобразуем все строки-числа в настоящие числа
    for (let i = 0; i < expression.length; i++) {
        if (typeof expression[i] === 'string' && !isNaN(expression[i]) && expression[i] !== '') {
            expression[i] = parseFloat(expression[i]);
        }
    }
  
            // Шаг 1: Обрабатываем унарные минусы
            for (let i = 0; i < expression.length; i++) {
                if (expression[i] === '-' && 
                    (i === 0 || typeof expression[i-1] !== 'number')) {
                    // Это унарный минус, объединяем его со следующим числом
                    if (typeof expression[i+1] === 'number') {
                        expression[i+1] = -expression[i+1];
                        expression.splice(i, 1);
                        i--;
                        if (expression[0] === '') {
                            expression.splice(0, 1);
                        }
                    }
                }
            }
          
        
            

            
    // Шаг 2: Обрабатываем умножение и деление
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '÷' || expression[i] === 'x') {
            const left = parseFloat(expression[i - 1]);
            const right = parseFloat(expression[i + 1]);
            const operator = expression[i];
            
            let result;
            if (operator === 'x') {
                result = left * right;
            } else if (operator === '÷') {
                result = left / right;
            }
            
            // Округляем до 10 знаков после запятой для избежания ошибок с плавающей точкой
            result = Math.round(result * 10000000000) / 10000000000;
            
            // Заменяем три элемента (число, оператор, число) на результат
            expression.splice(i - 1, 3, result);
            i--; // Уменьшаем индекс, так как массив стал короче
        }
    }
    
    
    // Шаг 3: Обрабатываем сложение и вычитание
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '+' || expression[i] === '-') {
            const left = parseFloat(expression[i - 1]);
            const right = parseFloat(expression[i + 1]);
            const operator = expression[i];
            
            let result;
            if (operator === '+') {
                result = left + right;
            } else if (operator === '-') {
                result = left - right;
            }
            
            // Округляем до 10 знаков после запятой для избежания ошибок с плавающей точкой
            result = Math.round(result * 10000000000) / 10000000000;
            
            // Заменяем три элемента на результат
            expression.splice(i - 1, 3, result);
            i--; // Уменьшаем индекс
        }
    }
 
    // В конце должен остаться только один элемент - результат
    // Округляем финальный результат
    return Math.round(expression[0] * 10000000000) / 10000000000;
    
    
}



