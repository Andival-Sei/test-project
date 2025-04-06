// Основной JavaScript файл
document.addEventListener('DOMContentLoaded', function() {
    console.log('Скрипт успешно подключен!');
    
	// Здесь будет основной код вашего приложения
	
    // Примеры типов данных JavaScript
    
    // 1. String (строка)
    const str = "Привет, мир!";
    console.log('String:', str, typeof str);
    
    // 2. Number (число)
    const num = 42;
    const floatNum = 3.14;
    console.log('Number:', num, typeof num);
    console.log('Float:', floatNum, typeof floatNum);
    
    // 3. Boolean (логический тип)
    const isTrue = true;
    const isFalse = false;
    console.log('Boolean:', isTrue, typeof isTrue);
    
    // 4. Null
    const nullValue = null;
    console.log('Null:', nullValue, typeof nullValue);
    
    // 5. Undefined
    let undefinedValue;
    console.log('Undefined:', undefinedValue, typeof undefinedValue);
    
    // 6. Symbol
    const symbol = Symbol('описание');
    console.log('Symbol:', symbol, typeof symbol);
    
    // 7. BigInt
    const bigInt = 9007199254740991n;
    console.log('BigInt:', bigInt, typeof bigInt);
    
    // 8. Object (объект)
    const obj = {
        name: "Иван",
        age: 30
    };
    console.log('Object:', obj, typeof obj);
    
    // Массив - это тоже объект
    const arr = [1, 2, 3];
	console.log('Array:', arr, typeof arr);
	



	
    
    // 1. Function Declaration (Объявление функции)
    function sayHello(name) {
        return `Привет, ${name}!`;
    }
    console.log('Function Declaration:', sayHello('Иван'));
    
    // 2. Function Expression (Функциональное выражение)
    const sayGoodbye = function(name) {
        return `Пока, ${name}!`;
    };
    console.log('Function Expression:', sayGoodbye('Иван'));
    
    // 3. Arrow Function (Стрелочная функция)
    const sum = (a, b) => a + b;
    console.log('Arrow Function:', sum(5, 3));
    
    // 4. Функция с параметрами по умолчанию
    function greet(name = 'Гость') {
        return `Добро пожаловать, ${name}!`;
    }
    console.log('Default Parameters:', greet());
    console.log('Default Parameters:', greet('Пётр'));
    
    // 5. Функция с неопределённым количеством аргументов
    function sumAll(...numbers) {
        return numbers.reduce((acc, num) => acc + num, 0);
    }
    console.log('Rest Parameters:', sumAll(1, 2, 3, 4, 5));
    
    // 6. Функция как значение
    const operations = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b
    };
    console.log('Function as value:', operations.add(10, 5));
    
    // 7. Функция высшего порядка (принимает функцию как аргумент)
    function calculate(a, b, operation) {
        return operation(a, b);
    }
    console.log('Higher-order function:', calculate(10, 5, operations.add));
    
    // 8. Рекурсивная функция
    function factorial(n) {
        if (n === 0 || n === 1) return 1;
        return n * factorial(n - 1);
    }
    console.log('Recursive function:', factorial(5));
}); 