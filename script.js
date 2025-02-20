document.querySelector('.dropdown-toggle').addEventListener('click', function (e) {
    e.preventDefault();
    const dropdownMenu = this.nextElementSibling;
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Cerrar el menú al hacer clic fuera
document.addEventListener('click', function (e) {
    const dropdown = document.querySelector('.dropdown');
    if (!dropdown.contains(e.target)) {
        dropdown.querySelector('.dropdown-menu').style.display = 'none';
    }
});