const validation = () => {
   const calcBlock = document.querySelector('.calc-block');
   const calcInputs = calcBlock.querySelectorAll('input[type="text"]');
   const forms = document.querySelectorAll('form');

   const inputNum = (str) => {
      return str.replace(/\D/gi, "");
   };

   const allValidate = (input) => {
      const strArr = [];
      const type = input.getAttribute("type") || input.getAttribute("name");
      
      let str = input.value;

      str = str.replace(/^\-+/gi, "").trim();
      str = str.replace(/\-+$/gi, "").trim();
      str = str.replace(/\s{2,}/gi, " ").trim();
      str = str.replace(/\-{2,}/gi, "-").trim();
      
      if (type === "email") str = str.replace(/[^\@\-\_\.\!\~\*\'\w]/gi, "");

      if (type === "tel") str = str.replace(/[^\-()\d]/g, "");

      if (type === "text" || type === "user_message") {
         str = str.replace(/[^а-я\-\s]/gi, "").trim();
         if (str === "") return str;

         str.split(' ').forEach(item => strArr.push(item[0].toUpperCase() + item.slice(1)));
         str = strArr.join(' ');
      }

      return str;
   }

   calcInputs.forEach(input => {
      input.addEventListener('blur', () => {
         input.value = inputNum(input.value);
      });
   });
   

   forms.forEach(form => {
      const name = form.querySelector('input[name="user_name"]');
      const email = form.querySelector('input[type="email"]');
      const phone = form.querySelector('input[type="tel"]');
      const message = form.querySelector('input[name="user_message"]');


      name.addEventListener('blur', () => {
         name.value = allValidate(name);
      });

      if (message) {
         message.addEventListener('blur', () => {
            message.value = allValidate(message);
         });
      }

      email.addEventListener('blur', () => {
         email.value = allValidate(email);
      });

      phone.addEventListener('blur', () => {
         phone.value = allValidate(phone);
      });
      
   });
}

export default validation;