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