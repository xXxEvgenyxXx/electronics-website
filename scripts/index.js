// index.js - общий файл для всего приложения
const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        price: 129999,
        isChosen: false,
        inBasket: false,
        category: "смартфоны",
        brand: "apple",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch?wid=5120&hei=2880&fmt=webp&qlt=70&.v=1693009279096"
    },
    {
        id: 2,
        name: "Samsung Galaxy S24",
        price: 89999,
        isChosen: false,
        inBasket: false,
        category: "смартфоны",
        brand: "samsung",
        image: "https://images.samsung.com/is/image/samsung/p6pim/ru/2401/gallery/ru-galaxy-s24-s928-sm-s928bzkjser-539113292?$650_519_PNG$"
    },
    {
        id: 3,
        name: "Xiaomi Redmi Note 13 Pro",
        price: 34999,
        isChosen: false,
        inBasket: false,
        category: "смартфоны",
        brand: "xiaomi",
        image: "https://i02.appmifile.com/870_operator_ru/13/01/2024/57e93ce8b0916765aa44a33ed33d7b0b.png"
    },
    {
        id: 4,
        name: "MacBook Air M2",
        price: 149999,
        isChosen: false,
        inBasket: false,
        category: "ноутбуки",
        brand: "apple",
        image: "https://www.apple.com/v/macbook-air-m2/b/images/overview/design/design_top_midnight__e2l4fqk9vqqu_medium.png"
    },
    {
        id: 5,
        name: "ASUS ROG Zephyrus G14",
        price: 159999,
        isChosen: false,
        inBasket: false,
        category: "ноутбуки",
        brand: "asus",
        image: "https://dlcdnwebimgs.asus.com/gain/99DE4F73-CE91-47A4-8A43-1F4C8C6C7849/w1000/h732"
    },
    {
        id: 6,
        name: "Lenovo Legion 5 Pro",
        price: 129999,
        isChosen: false,
        inBasket: false,
        category: "ноутбуки",
        brand: "lenovo",
        image: "https://www.lenovo.com/medias/lenovo-laptop-legion-5-pro-16-intel-hero.png?context=bWFzdGVyfHJvb3R8MjY1NzE2fGltYWdlL3BuZ3xoNjYvaDdmLzE0MTQ2NTU4MTAyNDE0LnBuZ3w0YzI5ZjRiOTZkYTQyOWY3NjljODZlMjE3ODg1NTEzOWFmYjhlNWQxYWI1NWMwN2NhODViMjVjM2FjN2Y5NDM2"
    },
    {
        id: 7,
        name: "Sony WH-1000XM5",
        price: 29999,
        isChosen: false,
        inBasket: false,
        category: "наушники",
        brand: "sony",
        image: "https://www.sony.ru/image/ebba5b7a9b405958ae3c9427d81ed370?fmt=png-alpha&wid=960"
    },
    {
        id: 8,
        name: "Apple AirPods Pro",
        price: 24999,
        isChosen: false,
        inBasket: false,
        category: "наушники",
        brand: "apple",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1723663706553"
    },
    {
        id: 9,
        name: "Sony PlayStation 5",
        price: 64999,
        isChosen: false,
        inBasket: false,
        category: "игровые консоли",
        brand: "sony",
        image: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$"
    },
    {
        id: 10,
        name: "Samsung QLED 4K TV",
        price: 89999,
        isChosen: false,
        inBasket: false,
        category: "телевизоры",
        brand: "samsung",
        image: "https://images.samsung.com/is/image/samsung/p6pim/ru/qe65q77cauxru/gallery/ru-qled-tv-qe65q77cauxru-535177651?$650_519_PNG$"
    }
];

// Массивы для хранения выбранных товаров
let inChosen = [];
let inCart = [];

// Вспомогательные переменные для избранного
let favoriteProducts = [];
let addedDates = {}; // Хранение дат добавления в избранное

// Форматирование цены
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽';
}

// Форматирование даты
function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}

