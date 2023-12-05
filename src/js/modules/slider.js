const slider = (sliderBody, slide, dotsRow, activeSlide = 'slide-active', activeDot = 'active-dot') => {
   const sliderContent = document.querySelector(sliderBody);
   const slides = document.querySelectorAll(slide);
   const dotsContainer = document.querySelector(dotsRow);


   if (!sliderContent || !dotsContainer || !slides.length) return;
   
   const intervalTime = 2000;

   let dots = null;

   let currentSlide = 0;
   let interval;

   const addDots = () => {
      dotsContainer.innerHTML = '';
      slides.forEach((item, index) => {
         const dot = document.createElement('li');
         dot.classList.add('dot');

         if (index === 0) dot.classList.add(activeDot);

         dotsContainer.append(dot);
      });

      dots = sliderContent.querySelectorAll('.dot');
   }

   const nextSlide = (arr, index, className) => {
      arr[index].classList.add(className);
   }

   const prevSlide = (arr, index, className) => {
      arr[index].classList.remove(className);
   }

   const autoSlide = () => {
      prevSlide(slides, currentSlide, activeSlide);
      prevSlide(dots, currentSlide, activeDot);

      currentSlide++;

      if (currentSlide >= slides.length) {
         currentSlide = 0;
      }

      nextSlide(slides, currentSlide, activeSlide);
      nextSlide(dots, currentSlide, activeDot);
   }

   const startSlider = (time = 1500) => {
      interval = setInterval(autoSlide, time);
   }

   const stopSlider = () => {
      clearInterval(interval);
   }

   sliderContent.addEventListener('click', (e) => {
      e.preventDefault();

      const target = e.target;

      if (!target.classList.contains('portfolio-btn') && !target.classList.contains('dot')) return;

      prevSlide(slides, currentSlide, activeSlide);
      prevSlide(dots, currentSlide, activeDot);

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

      if (currentSlide >= slides.length) {
         currentSlide = 0;
      }

      if (currentSlide < 0) {
         currentSlide = slides.length - 1;
      }

      nextSlide(slides, currentSlide, activeSlide);
      nextSlide(dots, currentSlide, activeDot);
   });

   sliderContent.addEventListener('mouseover', (e) => {
      const target = e.target;
      if (target.classList.contains('portfolio-btn') || target.classList.contains('dot')) {
         stopSlider();
      }
   });

   sliderContent.addEventListener('mouseout', (e) => {
      const target = e.target;
      if (target.classList.contains('portfolio-btn') || target.classList.contains('dot')) {
         startSlider(intervalTime);
      }
   });

   addDots();
   startSlider(intervalTime);
};

export default slider;