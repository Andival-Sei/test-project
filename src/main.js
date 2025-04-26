// Импорт стилей
import './main.scss';

// Логика для калькулятора
// Ждём полной загрузки DOM
window.addEventListener('DOMContentLoaded', () => {
  // Получаем элементы калькулятора по БЭМ-классам
  const calculator = document.querySelector('.calculator');
  const display = document.querySelector('.calculator__display');
  const buttons = document.querySelector('.calculator__buttons');

  // Текущее выражение и флаг для сброса дисплея после вычисления
  let currentInput = '';
  let shouldResetDisplay = false;

  // Функция для обновления дисплея
  function updateDisplay(value) {
    // Если значение слишком длинное, обрезаем
    display.textContent = value.length > 12 ? value.slice(0, 12) + '…' : value;
  }

  // Функция для обработки нажатий кнопок
  function handleButtonClick(text) {
    // Если нажата кнопка "C" — сброс
    if (text === 'C') {
      currentInput = '';
      updateDisplay('0');
      return;
    }

    // Если нажата кнопка "=" — вычисление
    if (text === '=') {
      try {
        // Вычисляем выражение с помощью eval (в реальных проектах лучше парсить вручную)
        // Заменяем запятую на точку для корректного вычисления
        let result = eval(currentInput.replace(/,/g, '.'));
        // Преобразуем результат к строке и заменяем точку на запятую для русской локали
        result = String(result).replace('.', ',');
        updateDisplay(result);
        currentInput = result;
        shouldResetDisplay = true;
      } catch (e) {
        updateDisplay('Ошибка');
        currentInput = '';
        shouldResetDisplay = true;
      }
      return;
    }

    // Если нажата кнопка с цифрой или оператором
    if (shouldResetDisplay) {
      // После вычисления начинаем новое выражение
      currentInput = '';
      shouldResetDisplay = false;
    }

    // Заменяем точку на запятую для русской локали
    if (text === '.') text = ',';

    // Добавляем символ к текущему выражению
    currentInput += text;
    updateDisplay(currentInput);
  }

  // Навешиваем обработчик на все кнопки калькулятора
  if (buttons) {
    buttons.addEventListener('click', (event) => {
      if (event.target.classList.contains('calculator__button')) {
        const text = event.target.textContent.trim();
        handleButtonClick(text);
      }
    });
  }

  // Изначально отображаем 0
  updateDisplay('0');
}); 