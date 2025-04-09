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
});

