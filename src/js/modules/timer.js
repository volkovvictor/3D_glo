const timer = (deadline) => {
   const timerHours = document.getElementById('timer-hours');
   const timerMinutes = document.getElementById('timer-minutes');
   const timerSeconds = document.getElementById('timer-seconds');

   const addZero = (num) => {
      return (num + "").length < 2 ? "0" + num : num;
   }

   const getRemainingTime = () => {
      const stopDate = new Date(deadline).getTime();
      const nowDate = new Date().getTime();
      const timeRemaining = (stopDate - nowDate) / 1000;
      const hours = Math.floor(timeRemaining / 60 / 60) ;
      const minutes = Math.floor(timeRemaining / 60) % 60;
      const seconds = Math.floor(timeRemaining) % 60;
      
      return {timeRemaining, hours, minutes, seconds};
   };

   const updateTime = () => {
      const getTime = getRemainingTime();

      timerHours.textContent = addZero(getTime.hours < 0 ? 0 : getTime.hours);
      timerMinutes.textContent = addZero(getTime.minutes < 0 ? 0 : getTime.minutes);
      timerSeconds.textContent = addZero(getTime.seconds < 0 ? 0 : getTime.seconds);

      if (getTime.timeRemaining > 0) {
         let idInterval = setInterval(updateTime, 1000);
      }
   };

   updateTime();
};

export default timer;