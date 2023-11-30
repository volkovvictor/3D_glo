const menu = () => {
   const menuBtn = document.querySelector('.menu');
   const menu = document.querySelector('menu');
   const closeBtn = menu.querySelector('.close-btn');
   const menuItems = menu.querySelectorAll('ul>li>a');

   const handlerMenu = () => {
      menu.classList.toggle('active-menu');
   }

   menuBtn.addEventListener('click', handlerMenu);
   closeBtn.addEventListener('click', handlerMenu);

   menuItems.forEach(item => {
      item.addEventListener('click', handlerMenu);
   });
}

export default menu;