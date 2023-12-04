const menu = () => {
   const menu = document.querySelector('menu');

   const handlerMenu = () => {
      menu.classList.toggle('active-menu');
   }

   const closeMenu = () => {
      menu.classList.remove('active-menu');
   }


   document.body.addEventListener('click', (e) => {
      if (!e.target.closest('menu') && !e.target.closest('.menu')) {
         closeMenu();
      }

      if (e.target.matches('menu>ul>li>a') 
         || e.target.classList.contains('close-btn')
         || e.target.closest('.menu')) {
            handlerMenu();
      }
   });
}

export default menu;