// Функция для добавления товара в избранное
function addToChosen(product) {
    const existingProduct = inChosen.find(item => item.id === product.id);
    if (!existingProduct) {
        inChosen.push(product);
        
        // Сохраняем дату добавления
        addedDates[product.id] = new Date();
        localStorage.setItem('electrohub_added_dates', JSON.stringify(addedDates));
        
        saveToLocalStorage();
        console.log(`Товар "${product.name}" добавлен в избранное`, inChosen);
    }
}

// Функция для удаления товара из избранного
function removeFromChosen(productId) {
    const index = inChosen.findIndex(item => item.id === productId);
    if (index !== -1) {
        const removedProduct = inChosen.splice(index, 1)[0];
        
        // Удаляем дату добавления
        delete addedDates[productId];
        localStorage.setItem('electrohub_added_dates', JSON.stringify(addedDates));
        
        saveToLocalStorage();
        console.log(`Товар "${removedProduct.name}" удален из избранного`, inChosen);
    }
}

// Функция для добавления товара в корзину
function addToCart(product) {
    const existingProduct = inCart.find(item => item.id === product.id);
    if (!existingProduct) {
        inCart.push(product);
        product.inBasket = true;
        saveToLocalStorage();
        console.log(`Товар "${product.name}" добавлен в корзину`, inCart);
    }
}

// Функция для удаления товара из корзины
function removeFromCart(productId) {
    const index = inCart.findIndex(item => item.id === productId);
    if (index !== -1) {
        const removedProduct = inCart.splice(index, 1)[0];
        const productInProducts = products.find(item => item.id === productId);
        if (productInProducts) {
            productInProducts.inBasket = false;
        }
        saveToLocalStorage();
        console.log(`Товар "${removedProduct.name}" удален из корзины`, inCart);
    }
}

// Функция рендеринга карточек товаров (для каталога)
function renderProducts(productsArray) {
    const productsContainer = document.querySelector('.products');
    if (!productsContainer) return; // Если не на странице каталога
    
    const template = document.querySelector('.card-template');
    
    // Очищаем контейнер
    productsContainer.innerHTML = '';
    
    if (productsArray.length === 0) {
        productsContainer.innerHTML = `
            <div class="col-12">
                <div class="alert alert-info text-center">
                    <h4>Товары не найдены</h4>
                    <p>Попробуйте изменить параметры фильтрации</p>
                </div>
            </div>
        `;
        return;
    }
    
    productsArray.forEach((product, index) => {
        const card = template.content.cloneNode(true).querySelector('.col');
        
        const cardElement = card.querySelector('.product-card');
        // Добавляем задержку для анимации
        cardElement.style.animationDelay = `${index * 0.05}s`;
        
        const img = card.querySelector('img');
        img.src = product.image;
        img.alt = product.name;
        
        const name = card.querySelector('.good-name');
        name.textContent = product.name;
        
        const price = card.querySelector('.good-price');
        price.textContent = formatPrice(product.price);
        
        const addToCartBtn = card.querySelector('.btn-main');
        const addToFavBtn = card.querySelector('.btn-secondary');
        
        addToCartBtn.textContent = 'В корзину';
        addToFavBtn.textContent = 'В избранное';
        
        const isInCart = inCart.some(item => item.id === product.id) || product.inBasket;
        const isInChosen = inChosen.some(item => item.id === product.id);
        
        if (isInCart) {
            addToCartBtn.textContent = 'В корзине';
            addToCartBtn.disabled = true;
            addToCartBtn.classList.remove('btn-primary');
            addToCartBtn.classList.add('btn-secondary');
        }
        
        if (isInChosen) {
            product.isChosen = true;
            addToFavBtn.textContent = 'В избранном';
            addToFavBtn.classList.remove('btn-outline-secondary');
            addToFavBtn.classList.add('btn-danger');
            addToFavBtn.style.backgroundColor = '#ffebee';
            addToFavBtn.style.color = '#d32f2f';
            addToFavBtn.style.borderColor = '#ffebee';
        }
        
        addToCartBtn.addEventListener('click', () => {
            if (!product.inBasket && !inCart.some(item => item.id === product.id)) {
                addToCart(product);
                addToCartBtn.textContent = 'В корзине';
                addToCartBtn.disabled = true;
                addToCartBtn.classList.remove('btn-primary');
                addToCartBtn.classList.add('btn-secondary');
                console.log(`Товар "${product.name}" добавлен в корзину`);
            }
        });
        
        addToFavBtn.addEventListener('click', () => {
            if (addToFavBtn.textContent === 'В избранное') {
                product.isChosen = true;
                addToChosen(product);
                addToFavBtn.textContent = 'В избранном';
                addToFavBtn.classList.remove('btn-outline-secondary');
                addToFavBtn.classList.add('btn-danger');
                addToFavBtn.style.backgroundColor = '#ffebee';
                addToFavBtn.style.color = '#d32f2f';
                addToFavBtn.style.borderColor = '#ffebee';
                console.log(`Товар "${product.name}" добавлен в избранное`);
                
                // Если мы на странице избранного, обновляем ее
                if (window.location.pathname.includes('chosen.html')) {
                    loadAndRenderFavorites();
                }
            } else {
                product.isChosen = false;
                removeFromChosen(product.id);
                addToFavBtn.textContent = 'В избранное';
                addToFavBtn.classList.remove('btn-danger');
                addToFavBtn.classList.add('btn-outline-secondary');
                addToFavBtn.style.backgroundColor = '';
                addToFavBtn.style.color = '';
                addToFavBtn.style.borderColor = '';
                console.log(`Товар "${product.name}" удален из избранного`);
                
                // Если мы на странице избранного, обновляем ее
                if (window.location.pathname.includes('chosen.html')) {
                    loadAndRenderFavorites();
                }
            }
        });
        
        productsContainer.appendChild(card);
    });
}

