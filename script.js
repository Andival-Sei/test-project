// Основной JavaScript файл

const userName = "Kirill";

let str = `Hello ${userName}`;

console.log(str);

// Функциональность для интерактивной кнопки
document.addEventListener('DOMContentLoaded', () => {
    const magicButton = document.getElementById('magicButton');
    const resultBox = document.getElementById('resultBox');
    
    // Массив с возможными сообщениями
    const messages = [
        `Привет, ${userName}! Рад видеть тебя снова!`,
        `${userName}, сегодня отличный день для новых открытий!`,
        `Знаешь, ${userName}, ты делаешь большие успехи!`,
        `Интересный факт, ${userName}: JavaScript был создан всего за 10 дней`,
        `${userName}, попробуй нажать еще раз для нового сообщения!`
    ];
    
    // Генерация случайных цветов
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    // Обработчик нажатия на кнопку
    magicButton.addEventListener('click', () => {
        // Выбираем случайное сообщение
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        // Анимация для кнопки
        magicButton.classList.add('clicked');
        setTimeout(() => {
            magicButton.classList.remove('clicked');
        }, 200);
        
        // Обновляем содержимое и стили блока результатов
        resultBox.style.backgroundColor = getRandomColor();
        resultBox.style.opacity = '1';
        
        // Создаем эффект печатающегося текста
        resultBox.textContent = '';
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < randomMessage.length) {
                resultBox.textContent += randomMessage.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 50);
    });
    
    // Функциональность для второй кнопки
    const newButton = document.getElementById('newButton');
    const additionalSection = document.querySelector('.additional-section');
    
    // Массив с интересными фактами
    const facts = [
        'Знаете ли вы, что первая веб-камера была создана для наблюдения за кофейником?',
        'Интересный факт: первый компьютерный вирус был создан в 1983 году',
        'Знаете ли вы, что первая компьютерная мышь была сделана из дерева?',
        'Интересный факт: первый сайт в интернете был запущен в 1991 году',
        'Знаете ли вы, что первая компьютерная игра была создана в 1958 году?'
    ];
    
    // Обработчик нажатия на вторую кнопку
    newButton.addEventListener('click', () => {
        // Выбираем случайный факт
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        
        // Создаем новый элемент для отображения факта
        const factElement = document.createElement('p');
        factElement.className = 'fact-text';
        factElement.textContent = randomFact;
        
        // Добавляем анимацию
        factElement.style.animation = 'fadeIn 0.5s ease-in-out';
        
        // Удаляем предыдущий факт, если он есть
        const existingFact = additionalSection.querySelector('.fact-text');
        if (existingFact) {
            existingFact.remove();
        }
        
        // Добавляем новый факт после кнопки
        newButton.insertAdjacentElement('afterend', factElement);
        
        // Анимация кнопки
        newButton.classList.add('clicked');
        setTimeout(() => {
            newButton.classList.remove('clicked');
        }, 200);
    });
});

