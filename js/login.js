document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const msg_erro = document.getElementById('error-message');

    if (username === '1234' && password === '1234') {
        window.location.href = 'arquivos/home.html';
    } else {
        msg_erro.textContent = 'Nome de usuário ou senha incorretos.';
        msg_erro.style.display = 'block';
    }
});