// Загрузка избранных товаров из localStorage (для страницы избранного)
function loadFavoritesFromLocalStorage() {
    const chosenIds = JSON.parse(localStorage.getItem('electrohub_chosen') || '[]');
    
    // Загружаем сохраненные даты добавления
    const savedDates = JSON.parse(localStorage.getItem('electrohub_added_dates') || '{}');
    addedDates = savedDates;
    
    // Очищаем массив
    favoriteProducts = [];
    
    // Находим товары по ID и добавляем дату добавления
    chosenIds.forEach(id => {
        const product = products.find(p => p.id === id);
        if (product) {
            const favoriteProduct = {
                ...product,
                addedDate: addedDates[id] ? new Date(addedDates[id]) : new Date()
            };
            favoriteProducts.push(favoriteProduct);
        }
    });
    
    return favoriteProducts;
}

// Получение категорий из избранных товаров
function getCategoriesFromFavorites() {
    const categories = {};
    
    favoriteProducts.forEach(product => {
        const category = product.category;
        if (categories[category]) {
            categories[category].count++;
        } else {
            categories[category] = {
                count: 1,
                name: category
            };
        }
    });
    
    return categories;
}

// Рендеринг фильтров по категориям (для страницы избранного)
function renderCategoryFilters() {
    const container = document.getElementById('categoryFilters');
    if (!container) return; // Если не на странице избранного
    
    const categories = getCategoriesFromFavorites();
    
    container.innerHTML = '';
    
    Object.values(categories).forEach(category => {
        const div = document.createElement('div');
        div.className = 'form-check mb-2';
        div.innerHTML = `
            <input class="form-check-input category-filter" type="checkbox" id="category-${category.name}" value="${category.name}">
            <label class="form-check-label" for="category-${category.name}">
                ${category.name.charAt(0).toUpperCase() + category.name.slice(1)} (${category.count})
            </label>
        `;
        container.appendChild(div);
    });
    
    // Добавляем обработчики событий
    document.querySelectorAll('.category-filter').forEach(checkbox => {
        checkbox.addEventListener('change', filterFavorites);
    });
}

