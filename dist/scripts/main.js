(function () {
    "use strict";
    
    document.addEventListener('DOMContentLoaded', function() {
        const loginForm = document.getElementById('loginForm');
        const errorMessage = document.getElementById('errorMessage');
    
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
                    // Сохраняем данные в localStorage
                    localStorage.setItem('log_ID', result.log_ID);
                    localStorage.setItem('name', result.name);
                    localStorage.setItem('surname', result.surname);
    
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
    });
    document.addEventListener('DOMContentLoaded', function() {
        const logID = localStorage.getItem('log_ID');
        const name = localStorage.getItem('name');
        const surname = localStorage.getItem('surname');
    
        if (logID && name && surname) {
            document.querySelector('.info__surname-value').textContent = surname;
            document.querySelector('.info__name-value').textContent = name;
            document.querySelector('.page-header__btn span').textContent = `${name} ${surname}`;
        } else {
            console.error('No user data found in localStorage');
        }
    });
  
  
    })();