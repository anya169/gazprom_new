(function () {
    "use strict";
    
    document.addEventListener('DOMContentLoaded', function() {
        const loginForm = document.getElementById('loginForm');
        const errorMessage = document.getElementById('errorMessage');
        if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Предотвращаем переход по ссылке
    
            const formData = new FormData(loginForm);
            const username = formData.get('username');
            const password = formData.get('password');
    
            fetch('http://127.0.0.1:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    username: username,
                    password: password
                })
            })
            
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    console.log(result.log_ID);
                    // Сохраняем данные в localStorage
                    localStorage.setItem('log_ID', result.log_ID);
                    localStorage.setItem('name', result.name);
                    localStorage.setItem('surname', result.surname);
                    localStorage.setItem('second_name', result.second_name);
                    localStorage.setItem('department', result.department);
                    localStorage.setItem('date_of_birth', result.date_of_birth);
                    localStorage.setItem('experience', result.experience);
                    localStorage.setItem('marital_status', result.marital_status);
                    localStorage.setItem('address', result.address);
                    localStorage.setItem('number', result.number);
                    localStorage.setItem('email', result.email);
                    localStorage.setItem('child_count', result.child_count);
    
                    window.location.href = `http://localhost:3001/profile.html`;
                } else {
                    errorMessage.textContent = result.message;
                    errorMessage.style.display = 'block';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                errorMessage.textContent = 'Неверный логин и пароль';
                errorMessage.style.display = 'block';
            });
        });
    }
    });


    document.addEventListener('DOMContentLoaded', function() {
        const logID = localStorage.getItem('log_ID');
        const name = localStorage.getItem('name');
        const surname = localStorage.getItem('surname');
        const second_name = localStorage.getItem('second_name');
        const department = localStorage.getItem('department');
        const date_of_birth = localStorage.getItem('date_of_birth');
        const experience = localStorage.getItem('experience');
        const marital_status= localStorage.getItem('marital_status');
        const address = localStorage.getItem('address');
        const number = localStorage.getItem('number');
        const email = localStorage.getItem('email');
        const child_count = localStorage.getItem('child_count');
        
        if (logID && name && surname) {
            document.querySelector('.info__surname-value').textContent = surname;
            document.querySelector('.info__name-value').textContent = name;
            document.querySelector('.info__secondname-value').textContent = second_name;
            document.querySelector('.info__department-value').textContent = department;
            document.querySelector('.info__dateofbirth-value').textContent = date_of_birth;
            document.querySelector('.info__exp-value').textContent = experience;
            document.querySelector('.info__place-value').textContent = address;
            document.querySelector('.info__status-value').textContent = marital_status;
            document.querySelector('.info__telephone-value').textContent = number;
            document.querySelector('.info__email-value').textContent = email;
            document.querySelector('.info__childcount-value').textContent = child_count;

            document.querySelector('.page-header__btn span').textContent = `${name} ${surname}`;
        } else {
            console.error('No user data found in localStorage');
        }
    
    });
    document.addEventListener('DOMContentLoaded', function() {
        const filterForm = document.getElementById('filterForm');
        if (filterForm) {
        filterForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Предотвращаем переход по ссылке
    
            // Преобразуем данные формы в объект
            const status = filterForm.querySelector('#status').value;
            const kids = filterForm.querySelector('#kids').value;
            const time = filterForm.querySelector('#time').value;
            
            const urlParts = window.location.pathname.split('/');
            const categoryPage = urlParts[urlParts.length - 1];
            const categoryId = parseInt(categoryPage.replace('.html', ''), 10);
            console.log(categoryId);

            // Отправляем данные на сервер
            fetch('http://127.0.0.1:8000/submit-filter?' + new URLSearchParams({
                status_value: status,
                kids_value: kids,
                time_value: time,
                category_id: categoryId
            }).toString())
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                if (result.success) {
                    displayBenefits(result.benefits);
                } else {
                    console.error('Error:', result.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    
        function displayBenefits(benefits) {
            const cardContainer = document.querySelector('.cards');
            cardContainer.innerHTML = ''; // Очищаем контейнер перед добавлением новых карточек
            benefits.forEach(benefit => {
                const card = document.createElement('article');
                card.className = 'card listing__card';
    
                const link = document.createElement('a');
                link.href = 'ben.html';
                link.className = 'card__link';
    
                const container = document.createElement('div');
                container.className = 'blog-card__container';
    
                const title = document.createElement('h1');
                title.className = 'card__title';
                title.textContent = benefit.title;
    
                const description = document.createElement('p');
                description.className = 'card__description';
                description.textContent = benefit.description;
    
                container.appendChild(title);
                container.appendChild(description);
    
                const liners = document.createElement('div');
                liners.className = 'card__liners';
    
                link.appendChild(container);
                link.appendChild(liners);
    
                card.appendChild(link);
                cardContainer.appendChild(card);
            });
            
        }
    }
    });
    
    document.addEventListener('DOMContentLoaded', function() {
            
            const urlParts = window.location.pathname.split('/');
            const categoryPage = urlParts[urlParts.length - 1];
            const categoryId = parseInt(categoryPage.replace('.html', ''), 10);
            if (categoryId == 1 || categoryId == 2 || categoryId == 3 || categoryId ==4 || categoryId == 5){
                    // Отправляем данные на сервер
                fetch('http://127.0.0.1:8000/get-category-benefits?' + new URLSearchParams({
                    category_id: categoryId
                }).toString())
                .then(response => response.json())
                .then(result => {
                    
                    if (result.success) {
                        displayBenefits(result.benefits);
                    } else {
                        console.error('Error:', result.message);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            } 
        
        function displayBenefits(benefits) {
            const cardContainer = document.querySelector('.cards');
            cardContainer.innerHTML = ''; // Очищаем контейнер перед добавлением новых карточек
            console.log(cardContainer);
            benefits.forEach(benefit => {
                const card = document.createElement('article');
                card.className = 'card listing__card';
                
                const link = document.createElement('a');
                link.href = 'ben.html';
                link.className = 'card__link';
    
                const container = document.createElement('div');
                container.className = 'blog-card__container';
    
                const title = document.createElement('h1');
                title.className = 'card__title';
                title.textContent = benefit.title;
    
                const description = document.createElement('p');
                description.className = 'card__description';
                description.textContent = benefit.description;

                container.appendChild(title);
                container.appendChild(description);
    
                const liners = document.createElement('div');
                liners.className = 'card__liners';
    
                link.appendChild(container);
                link.appendChild(liners);
    
                card.appendChild(link);
                cardContainer.appendChild(card);
            });
            
        }
    });
        document.addEventListener('DOMContentLoaded', function() {
            
            const urlParts = window.location.pathname.split('/');
            const categoryPage = urlParts[urlParts.length - 1];
            const categoryId = (categoryPage.replace('.html', ''));
            console.log('Category ID:', categoryId); 
            if (categoryId == "main"){
                    // Отправляем данные на сервер
                    fetch('http://127.0.0.1:8000/get-benefits')
                    .then(response => response.json())
                    .then(result => {
                        console.log('Success:', result);
                        if (result.success) {
                            displayBenefits(result.benefits);
                        } else {
                            console.error('Error:', result.message);
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            } 

        function displayBenefits(benefits) {
            const cardContainer = document.querySelector('.cards__main');
            cardContainer.innerHTML = ''; // Очищаем контейнер перед добавлением новых карточек
    
            benefits.forEach(benefit => {
                const card = document.createElement('article');
                card.className = 'card listing__card';
    
                const link = document.createElement('a');
                link.href = 'ben.html';
                link.className = 'card__link';
    
                const container = document.createElement('div');
                container.className = 'blog-card__container';
    
                const title = document.createElement('h1');
                title.className = 'card__title';
                title.textContent = benefit.title;
    
                const description = document.createElement('p');
                description.className = 'card__description';
                description.textContent = benefit.description;
    
                container.appendChild(title);
                container.appendChild(description);
    
                const liners = document.createElement('div');
                liners.className = 'card__liners';
    
                link.appendChild(container);
                link.appendChild(liners);
    
                card.appendChild(link);
                cardContainer.appendChild(card);
            });
        }
    });
    document.addEventListener('DOMContentLoaded', function() {
            
        const urlParts = window.location.pathname.split('/');
        const categoryPage = urlParts[urlParts.length - 1];
        const categoryId = (categoryPage.replace('.html', ''));

        let experience = localStorage.getItem('experience');
        let marital_status= localStorage.getItem('marital_status');
        let child_count = localStorage.getItem('child_count');
        if (marital_status == "Женат/Замужем"){
            marital_status = "1";
        } else {
            marital_status = "0";
        }
        if (parseInt(experience) < 3){
           experience = "0";
        } else if (parseInt(experience) > 2 && parseInt(experience) < 6) {
            experience = "1";
        } else if (parseInt(experience) > 5 && parseInt(experience) < 10) {
            experience= "2";
        } else if (parseInt(experience) > 10) {
            experience = "3";
        }
        
        if (parseInt(child_count) == 0){
            child_count = "0";
         } else if (parseInt(child_count) == 1) {
            child_count = "1";
         } else if (parseInt(child_count) == 2) {
            child_count = "2";
         } else if (parseInt(child_count) > 2) {
            child_count = "3";
         }

        if (categoryId == "fav"){
                // Отправляем данные на сервер
                fetch('http://127.0.0.1:8000/get-fav?' + new URLSearchParams({
                status_value: marital_status,
                kids_value: child_count,
                time_value: experience
            }).toString())
                .then(response => response.json())
                .then(result => {
                    console.log('Success:', result);
                    if (result.success) {
                        displayBenefits(result.benefits);
                    } else {
                        console.error('Error:', result.message);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } 

    function displayBenefits(benefits) {
        const cardContainer = document.querySelector('.cards__main');
        cardContainer.innerHTML = ''; // Очищаем контейнер перед добавлением новых карточек

        benefits.forEach(benefit => {
            const card = document.createElement('article');
            card.className = 'card listing__card';

            const link = document.createElement('a');
            link.href = 'ben.html';
            link.className = 'card__link';

            const container = document.createElement('div');
            container.className = 'blog-card__container';

            const title = document.createElement('h1');
            title.className = 'card__title';
            title.textContent = benefit.title;

            const description = document.createElement('p');
            description.className = 'card__description';
            description.textContent = benefit.description;

            container.appendChild(title);
            container.appendChild(description);

            const liners = document.createElement('div');
            liners.className = 'card__liners';

            link.appendChild(container);
            link.appendChild(liners);

            card.appendChild(link);
            cardContainer.appendChild(card);
        });
    }
});
document.getElementById('generate').addEventListener('click', function() {
    // Получаем данные из локального хранилища
    const logID = localStorage.getItem('log_ID');
    const name = localStorage.getItem('name');
    const surname = localStorage.getItem('surname');
    const second_name = localStorage.getItem('second_name');
    const department = localStorage.getItem('department');
    const date_of_birth = localStorage.getItem('date_of_birth');
    const experience = localStorage.getItem('experience');
    const marital_status = localStorage.getItem('marital_status');
    const address = localStorage.getItem('address');
    const number = localStorage.getItem('number');
    const email = localStorage.getItem('email');

    // Формируем объект с данными
    const data = {
        logID: "2",
        name: name,
        surname: surname,
        second_name: second_name,
        department: department,
        date_of_birth: date_of_birth,
        experience: experience,
        marital_status: marital_status,
        address: address,
        number: number,
        email: email
    };
    
    // Отправляем данные на сервер
    fetch('http://127.0.0.1:8000/generate?', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert('Ваше заявление успешно сгенерировано в папке C:/gazz!');
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
});
    

    })();