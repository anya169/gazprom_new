(function () {
  "use strict";
  
  document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const logID = urlParams.get('log_ID');

    if (logID) {
        fetch(`http://127.0.0.1:8000/get_user_info?log_ID=${logID}`)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    document.querySelector('.info__surname-value').textContent = data.surname;
                    document.querySelector('.info__name-value').textContent = data.name;
                    document.querySelector('.page-header__btn  span').textContent = data.name + ' ' + data.surname;
                } else {
                    console.error('Error:', data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
});

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
                window.location.href = `http://localhost:3001/profile.html?log_ID=${result.log_ID}`;
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


  })();

