// Основной JavaScript файл
document.addEventListener('DOMContentLoaded', function() {
    // Код будет выполняться после загрузки DOM
    console.log('Страница загружена');
    
    // Плавная прокрутка до секции контактов при нажатии на кнопку в шапке
    const contactBtn = document.querySelector('.header .button--primary');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            const contactSection = document.querySelector('.contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Анимация карточек при наведении
    const helpCards = document.querySelectorAll('.help-card');
    helpCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('card-hover');
        });
        card.addEventListener('mouseleave', function() {
            this.classList.remove('card-hover');
        });
    });
    
    // Анимация для feature-карточек
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('click', function() {
            // Удаляем активный класс со всех карточек
            featureCards.forEach(c => c.classList.remove('feature-active'));
            // Добавляем активный класс на текущую
            this.classList.add('feature-active');
        });
    });
    
    // Модальное окно для кнопки в секции you-should-know
    const yellowBtn = document.querySelector('.you-should-know .button--yellow');
    if (yellowBtn) {
        yellowBtn.addEventListener('click', function() {
            showModal('Спасибо за интерес!', 'Наш специалист свяжется с вами в ближайшее время.');
        });
    }
    
    // Функция для отображения модального окна
    function showModal(title, message) {
        // Создаем элементы модального окна
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'modal-overlay';
        
        const modalWindow = document.createElement('div');
        modalWindow.className = 'modal-window';
        
        const modalTitle = document.createElement('h3');
        modalTitle.className = 'modal-title';
        modalTitle.textContent = title;
        
        const modalMessage = document.createElement('p');
        modalMessage.className = 'modal-message';
        modalMessage.textContent = message;
        
        const closeButton = document.createElement('button');
        closeButton.className = 'modal-close';
        closeButton.textContent = 'Закрыть';
        
        // Собираем модальное окно
        modalWindow.appendChild(modalTitle);
        modalWindow.appendChild(modalMessage);
        modalWindow.appendChild(closeButton);
        modalOverlay.appendChild(modalWindow);
        
        // Добавляем на страницу
        document.body.appendChild(modalOverlay);
        
        // Запрещаем прокрутку страницы
        document.body.style.overflow = 'hidden';
        
        // Закрытие по клику на кнопку
        closeButton.addEventListener('click', function() {
            modalOverlay.remove();
            document.body.style.overflow = '';
        });
        
        // Закрытие по клику вне модального окна
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                modalOverlay.remove();
                document.body.style.overflow = '';
            }
        });
    }
});