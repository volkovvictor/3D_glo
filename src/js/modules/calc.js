const calc = (price) => {
   const calcBlock = document.querySelector('.calc-block');
   const calcType = calcBlock.querySelector('.calc-type');
   const calcSquare = calcBlock.querySelector('.calc-square');
   const calcCount = calcBlock.querySelector('.calc-count');
   const calcDay = calcBlock.querySelector('.calc-day');
   const total = document.getElementById('total');

   const countCalc = () => {
      const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
      const calcSquareValue = +calcSquare.value;

      let totalPrice = 0;
      let calcCountValue = 1;
      let calcDayValue = 1;

      calcCountValue += calcCount.value > 1 ? calcCount.value / 10 : 0;
      calcDayValue = calcDay.value && calcDay.value < 5 ? 2 : calcDay.value && calcDay.value < 10 ? 1.5 : 1;


      if (calcTypeValue && calcSquareValue) {
         totalPrice = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
      }

      total.textContent = totalPrice;
   };

   calcBlock.addEventListener('input', (e) => {
      const target = e.target;

      if (target === calcType || target === calcSquare
         || target === calcCount || target === calcDay) {
            countCalc();
            
      }
   })
}

export default calc;