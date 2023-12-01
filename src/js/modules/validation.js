const validation = () => {
   const calcBlock = document.querySelector('.calc-block');
   const calcInputs = calcBlock.querySelectorAll('input[type="text"]');
   const forms = document.querySelectorAll('form');

   const inputNum = (str) => {
      return str.replace(/\D/gi, "");
   };

   calcInputs.forEach(input => {
      input.addEventListener('input', () => {
         input.value = inputNum(input.value);
      });
   });

   forms.forEach(form => {
      const name = form.querySelector('input[name="user_name"]');
      const email = form.querySelector('input[type="email"]');
      const phone = form.querySelector('input[type="tel"]');
      const message = form.querySelector('input[name="user_message"]');

      name.addEventListener('input', () => {
         name.value = name.value.replace(/[^а-я\-\s]/gi, "");
      });

      if (message) {
         message.addEventListener('input', () => {
            message.value = message.value.replace(/[^а-я\-\s]/gi, "");
         });
      }

      email.addEventListener('input', () => {
         email.value = email.value.replace(/[^@-_\.!~*\'\w]/gi, "");
      });

      phone.addEventListener('input', () => {
         phone.value = phone.value.replace(/[^-()\d]/g, "");
      });
      
   });
}

export default validation;