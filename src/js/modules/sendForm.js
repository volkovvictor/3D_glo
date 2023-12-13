const sendForm = ({formId, someElem = []}) => {
   const form = document.getElementById(formId);
   const statusBlock = document.createElement('div');

   const sendData = (data) => {
      return fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify(data)
      }).then(data => data.json());
   };

   const validate = (input) => {
      input.classList.remove('error');
      input.style.border = '';

      if (input.value.trim() === '') input.classList.add('error');
      if (input.type === 'tel' && input.value.length < 11) input.classList.add('error');
      if (input.classList.contains('error')) input.style.border = '1px solid red';
   }
   

   try {
      if(!form) throw new Error('Ошибка');

      form.addEventListener('submit', (e) => {
         e.preventDefault();
         
         const inputs = form.querySelectorAll('input');
         const formData = new FormData(form);
         const formBody = {};

         let success = true;

         formData.forEach((val, key) => {
            formBody[key] = val;
         });

         someElem.forEach(elem => {
            const item = document.getElementById(elem.id);

            if (elem.type == 'block') formBody[elem.id] = item.textContent;
            if (elem.type == 'input') formBody[elem.id] = item.value;
         });

         inputs.forEach(input => {
            validate(input);

            if (input.classList.contains('error')) success = false;
         });

         if (success) {
            statusBlock.textContent = 'Загрузка...';
            form.append(statusBlock);

            sendData(formBody)
               .then(data => {
                  form.reset();
                  statusBlock.textContent = 'Данные отправлены!';
               })
               .catch(err => {
                  statusBlock.textContent = 'Произошла ошибка'
               }) 
         }
      });

   } catch(err) {}
}

export default sendForm;