// Фильтрация избранных товаров
function filterFavorites() {
    const selectedCategories = Array.from(document.querySelectorAll('.category-filter:checked'))
        .map(cb => cb.value.toLowerCase());
    
    const sortSelect = document.getElementById('sortSelect');
    if (!sortSelect) return;
    
    const sortValue = sortSelect.value;
    
    let filteredProducts = [...favoriteProducts];
    
    // Фильтрация по категориям
    if (selectedCategories.length > 0) {
        filteredProducts = filteredProducts.filter(product => 
            selectedCategories.includes(product.category.toLowerCase())
        );
    }
    
    // Сортировка
    filteredProducts.sort((a, b) => {
        switch (sortValue) {
            case 'price-asc':
                return a.price - b.price;
            case 'price-desc':
                return b.price - a.price;
            case 'name':
                return a.name.localeCompare(b.name);
            case 'date':
            default:
                return new Date(b.addedDate) - new Date(a.addedDate);
        }
    });
    
    renderFavorites(filteredProducts);
}

// Рендеринг избранных товаров
function renderFavorites(productsToRender) {
    const container = document.getElementById('favoritesContainer');
    const emptyState = document.getElementById('emptyFavorites');
    const favoritesGrid = document.getElementById('favoritesGrid');
    const favoritesSummary = document.getElementById('favoritesSummary');
    const template = document.getElementById('favoriteCardTemplate');
    
    if (!container) return; // Если не на странице избранного
    
    container.innerHTML = '';
    
    if (productsToRender.length === 0) {
        if (emptyState) emptyState.style.display = 'block';
        if (favoritesGrid) favoritesGrid.style.display = 'none';
        if (favoritesSummary) favoritesSummary.style.display = 'none';
        return;
    }
    
    if (emptyState) emptyState.style.display = 'none';
    if (favoritesGrid) favoritesGrid.style.display = 'block';
    if (favoritesSummary) favoritesSummary.style.display = 'block';
    
    // Обновляем итоговую информацию
    updateSummary(productsToRender);
    
    productsToRender.forEach((product, index) => {
        const card = template.content.cloneNode(true).querySelector('.col');
        
        const cardElement = card.querySelector('.product-card');
        cardElement.style.animationDelay = `${index * 0.05}s`;
        
        // Заполняем данными
        const img = card.querySelector('img');
        img.src = product.image;
        img.alt = product.name;
        
        const title = card.querySelector('.card-title');
        title.textContent = product.name;
        
        const category = card.querySelector('.favorite-category');
        category.textContent = product.category.charAt(0).toUpperCase() + product.category.slice(1);
        
        const price = card.querySelector('.good-price');
        price.textContent = formatPrice(product.price);
        
        const addedDate = card.querySelector('.added-date-text');
        addedDate.textContent = formatDate(new Date(product.addedDate));
        
        // Добавляем обработчики событий
        const addToCartBtn = card.querySelector('.add-to-cart-btn');
        const removeBtn = card.querySelector('.remove-btn');
        
        addToCartBtn.addEventListener('click', () => {
            addToCart(product);
            addToCartBtn.textContent = 'В корзине';
            addToCartBtn.disabled = true;
            addToCartBtn.classList.remove('btn-primary');
            addToCartBtn.classList.add('btn-secondary');
        });
        
        removeBtn.addEventListener('click', () => {
            removeFromChosen(product.id);
            cardElement.classList.add('fade-out');
            setTimeout(() => {
                loadAndRenderFavorites();
            }, 300);
        });
        
        // Проверяем, есть ли товар уже в корзине
        const cartIds = JSON.parse(localStorage.getItem('electrohub_cart') || '[]');
        if (cartIds.includes(product.id)) {
            addToCartBtn.textContent = 'В корзине';
            addToCartBtn.disabled = true;
            addToCartBtn.classList.remove('btn-primary');
            addToCartBtn.classList.add('btn-secondary');
        }
        
        container.appendChild(card);
    });
}

// Обновление итоговой информации на странице избранного
function updateSummary(productsToShow) {
    const totalItems = document.getElementById('totalItems');
    const totalPrice = document.getElementById('totalPrice');
    
    if (!totalItems || !totalPrice) return;
    
    const count = productsToShow.length;
    const total = productsToShow.reduce((sum, product) => sum + product.price, 0);
    
    totalItems.textContent = count;
    totalPrice.textContent = formatPrice(total);
}

// Добавление всех товаров в корзину
function addAllToCart() {
    favoriteProducts.forEach(product => {
        addToCart(product);
    });
    
    // Обновляем кнопки
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.textContent = 'В корзине';
        btn.disabled = true;
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-secondary');
    });
    
    alert('Все товары добавлены в корзину!');
}

