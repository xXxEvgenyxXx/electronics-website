const products = [
  {
    id: 1,
    name: "Обогреватель Ballu BOH/CM-09",
    price: 3490,
    isChosen: false,
    category: "Обогреватель",
    brand: "Ballu",
    image: "https://images.unsplash.com/photo-1606768666853-403c90a981ad?w=400&h=400&fit=crop"
  },
  {
    id: 2,
    name: "Телевизор Samsung UE43AU7100U",
    price: 32990,
    isChosen: true,
    category: "Телевизоры",
    brand: "Samsung",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w-400&h=400&fit=crop"
  },
  {
    id: 3,
    name: "Ноутбук ASUS VivoBook 15",
    price: 45990,
    isChosen: false,
    category: "Ноутбуки",
    brand: "ASUS",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop"
  },
  {
    id: 4,
    name: "Электрочайник Xiaomi Mi Kettle",
    price: 2990,
    isChosen: false,
    category: "Чайники",
    brand: "Xiaomi",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=400&fit=crop"
  },
  {
    id: 5,
    name: "Холодильник LG GA-B419",
    price: 62990,
    isChosen: true,
    category: "Холодильники",
    brand: "LG",
    image: "https://images.unsplash.com/photo-1571175443880-49e1d1797f9f?w=400&h=400&fit=crop"
  },
  {
    id: 6,
    name: "Смартфон iPhone 13",
    price: 79990,
    isChosen: false,
    category: "Смартфоны",
    brand: "Apple",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop"
  },
  {
    id: 7,
    name: "Наушники Sony WH-1000XM4",
    price: 24990,
    isChosen: false,
    category: "Наушники",
    brand: "Sony",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
  },
  {
    id: 8,
    name: "Утюг Philips GC3929/20",
    price: 4290,
    isChosen: false,
    category: "Гладильные системы",
    brand: "Philips",
    image: "https://images.unsplash.com/photo-1584568694244-e17752753c19?w=400&h=400&fit=crop"
  },
  {
    id: 9,
    name: "Обогреватель Electrolux ECH/AG-1500EF",
    price: 4290,
    isChosen: false,
    category: "Обогреватель",
    brand: "Electrolux",
    image: "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=400&h=400&fit=crop"
  },
  {
    id: 10,
    name: "Телевизор LG 43UP75006LF",
    price: 37990,
    isChosen: false,
    category: "Телевизоры",
    brand: "LG",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop"
  },
  {
    id: 11,
    name: "Ноутбук HP Pavilion 15",
    price: 56990,
    isChosen: false,
    category: "Ноутбуки",
    brand: "HP",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop"
  },
  {
    id: 12,
    name: "Чайник BORK K800",
    price: 8990,
    isChosen: false,
    category: "Чайники",
    brand: "BORK",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=400&fit=crop"
  },
  {
    id: 13,
    name: "Холодильник Samsung RB33J3200SA",
    price: 54990,
    isChosen: false,
    category: "Холодильники",
    brand: "Samsung",
    image: "https://images.unsplash.com/photo-1571175443880-49e1d1797f9f?w=400&h=400&fit=crop"
  },
  {
    id: 14,
    name: "Смартфон Samsung Galaxy S21",
    price: 59990,
    isChosen: false,
    category: "Смартфоны",
    brand: "Samsung",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop"
  },
  {
    id: 15,
    name: "Наушники Apple AirPods Pro",
    price: 18990,
    isChosen: false,
    category: "Наушники",
    brand: "Apple",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
  },
  {
    id: 16,
    name: "Отпариватель Philips GC450/20",
    price: 5290,
    isChosen: false,
    category: "Гладильные системы",
    brand: "Philips",
    image: "https://images.unsplash.com/photo-1584568694244-e17752753c19?w=400&h=400&fit=crop"
  },
  {
    id: 17,
    name: "Обогреватель Timberk TOR 21.1507 BC/BCL",
    price: 3190,
    isChosen: false,
    category: "Обогреватель",
    brand: "Timberk",
    image: "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=400&h=400&fit=crop"
  },
  {
    id: 18,
    name: "Телевизор Sony KD-43X81J",
    price: 45990,
    isChosen: false,
    category: "Телевизоры",
    brand: "Sony",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop"
  },
  {
    id: 19,
    name: "Ноутбук Lenovo IdeaPad 3",
    price: 39990,
    isChosen: false,
    category: "Ноутбуки",
    brand: "Lenovo",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop"
  },
  {
    id: 20,
    name: "Чайник SMEG KLF03",
    price: 12990,
    isChosen: false,
    category: "Чайники",
    brand: "SMEG",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=400&fit=crop"
  }
];