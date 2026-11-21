
function checkPassword() {
    const password = document.getElementById('passwordInput').value;

    if (password === 'RUNcode') {
        window.location.href = 'page.html';
    } else {
        document.getElementById('errorPopup').style.display = 'flex';
    }
}

function closePopup() {
    document.getElementById('errorPopup').style.display = 'none';
    document.getElementById('passwordInput').value = '';
}