// Очистка всех избранных товаров
function clearAllFavorites() {
    if (confirm('Вы уверены, что хотите очистить все избранные товары?')) {
        localStorage.removeItem('electrohub_chosen');
        localStorage.removeItem('electrohub_added_dates');
        inChosen = [];
        favoriteProducts = [];
        addedDates = {};
        loadAndRenderFavorites();
        alert('Все товары удалены из избранного');
    }
}

// Загрузка и рендеринг избранных товаров
function loadAndRenderFavorites() {
    loadFavoritesFromLocalStorage();
    renderCategoryFilters();
    renderFavorites(favoriteProducts);
}

// Функция для инициализации фильтров (для каталога)
function initFilters() {
    const brandCheckboxes = document.querySelectorAll('input[data-filter="brand"]');
    const categoryCheckboxes = document.querySelectorAll('input[data-filter="category"]');
    
    // Объединяем все чекбоксы
    const allCheckboxes = [...brandCheckboxes, ...categoryCheckboxes];
    
    allCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });
}

// Функция фильтрации товаров с логическим И (для каталога)
function filterProducts() {
    const checkedCheckboxes = Array.from(
        document.querySelectorAll('input[type="checkbox"]:checked')
    );
    
    // Если ничего не выбрано, показываем все товары
    if (checkedCheckboxes.length === 0) {
        renderProducts(products);
        return;
    }
    
    // Получаем выбранные значения фильтров
    const selectedFilters = checkedCheckboxes.map(cb => {
        const label = cb.closest('.form-check').querySelector('.form-check-label');
        return label.textContent.trim().toLowerCase();
    });
    
    // Разделяем фильтры на бренды и категории
    const selectedBrands = [];
    const selectedCategories = [];
    
    // Все возможные бренды и категории для проверки
    const allBrands = ['apple', 'samsung', 'xiaomi', 'asus', 'lenovo', 'sony'];
    const allCategories = ['смартфоны', 'ноутбуки', 'наушники', 'игровые консоли', 'телевизоры', 'планшеты', 'умные часы', 'фототехника'];
    
    selectedFilters.forEach(filter => {
        if (allBrands.includes(filter)) {
            selectedBrands.push(filter);
        } else if (allCategories.includes(filter)) {
            selectedCategories.push(filter);
        }
    });
    
    // Фильтруем товары с логическим И
    const filteredProducts = products.filter(product => {
        const productBrand = product.brand.toLowerCase();
        const productCategory = product.category.toLowerCase();
        
        // Проверяем бренды
        const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(productBrand);
        
        // Проверяем категории
        const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(productCategory);
        
        // Товар должен соответствовать ВСЕМ выбранным фильтрам
        return brandMatch && categoryMatch;
    });
    
    console.log('Выбранные фильтры:', selectedFilters);
    console.log('Бренды:', selectedBrands);
    console.log('Категории:', selectedCategories);
    console.log('Отфильтрованные товары:', filteredProducts.map(p => p.name));
    
    renderProducts(filteredProducts);
}

// Сохранение данных в localStorage
function saveToLocalStorage() {
    localStorage.setItem('electrohub_chosen', JSON.stringify(inChosen.map(p => p.id)));
    localStorage.setItem('electrohub_cart', JSON.stringify(inCart.map(p => p.id)));
}

// Загрузка данных из localStorage
function loadFromLocalStorage() {
    const chosenIds = JSON.parse(localStorage.getItem('electrohub_chosen') || '[]');
    const cartIds = JSON.parse(localStorage.getItem('electrohub_cart') || '[]');
    
    // Восстанавливаем избранные товары
    chosenIds.forEach(id => {
        const product = products.find(p => p.id === id);
        if (product && !inChosen.some(p => p.id === id)) {
            product.isChosen = true;
            inChosen.push(product);
        }
    });
    
    // Восстанавливаем корзину
    cartIds.forEach(id => {
        const product = products.find(p => p.id === id);
        if (product && !inCart.some(p => p.id === id)) {
            product.inBasket = true;
            inCart.push(product);
        }
    });
}

