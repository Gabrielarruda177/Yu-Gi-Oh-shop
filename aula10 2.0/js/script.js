// Função para exibir o alerta de cookies
function showCookieAlert() {
    document.getElementById('cookieAlert').style.display = 'block';
}

// Função para aceitar os cookies e esconder o alerta
function acceptCookies() {
    document.getElementById('cookieAlert').style.display = 'none';
    alert("Cookies aceitos!");
}

// Aguarda o carregamento completo da página
window.onload = function() {
    showCookieAlert(); // Exibe o alerta

    // Adiciona o evento ao botão de aceitar cookies
    document.getElementById('acceptButton').addEventListener('click', acceptCookies);
}
