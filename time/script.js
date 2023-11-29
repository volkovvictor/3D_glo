'use strict';

const newYearDayRemaining = () => {
   const phases = ['Доброй ночи', 'Доброе утро', 'Добрый день',  'Добрый вечер'];

   const date = new Date('2023.12.31');
   const newYear = new Date('2024.01.01');

   const hours = date.getHours();
   const day = date.toLocaleDateString('ru', {weekday: "long"});
   const time = date.toLocaleTimeString('en');
   
   const dateRemaining = Math.floor((newYear.getTime() - date.getTime()) / 86400000);
   const greeting = hours > 0 && hours < 4 ? phases[0] : 
                     hours >= 4 && hours < 12 ? phases[1] :
                     hours >= 12 && hours < 17 ? phases[2] : phases[3];

   const declension = (num) => {
      return num % 10 === 1 && num % 100 !== 11 ? 
      "день" : num % 10 > 1 && num % 10 < 5 && (num % 100 < 12 || num % 100 > 14) ? 
      "дня" : "дней";
   }; 

   return dateRemaining > 0 ? `
   <p>${greeting}!</p>
   <p>Сегодня: ${day[0].toUpperCase() + day.slice(1)}</p>
   <p>Текущее время: ${time}</p>
   <p>До нового года осталось: ${dateRemaining} ${declension(dateRemaining)}</p>
   ` : "C НОВЫМ ГОДОМ!"
}

document.body.innerHTML = newYearDayRemaining();