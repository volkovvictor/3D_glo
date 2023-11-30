const scroll = () => {
   const scrollBtn = document.querySelector('a[href="#service-block"]');
   const scrollMenuLinks = document.querySelectorAll('menu>ul>li>a');

   const scrollToBlock = (selector) => {
      const block = document.querySelector(selector);

      block.scrollIntoView({behavior: "smooth", block: "center"});
   };

   scrollBtn.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToBlock(scrollBtn.getAttribute('href'));
   });

   scrollMenuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', (e) => {
         e.preventDefault();
         scrollToBlock(menuLink.getAttribute('href'));
      });
   });
}

export default scroll;