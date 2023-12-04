const popup = () => {
   const popupBtn = document.querySelectorAll('.popup-btn');
   const popup = document.querySelector('.popup');
   const popupClose = popup.querySelector('.popup-close');
   const popupContent = popup.querySelector('.popup-content');

   popup.style.opacity = "0";
   popupContent.style.transform = "scale(0)";

   const openPopup = () => {
      let count = 0;

      const animatePopup = () => {
         count += 0.1;

         let requestId = requestAnimationFrame(animatePopup);

         if (count >= 1) {
            cancelAnimationFrame(requestId);
         }

         popup.style.opacity = count;
         popupContent.style.transform = `scale(${count})`;
      }

      animatePopup();
   }

   const closePopup = () => {
      popup.style.display = "none";
      popup.style.opacity = "0";
      popupContent.style.transform = "scale(0)";
   }

   popupBtn.forEach(btn => {
      btn.addEventListener('click', () => {
         popup.style.display = "block";

         if (screen.width < 768) {
            popup.style.opacity = "1";
            popupContent.style.transform = "scale(1)";
         } else openPopup();
      });
   })

   //popupClose.addEventListener('click', () => {
   //   popup.style.display = "none";
   //   popup.style.opacity = "0";
   //   popupContent.style.transform = "scale(0)";
   //})

   popup.addEventListener('click', (e) => {
      if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) closePopup();
   });
}

export default popup;