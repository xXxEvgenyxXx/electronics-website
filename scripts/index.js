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

// Функция для добавления товара в избранное
function addToChosen(product) {
    const existingProduct = inChosen.find(item => item.id === product.id);
    if (!existingProduct) {
        inChosen.push(product);
        console.log(`Товар "${product.name}" добавлен в избранное`, inChosen);
    }
}

// Функция для удаления товара из избранного
function removeFromChosen(productId) {
    const index = inChosen.findIndex(item => item.id === productId);
    if (index !== -1) {
        const removedProduct = inChosen.splice(index, 1)[0];
        console.log(`Товар "${removedProduct.name}" удален из избранного`, inChosen);
    }
}

// Функция для добавления товара в корзину
function addToCart(product) {
    const existingProduct = inCart.find(item => item.id === product.id);
    if (!existingProduct) {
        inCart.push(product);
        product.inBasket = true;
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
        console.log(`Товар "${removedProduct.name}" удален из корзины`, inCart);
    }
}

// Функция рендеринга карточек товаров
function renderProducts(productsArray) {
    const productsContainer = document.querySelector('.products');
    const template = document.querySelector('.card-template');
    
    productsContainer.innerHTML = '';
    
    productsArray.forEach(product => {
        const card = template.content.cloneNode(true).querySelector('.product-card');
        
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
        
        const isInCart = inCart.some(item => item.id === product.id) || product.inBasket;
        const isInChosen = inChosen.some(item => item.id === product.id);
        
        if (isInCart) {
            addToCartBtn.textContent = 'В корзине';
            addToCartBtn.disabled = true;
            addToCartBtn.style.opacity = '0.7';
            addToCartBtn.style.cursor = 'not-allowed';
        }
        
        if (isInChosen) {
            product.isChosen = true;
            addToFavBtn.textContent = 'В избранном';
            addToFavBtn.style.backgroundColor = '#ffebee';
            addToFavBtn.style.color = '#d32f2f';
        }
        
        addToCartBtn.addEventListener('click', () => {
            if (!product.inBasket && !inCart.some(item => item.id === product.id)) {
                addToCart(product);
                addToCartBtn.textContent = 'В корзине';
                addToCartBtn.disabled = true;
                addToCartBtn.style.opacity = '0.7';
                addToCartBtn.style.cursor = 'not-allowed';
                console.log(`Товар "${product.name}" добавлен в корзину`);
            }
        });
        
        addToFavBtn.addEventListener('click', () => {
            if (addToFavBtn.textContent === 'Добавить в избранное') {
                product.isChosen = true;
                addToChosen(product);
                addToFavBtn.textContent = 'В избранном';
                addToFavBtn.style.backgroundColor = '#ffebee';
                addToFavBtn.style.color = '#d32f2f';
                console.log(`Товар "${product.name}" добавлен в избранное`);
            } else {
                product.isChosen = false;
                removeFromChosen(product.id);
                addToFavBtn.textContent = 'Добавить в избранное';
                addToFavBtn.style.backgroundColor = '';
                addToFavBtn.style.color = '';
                console.log(`Товар "${product.name}" удален из избранного`);
            }
        });
        
        productsContainer.appendChild(card);
    });
}

// Функция для инициализации фильтров
function initFilters() {
    const brandCheckboxes = document.querySelectorAll('.filters label input[type="checkbox"]');
    
    brandCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });
}

// Функция фильтрации товаров с логическим И
function filterProducts() {
    const checkedCheckboxes = Array.from(
        document.querySelectorAll('.filters label input[type="checkbox"]:checked')
    );
    
    // Если ничего не выбрано, показываем все товары
    if (checkedCheckboxes.length === 0) {
        renderProducts(products);
        return;
    }
    
    // Получаем выбранные значения фильтров
    const selectedFilters = checkedCheckboxes.map(cb => 
        cb.parentElement.textContent.trim().toLowerCase()
    );
    
    // Разделяем фильтры на бренды и категории
    const selectedBrands = [];
    const selectedCategories = [];
    
    // Все возможные бренды и категории для проверки
    const allBrands = ['apple', 'samsung', 'xiaomi', 'asus', 'lenovo', 'sony'];
    const allCategories = ['смартфоны', 'ноутбуки', 'наушники', 'игровые консоли', 'телевизоры'];
    
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

// Функция инициализации страницы
function initCatalog() {
    renderProducts(products);
    
    initFilters();
    
    console.log('Каталог инициализирован. Товаров:', products.length);
    console.log('Избранные товары:', inChosen);
    console.log('Товары в корзине:', inCart);
}

initCatalog();