const slider = () => {
   const portfolioContent = document.querySelector('.portfolio-content')
   const portfolioItems = portfolioContent.querySelectorAll('.portfolio-item');
   const portfolioDots = portfolioContent.querySelector('.portfolio-dots');
   
   const intervalTime = 2000;

   let dots = null;

   let currentSlide = 0;
   let interval;

   const addDots = () => {
      portfolioDots.innerHTML = '';
      portfolioItems.forEach((item, index) => {
         const dot = document.createElement('li');
         dot.classList.add('dot');

         if (index === 0) dot.classList.add('dot-active');

         portfolioDots.append(dot);
      });

      dots = portfolioContent.querySelectorAll('.dot');
   }

   const nextSlide = (arr, index, className) => {
      arr[index].classList.add(className);
   }

   const prevSlide = (arr, index, className) => {
      arr[index].classList.remove(className);
   }

   const autoSlide = () => {
      prevSlide(portfolioItems, currentSlide, 'portfolio-item-active');
      prevSlide(dots, currentSlide, 'dot-active');

      currentSlide++;

      if (currentSlide >= portfolioItems.length) {
         currentSlide = 0;
      }

      nextSlide(portfolioItems, currentSlide, 'portfolio-item-active');
      nextSlide(dots, currentSlide, 'dot-active');
   }

   const startSlider = (time = 1500) => {
      interval = setInterval(autoSlide, time);
   }

   const stopSlider = () => {
      clearInterval(interval);
   }

   portfolioContent.addEventListener('click', (e) => {
      e.preventDefault();

      const target = e.target;

      if (!target.classList.contains('portfolio-btn') && !target.classList.contains('dot')) return;

      prevSlide(portfolioItems, currentSlide, 'portfolio-item-active');
      prevSlide(dots, currentSlide, 'dot-active');

      if (target.id === 'arrow-right') {
         currentSlide++;
      }
      if (target.id === 'arrow-left') {
         currentSlide--;
      }
      if (target.classList.contains('dot')) {
         dots.forEach((dot, index) => {
            if (dot === target) {
               currentSlide = index;
            }
         });
      }

      if (currentSlide >= portfolioItems.length) {
         currentSlide = 0;
      }

      if (currentSlide < 0) {
         currentSlide = portfolioItems.length - 1;
      }

      nextSlide(portfolioItems, currentSlide, 'portfolio-item-active');
      nextSlide(dots, currentSlide, 'dot-active');
   });

   portfolioContent.addEventListener('mouseover', (e) => {
      const target = e.target;
      if (target.classList.contains('portfolio-btn') || target.classList.contains('dot')) {
         stopSlider();
      }
   });

   portfolioContent.addEventListener('mouseout', (e) => {
      const target = e.target;
      if (target.classList.contains('portfolio-btn') || target.classList.contains('dot')) {
         startSlider(intervalTime);
      }
   });

   addDots();
   startSlider(intervalTime);
};

export default slider;