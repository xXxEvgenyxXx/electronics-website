// Бургер-меню
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    
    // Анимация бургера
    const bars = menuToggle.querySelectorAll('.bar');
    bars[0].classList.toggle('bar-open-top');
    bars[1].classList.toggle('bar-open-middle');
    bars[2].classList.toggle('bar-open-bottom');
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('#mainNav a').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        menuToggle.querySelectorAll('.bar').forEach(bar => {
            bar.className = 'bar';
        });
    });
});

// Меню "Прочее"
const moreOptionsButton = document.querySelector('.more-button');
const moreOptions = document.querySelector('.more-options-wrapper');

moreOptionsButton.addEventListener('click', (evt) => {
    evt.stopPropagation();
    if(moreOptions.style.display === 'none' || moreOptions.style.display === ''){
        moreOptions.style.display = 'flex';
    } else {
        moreOptions.style.display = 'none';
    }
});

// Закрытие меню при клике вне его области
document.addEventListener('click', (evt) => {
    if (!document.querySelector('.more-wrapper').contains(evt.target)) {
        moreOptions.style.display = 'none';
    }
});