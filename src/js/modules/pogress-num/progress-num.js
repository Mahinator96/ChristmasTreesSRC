/* 
  Анимация счётчика.

  Обязательны аттрибуты:
    - У родителя data-anim (для observer - подключаем его в app.js import './modules/observer/animation.js';)
    - Указать в 

  Пример структуры: 
    <ul class=" stat" data-anim="stat--anim">
      <li class="stat-item" data-stat="1,542+">
        <svg class=" stat-img" viewBox="0 0 56 56" width="56" height="56">
          <use xlink:href="@img/sprite.svg#stat-clients" role="img" aria-label=""></use>
        </svg>

        <div class="stat-about">
          <p class="stat-num">0</p>

          <p class="stat-title">Satisfied Clients</p>
        </div>
      </li>
    </ul>
*/
let classList         = '.stat';      // Класс родителя онимированных элементов
let classListAnim     = 'stat--anim'; // Класс родителя для запуска анимации
let classListAnimStop = 'stat--stop'; // Класс родителя для остановки анимации
let classItem         = '.stat-item'; // Класс анимированных жлементов
let classNum          = '.stat-num';  // Класс блока вывода счётчика
let dataName          = 'data-stat';   // data у каждого анимированного элемента
let time              = 120;                  // Время анимации (мс)

if (document.querySelector(classList) && document.querySelectorAll(classItem)) {

  let statList = document.querySelector(classList);      // Родитель всех анимированных элементов
  let statItems = document.querySelectorAll(classItem);  // Анимированные элементы
  
  
  // Добавляем при слушатель при скролле 
  window.addEventListener('scroll', numCounter) // Запускаем функцию анимации
  
  // Функция анимации счётчика
  function numCounter() {
  
      // Проверка на активный класс и отсутствия СТОП-класса для анимации
      if (statList.classList.contains(classListAnim) && !statList.classList.contains(classListAnimStop)) { 
  
        statItems.forEach((item) => {                                        // Перебираем все анимированные элементы
  
            let reviewNum = item.getAttribute(dataName);                    // Ноходим data в которой указано число счётчика
            let reviewNumData = item.getAttribute(dataName).replace(/\D/g, ""); // Вырезаем из числа всё кроме чисел
            let itemNum = item.querySelector(classNum);                     // Находим у блок вывода счётчика
          
            let counter = 0;                                                // Инидивидуальный счётчик для каждого элемента
          
            // Запуск счётчика интервалом
            setInterval(() => {          
              if (counter <= reviewNumData) {                               // Если счётчик меньше, чем число из data
                counter += reviewNumData / time;                            // Получаем шаг для интервала
                itemNum.innerHTML = Math.round(counter);                    // Округляем число
              } else {
                itemNum.innerHTML = reviewNum;                              // Иначе
                clearInterval();                                            // Удаляем анимацию
              }
            }, 10)
        })
  
        statList.classList.add(classListAnimStop);                          // Добавляем класс для прекращения анимации
        window.removeEventListener('scroll', numCounter);                   // Удаляем обработчик события
      }
  }
}

