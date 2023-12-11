const sendForm = ({formId, someElem = []}) => {
   const form = document.getElementById(formId);
   const statusBlock = document.createElement('div');

   const sendData = (data) => {
      return fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify(data)
      }).then(data => data.json());
   };
   

   try {
      if(!form) throw new Error('Ошибка');

      form.addEventListener('submit', (e) => {
         e.preventDefault();
         
         const formData = new FormData(form);
         const formBody = {};

         formData.forEach((val, key) => {
            formBody[key] = val;
         });

         someElem.forEach(elem => {
            const item = document.getElementById(elem.id);

            if (elem.type == 'block') formBody[elem.id] = item.textContent;
            if (elem.type == 'input') formBody[elem.id] = item.value;
         });

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
      });

   } catch(err) {}
}

export default sendForm;