// Функция инициализации каталога
function initCatalog() {
    // Загружаем сохраненные данные
    loadFromLocalStorage();
    
    // Рендерим все товары
    renderProducts(products);
    
    // Инициализируем фильтры
    initFilters();
    
    console.log('Каталог инициализирован. Товаров:', products.length);
    console.log('Избранные товары:', inChosen.map(p => p.name));
    console.log('Товары в корзине:', inCart.map(p => p.name));
    
    // Обработчик для очистки фильтров (можно добавить кнопку позже)
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'r') {
            document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
                cb.checked = false;
            });
            renderProducts(products);
            console.log('Фильтры очищены');
        }
    });
}

// Функция инициализации страницы избранного
function initChosenPage() {
    // Загружаем сохраненные данные
    loadFromLocalStorage();
    loadAndRenderFavorites();
    
    // Обработчики событий
    const sortSelect = document.getElementById('sortSelect');
    const clearFavoritesBtn = document.getElementById('clearFavoritesBtn');
    const addAllToCartBtn = document.getElementById('addAllToCartBtn');
    
    if (sortSelect) {
        sortSelect.addEventListener('change', filterFavorites);
    }
    
    if (clearFavoritesBtn) {
        clearFavoritesBtn.addEventListener('click', clearAllFavorites);
    }
    
    if (addAllToCartBtn) {
        addAllToCartBtn.addEventListener('click', addAllToCart);
    }
    
    console.log('Страница избранного инициализирована. Избранных товаров:', favoriteProducts.length);
}

// ==================== ФУНКЦИИ ДЛЯ КОРЗИНЫ ====================

// Загрузка товаров корзины из localStorage
function loadCartFromLocalStorage() {
    const cartIds = JSON.parse(localStorage.getItem('electrohub_cart') || '[]');
    const cartProducts = [];
    
    cartIds.forEach(id => {
        const product = products.find(p => p.id === id);
        if (product) {
            // Добавляем количество (по умолчанию 1)
            const cartProduct = {
                ...product,
                quantity: 1
            };
            cartProducts.push(cartProduct);
        }
    });
    
    return cartProducts;
}

// Рендеринг товаров в корзине
function renderCartItems() {
    const container = document.getElementById('cartItemsContainer');
    const emptyCart = document.getElementById('emptyCart');
    const cartFooter = document.getElementById('cartFooter');
    const template = document.getElementById('cartItemTemplate');
    
    if (!container) return; // Если не на странице корзины
    
    const cartProducts = loadCartFromLocalStorage();
    
    container.innerHTML = '';
    
    if (cartProducts.length === 0) {
        if (emptyCart) emptyCart.style.display = 'block';
        if (cartFooter) cartFooter.style.display = 'none';
        return;
    }
    
    if (emptyCart) emptyCart.style.display = 'none';
    if (cartFooter) cartFooter.style.display = 'block';
    
    cartProducts.forEach((product, index) => {
        const item = template.content.cloneNode(true).querySelector('.cart-item');
        
        // Заполняем данными
        const img = item.querySelector('.cart-item-img');
        img.src = product.image;
        img.alt = product.name;
        
        const name = item.querySelector('.cart-item-name');
        name.textContent = product.name;
        
        const category = item.querySelector('.cart-item-category');
        category.textContent = product.category.charAt(0).toUpperCase() + product.category.slice(1);
        
        const price = item.querySelector('.cart-item-price');
        price.textContent = formatPrice(product.price);
        
        const quantityValue = item.querySelector('.quantity-value');
        quantityValue.textContent = product.quantity || 1;
        
        const totalPrice = item.querySelector('.cart-item-price');
        totalPrice.textContent = formatPrice(product.price * (product.quantity || 1));
        
        // Добавляем обработчики событий
        const decreaseBtn = item.querySelector('.quantity-decrease');
        const increaseBtn = item.querySelector('.quantity-increase');
        const removeBtn = item.querySelector('.remove-from-cart');
        
        decreaseBtn.addEventListener('click', () => {
            if (product.quantity > 1) {
                product.quantity--;
                quantityValue.textContent = product.quantity;
                totalPrice.textContent = formatPrice(product.price * product.quantity);
                updateCartSummary();
                saveCartToLocalStorage();
            }
        });
        
        increaseBtn.addEventListener('click', () => {
            product.quantity = (product.quantity || 1) + 1;
            quantityValue.textContent = product.quantity;
            totalPrice.textContent = formatPrice(product.price * product.quantity);
            updateCartSummary();
            saveCartToLocalStorage();
        });
        
        removeBtn.addEventListener('click', () => {
            removeFromCart(product.id);
            item.classList.add('fade-out');
            setTimeout(() => {
                renderCartItems();
            }, 300);
        });
        
        container.appendChild(item);
    });
    
    // Обновляем итоговую информацию
    updateCartSummary();
}

