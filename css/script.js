const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    themeToggle.textContent = body.classList.contains('dark-theme') ? 'Tema Chiaro' : 'Tema Scuro';
});

function findMin(arr) {
    return Math.min(...arr);
}