document.addEventListener('DOMContentLoaded', function() {
   const filterBtn = document.getElementById('filter__btn');
   const filterForm = document.getElementById('filterForm');

   filterBtn.addEventListener('click', function(event) {
       event.preventDefault(); // Предотвращаем переход по ссылке

       // Собираем данные формы
       const formData = new FormData(filterForm);

       // Преобразуем данные формы в объект
       const data = {};
       formData.forEach((value, key) => {
           data[key] = value;
       });

       // Отправляем данные на сервер
       fetch('/submit-filter', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify(data)
       })
       .then(response => response.text())
       .then(result => {
           console.log('Success:', result);
       })
       .catch(error => {
           console.error('Error:', error);
       });
   });
});