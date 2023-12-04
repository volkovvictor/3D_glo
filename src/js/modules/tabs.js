const tabs = () => {
   const serviceHeader = document.querySelector('.service-header');
   const serviceHeaderTabs = serviceHeader.querySelectorAll('.service-header-tab');
   const serviceTabs = document.querySelectorAll('.service-tab');

   serviceHeader.addEventListener('click', (e) => {
      const target = e.target;

      if (target.closest('.service-header-tab')) {
         const tabItem = target.closest('.service-header-tab');
         serviceHeaderTabs.forEach((tab, index) => {
            if (tab === tabItem) {
               tab.classList.add('active');
               serviceTabs[index].classList.remove('d-none');
            } else {
               tab.classList.remove('active');
               serviceTabs[index].classList.add('d-none');
            }
         });
      }
   });
};

export default tabs;