// Обновление итоговой информации корзины
function updateCartSummary() {
    const totalPrice = document.getElementById('totalPrice');
    const totalItems = document.getElementById('totalItems');
    
    if (!totalPrice || !totalItems) return;
    
    const cartProducts = loadCartFromLocalStorage();
    
    const total = cartProducts.reduce((sum, product) => {
        return sum + (product.price * (product.quantity || 1));
    }, 0);
    
    const itemsCount = cartProducts.reduce((count, product) => {
        return count + (product.quantity || 1);
    }, 0);
    
    totalPrice.textContent = formatPrice(total);
    totalItems.textContent = itemsCount;
}

// Сохранение корзины в localStorage
function saveCartToLocalStorage() {
    const cartProducts = loadCartFromLocalStorage();
    const cartIds = cartProducts.map(p => p.id);
    localStorage.setItem('electrohub_cart', JSON.stringify(cartIds));
    
    // Сохраняем количество товаров
    const quantities = {};
    cartProducts.forEach(product => {
        quantities[product.id] = product.quantity || 1;
    });
    localStorage.setItem('electrohub_cart_quantities', JSON.stringify(quantities));
}

// Очистка всей корзины
function clearCart() {
    if (confirm('Вы уверены, что хотите очистить всю корзину?')) {
        localStorage.removeItem('electrohub_cart');
        localStorage.removeItem('electrohub_cart_quantities');
        inCart = [];
        renderCartItems();
        alert('Корзина очищена');
    }
}

// Инициализация страницы корзины
function initBasketPage() {
    // Загружаем сохраненные данные
    loadFromLocalStorage();
    
    // Рендерим товары в корзине
    renderCartItems();
    
    // Обработчики событий
    const clearCartBtn = document.getElementById('clearCartBtn');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', clearCart);
    }
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            const cartProducts = loadCartFromLocalStorage();
            if (cartProducts.length === 0) {
                alert('Корзина пуста! Добавьте товары для оформления заказа.');
                return;
            }
            alert('Переход к оформлению заказа. В реальном приложении здесь была бы форма доставки и оплаты.');
            // В реальном приложении здесь был бы переход на страницу оформления заказа
        });
    }
    
    console.log('Страница корзины инициализирована. Товаров в корзине:', inCart.length);
}


// Функция инициализации главной страницы
function initMainPage() {
    // Можно добавить функциональность для главной страницы
    console.log('Главная страница инициализирована');
}

// Основная функция инициализации
function initApp() {
    console.log('Инициализация приложения...');
    
    // Загружаем данные из localStorage
    loadFromLocalStorage();
    
    // Определяем, на какой странице мы находимся
    const path = window.location.pathname;
    const currentPage = path.split('/').pop();
    
    if (currentPage.includes('catalog.html') || currentPage === 'catalog.html') {
        initCatalog();
    } else if (currentPage.includes('chosen.html') || currentPage === 'chosen.html') {
        initChosenPage();
    } else if (currentPage.includes('basket.html') || currentPage === 'basket.html') {
        initBasketPage();
    } else if (currentPage.includes('index.html') || currentPage === 'index.html' || currentPage === '' || currentPage === '/') {
        initMainPage();
    } else {
        // Для других страниц
        console.log('Другая страница:', currentPage);
    }
}

// Инициализируем при загрузке страницы
document.addEventListener('DOMContentLoaded', initApp);