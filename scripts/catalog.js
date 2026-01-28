import { products } from "./productsMock";

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

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽';
}

// Функция рендеринга карточек товаров
function renderProducts(productsArray) {
    const productsContainer = document.querySelector('.products');
    const template = document.querySelector('.card-template');
    
    // Очищаем контейнер
    productsContainer.innerHTML = '';
    
    // Создаем карточки для каждого товара
    productsArray.forEach(product => {
        // Клонируем шаблон
        const card = template.content.cloneNode(true).querySelector('.product-card');
        
        // Заполняем данные
        const img = card.querySelector('img');
        img.src = product.image;
        img.alt = product.name;
        
        const name = card.querySelector('.good-name');
        name.textContent = product.name;
        
        const price = card.querySelector('.good-price');
        price.textContent = formatPrice(product.price);
        
        const addToCartBtn = card.querySelector('.btn-main');
        const addToFavBtn = card.querySelector('.btn-secondary');
        
        // Добавляем обработчики событий
        addToCartBtn.addEventListener('click', () => {
            console.log(`Товар "${product.name}" добавлен в корзину`);
            addToCartBtn.textContent = 'В корзине';
            addToCartBtn.disabled = true;
        });
        
        addToFavBtn.addEventListener('click', () => {
            const isFavorite = product.isChosen;
            product.isChosen = !isFavorite;
            
            if (product.isChosen) {
                addToFavBtn.textContent = 'В избранном';
                addToFavBtn.style.backgroundColor = '#ffebee';
                addToFavBtn.style.color = '#d32f2f';
                console.log(`Товар "${product.name}" добавлен в избранное`);
            } else {
                addToFavBtn.textContent = 'Добавить в избранное';
                addToFavBtn.style.backgroundColor = '';
                addToFavBtn.style.color = '';
                console.log(`Товар "${product.name}" удален из избранного`);
            }
        });
        
        // Устанавливаем начальное состояние для избранного
        if (product.isChosen) {
            addToFavBtn.textContent = 'В избранном';
            addToFavBtn.style.backgroundColor = '#ffebee';
            addToFavBtn.style.color = '#d32f2f';
        }
        
        // Добавляем карточку в контейнер
        productsContainer.appendChild(card);
    });
}

// Функция для инициализации фильтров
function initFilters() {
    const brandCheckboxes = document.querySelectorAll('.filters label input[type="checkbox"]');
    const categoryCheckboxes = document.querySelectorAll('.filters label input[type="checkbox"]');
    
    // Добавляем обработчики для чекбоксов
    brandCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });
    
    categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });
}

// Функция фильтрации товаров
function filterProducts() {
    const selectedBrands = Array.from(
        document.querySelectorAll('.filters label input[type="checkbox"]:checked')
    ).map(cb => cb.parentElement.textContent.trim().toLowerCase());
    
    // Если ничего не выбрано, показываем все товары
    if (selectedBrands.length === 0) {
        renderProducts(products);
        return;
    }
    
    // Фильтруем товары по выбранным брендам
    const filteredProducts = products.filter(product => {
        const brand = product.brand.toLowerCase();
        const category = product.category.toLowerCase();
        
        // Проверяем, соответствует ли товар хотя бы одному выбранному фильтру
        return selectedBrands.some(selected => 
            brand === selected || category === selected
        );
    });
    
    renderProducts(filteredProducts);
}

// Функция инициализации страницы
function initCatalog() {
    renderProducts(products);
    
    // Инициализируем фильтры
    initFilters();
    
    console.log('Каталог инициализирован. Товаров:', products.length);
}

initCatalog();