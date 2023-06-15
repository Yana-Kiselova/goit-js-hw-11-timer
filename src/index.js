// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты.
// Такой плагин может использоваться в блогах и интернет - магазинах, страницах регистрации событий, во время технического обслуживания и т.д.
// Плагин ожидает следующую HTML - разметку и показывает четыре цифры: дни, часы, минуты и секунды в формате XX: XX: XX: XX.
//  Количество дней может состоять из более чем двух цифр.

// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.element = document.querySelector(selector);
    this.targetDate = targetDate;

    this.startWatch();
  }

  startWatch() {
    setInterval(() => {
      this.timer();
    }, 1000);
  }

  /* Принимает число, приводит к строке и добавляет 0, если число меньше 2-х знаков*/
  pad(value) {
    return String(value).padStart(2, '0');
  }

  timer() {
    let startDate = new Date();
    let time = Math.floor(this.targetDate - startDate);
    let days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    let hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    let mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    let secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.element.querySelector('[data-value="days"]').textContent = days;
    this.element.querySelector('[data-value="hours"]').textContent = hours;
    this.element.querySelector('[data-value="mins"]').textContent = mins;
    this.element.querySelector('[data-value="secs"]').textContent = secs;
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Feb 16, 2024 00:00:00'),
});
const timer2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Aug 23, 2023 00:00:00'),
});

/*Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate и текущей датой.

 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);
