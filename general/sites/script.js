document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simulando envio de formulário
        formResponse.textContent = `Obrigado, ${name}! Sua mensagem foi enviada.`;
        formResponse.style.color = 'green';

        // Limpar formulário
        form.reset();
    });
});