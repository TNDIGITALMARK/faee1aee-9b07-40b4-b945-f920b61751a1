// ============================================
// MOCK DATA FOR AMAZON MARKETPLACE
// 50 products across 4 categories with reviews
// ============================================

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Seller {
  id: string;
  name: string;
  rating: number;
  totalReviews: number;
  responseTime: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: 'electronics' | 'home' | 'clothing' | 'books';
  images: string[];
  seller: Seller;
  rating: number;
  reviewCount: number;
  reviews: Review[];
  inStock: boolean;
  shipsFrom: string;
  tags: string[];
}

// Mock Sellers
export const sellers: Seller[] = [
  {
    id: 'seller-1',
    name: 'TechGear Electronics',
    rating: 4.8,
    totalReviews: 12453,
    responseTime: '< 2 hours'
  },
  {
    id: 'seller-2',
    name: 'HomeStyle Direct',
    rating: 4.6,
    totalReviews: 8234,
    responseTime: '< 4 hours'
  },
  {
    id: 'seller-3',
    name: 'Fashion Forward',
    rating: 4.7,
    totalReviews: 15678,
    responseTime: '< 1 hour'
  },
  {
    id: 'seller-4',
    name: 'BookWorld',
    rating: 4.9,
    totalReviews: 23456,
    responseTime: '< 3 hours'
  }
];

// Mock Products
export const products: Product[] = [
  // ELECTRONICS
  {
    id: 'prod-1',
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life. Advanced audio technology delivers crystal-clear sound with deep bass. Comfortable over-ear design perfect for travel and daily use.',
    price: 89.99,
    originalPrice: 129.99,
    category: 'electronics',
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400', 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400'],
    seller: sellers[0],
    rating: 4.5,
    reviewCount: 234,
    reviews: [
      { id: 'rev-1', userName: 'Sarah M.', rating: 5, comment: 'Amazing sound quality! Worth every penny.', date: '2024-01-15' },
      { id: 'rev-2', userName: 'John D.', rating: 4, comment: 'Great headphones, battery life is excellent.', date: '2024-01-10' }
    ],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Best Seller', 'Premium Audio']
  },
  {
    id: 'prod-2',
    name: 'Smart Watch Pro',
    description: 'Feature-rich smartwatch with health tracking, GPS, and 5-day battery life. Track your fitness, monitor heart rate, and stay connected with notifications.',
    price: 199.99,
    category: 'electronics',
    images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400'],
    seller: sellers[0],
    rating: 4.7,
    reviewCount: 567,
    reviews: [
      { id: 'rev-3', userName: 'Mike R.', rating: 5, comment: 'Best smartwatch I\'ve owned!', date: '2024-01-20' }
    ],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Trending', 'Health & Fitness']
  },
  {
    id: 'prod-3',
    name: 'Mechanical Gaming Keyboard',
    description: 'RGB backlit mechanical keyboard with customizable keys and anti-ghosting technology. Perfect for gaming and typing enthusiasts.',
    price: 79.99,
    originalPrice: 99.99,
    category: 'electronics',
    images: ['https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400'],
    seller: sellers[0],
    rating: 4.6,
    reviewCount: 189,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Gaming']
  },
  {
    id: 'prod-4',
    name: '4K Webcam with Microphone',
    description: 'Professional 4K webcam with built-in dual microphones and auto-focus. Perfect for video calls, streaming, and content creation.',
    price: 129.99,
    category: 'electronics',
    images: ['https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?w=400'],
    seller: sellers[0],
    rating: 4.4,
    reviewCount: 145,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Work From Home']
  },
  {
    id: 'prod-5',
    name: 'Portable Bluetooth Speaker',
    description: 'Waterproof portable speaker with 360-degree sound and 20-hour battery. Perfect for outdoor adventures and pool parties.',
    price: 49.99,
    category: 'electronics',
    images: ['https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400'],
    seller: sellers[0],
    rating: 4.8,
    reviewCount: 892,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Best Seller', 'Outdoor']
  },
  {
    id: 'prod-6',
    name: 'Wireless Gaming Mouse',
    description: 'Ergonomic wireless gaming mouse with adjustable DPI and programmable buttons. Lightning-fast response time for competitive gaming.',
    price: 59.99,
    category: 'electronics',
    images: ['https://images.unsplash.com/photo-1527814050087-3793815479db?w=400'],
    seller: sellers[0],
    rating: 4.5,
    reviewCount: 321,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Gaming']
  },
  {
    id: 'prod-7',
    name: 'USB-C Hub Multi-Port Adapter',
    description: '7-in-1 USB-C hub with HDMI, USB 3.0, SD card reader, and charging port. Essential for modern laptops and tablets.',
    price: 34.99,
    category: 'electronics',
    images: ['https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400'],
    seller: sellers[0],
    rating: 4.3,
    reviewCount: 234,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Productivity']
  },
  {
    id: 'prod-8',
    name: 'Wireless Earbuds Pro',
    description: 'True wireless earbuds with active noise cancellation and 24-hour battery life with charging case. Premium sound in a compact design.',
    price: 149.99,
    originalPrice: 199.99,
    category: 'electronics',
    images: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400'],
    seller: sellers[0],
    rating: 4.6,
    reviewCount: 678,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Premium Audio', 'Trending']
  },
  {
    id: 'prod-9',
    name: 'LED Desk Lamp with USB',
    description: 'Modern LED desk lamp with adjustable brightness and USB charging port. Energy-efficient and eye-friendly lighting.',
    price: 39.99,
    category: 'electronics',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400'],
    seller: sellers[0],
    rating: 4.4,
    reviewCount: 156,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Work From Home']
  },
  {
    id: 'prod-10',
    name: 'External SSD 1TB',
    description: 'Ultra-fast portable SSD with 1TB storage capacity. USB 3.2 interface delivers blazing transfer speeds up to 1050MB/s.',
    price: 119.99,
    category: 'electronics',
    images: ['https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400'],
    seller: sellers[0],
    rating: 4.7,
    reviewCount: 445,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Storage']
  },
  {
    id: 'prod-11',
    name: 'Laptop Stand Aluminum',
    description: 'Ergonomic aluminum laptop stand with adjustable height. Improves posture and increases airflow for better cooling.',
    price: 29.99,
    category: 'electronics',
    images: ['https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400'],
    seller: sellers[0],
    rating: 4.5,
    reviewCount: 289,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Work From Home']
  },
  {
    id: 'prod-12',
    name: 'Phone Camera Lens Kit',
    description: 'Professional 3-in-1 lens kit for smartphones including wide angle, macro, and fisheye lenses. Universal clip design.',
    price: 24.99,
    category: 'electronics',
    images: ['https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400'],
    seller: sellers[0],
    rating: 4.2,
    reviewCount: 178,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Photography']
  },

  // HOME & GARDEN
  {
    id: 'prod-13',
    name: 'Stainless Steel Coffee Maker',
    description: 'Programmable 12-cup coffee maker with thermal carafe. Brew delicious coffee at the perfect temperature every morning.',
    price: 79.99,
    category: 'home',
    images: ['https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400'],
    seller: sellers[1],
    rating: 4.6,
    reviewCount: 423,
    reviews: [
      { id: 'rev-4', userName: 'Linda K.', rating: 5, comment: 'Makes perfect coffee every time!', date: '2024-01-18' }
    ],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Kitchen Essential']
  },
  {
    id: 'prod-14',
    name: 'Robot Vacuum Cleaner',
    description: 'Smart robot vacuum with app control and auto-charging. Cleans carpets and hard floors with powerful suction.',
    price: 249.99,
    originalPrice: 349.99,
    category: 'home',
    images: ['https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400'],
    seller: sellers[1],
    rating: 4.7,
    reviewCount: 789,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Smart Home', 'Best Seller']
  },
  {
    id: 'prod-15',
    name: 'Air Purifier HEPA Filter',
    description: 'True HEPA air purifier removes 99.97% of airborne particles. Quiet operation perfect for bedrooms and offices.',
    price: 159.99,
    category: 'home',
    images: ['https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400'],
    seller: sellers[1],
    rating: 4.5,
    reviewCount: 567,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Health & Wellness']
  },
  {
    id: 'prod-16',
    name: 'Memory Foam Pillow Set',
    description: 'Set of 2 premium memory foam pillows with cooling gel. Provides excellent neck support and comfort for better sleep.',
    price: 49.99,
    category: 'home',
    images: ['https://images.unsplash.com/photo-1631049552240-59c37f38802b?w=400'],
    seller: sellers[1],
    rating: 4.4,
    reviewCount: 345,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Bedroom']
  },
  {
    id: 'prod-17',
    name: 'Non-Stick Cookware Set',
    description: '10-piece non-stick cookware set with glass lids. Dishwasher safe and suitable for all stovetops.',
    price: 129.99,
    category: 'home',
    images: ['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400'],
    seller: sellers[1],
    rating: 4.6,
    reviewCount: 456,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Kitchen Essential']
  },
  {
    id: 'prod-18',
    name: 'Electric Kettle 1.7L',
    description: 'Fast-boiling electric kettle with auto shut-off and boil-dry protection. Boils water in just 5 minutes.',
    price: 29.99,
    category: 'home',
    images: ['https://images.unsplash.com/photo-1563299796-17596ed6b017?w=400'],
    seller: sellers[1],
    rating: 4.3,
    reviewCount: 234,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Kitchen']
  },
  {
    id: 'prod-19',
    name: 'Bamboo Cutting Board Set',
    description: 'Set of 3 organic bamboo cutting boards in different sizes. Knife-friendly and naturally antibacterial.',
    price: 34.99,
    category: 'home',
    images: ['https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400'],
    seller: sellers[1],
    rating: 4.7,
    reviewCount: 289,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Eco-Friendly']
  },
  {
    id: 'prod-20',
    name: 'Aroma Diffuser Ultrasonic',
    description: 'Essential oil diffuser with LED lights and auto shut-off. Creates a relaxing atmosphere in any room.',
    price: 24.99,
    category: 'home',
    images: ['https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400'],
    seller: sellers[1],
    rating: 4.5,
    reviewCount: 678,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Wellness']
  },
  {
    id: 'prod-21',
    name: 'Towel Set Luxury Cotton',
    description: 'Premium 6-piece towel set made from 100% Turkish cotton. Ultra-soft and highly absorbent.',
    price: 59.99,
    category: 'home',
    images: ['https://images.unsplash.com/photo-1622170954176-bb57c5e0b313?w=400'],
    seller: sellers[1],
    rating: 4.8,
    reviewCount: 412,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Bathroom']
  },
  {
    id: 'prod-22',
    name: 'Wall Mounted Coat Rack',
    description: 'Modern wall-mounted coat rack with 5 hooks. Sturdy metal construction with sleek design.',
    price: 19.99,
    category: 'home',
    images: ['https://images.unsplash.com/photo-1595428773610-7fce2c9dc6cd?w=400'],
    seller: sellers[1],
    rating: 4.4,
    reviewCount: 156,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Organization']
  },
  {
    id: 'prod-23',
    name: 'Ceramic Dinnerware Set',
    description: '16-piece ceramic dinnerware set service for 4. Microwave and dishwasher safe with elegant design.',
    price: 89.99,
    category: 'home',
    images: ['https://images.unsplash.com/photo-1584990347449-39b4aa8c4f24?w=400'],
    seller: sellers[1],
    rating: 4.6,
    reviewCount: 345,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Dining']
  },
  {
    id: 'prod-24',
    name: 'Ergonomic Office Chair',
    description: 'Adjustable office chair with lumbar support and breathable mesh back. Promotes healthy posture during long work hours.',
    price: 199.99,
    originalPrice: 299.99,
    category: 'home',
    images: ['https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400'],
    seller: sellers[1],
    rating: 4.7,
    reviewCount: 567,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Work From Home', 'Best Seller']
  },

  // CLOTHING & ACCESSORIES
  {
    id: 'prod-25',
    name: 'Classic Denim Jacket',
    description: 'Timeless denim jacket with button closure and chest pockets. Perfect layering piece for any season.',
    price: 49.99,
    category: 'clothing',
    images: ['https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400'],
    seller: sellers[2],
    rating: 4.5,
    reviewCount: 234,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Fashion']
  },
  {
    id: 'prod-26',
    name: 'Running Shoes Performance',
    description: 'Lightweight running shoes with responsive cushioning and breathable mesh upper. Designed for comfort and speed.',
    price: 79.99,
    originalPrice: 99.99,
    category: 'clothing',
    images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400'],
    seller: sellers[2],
    rating: 4.7,
    reviewCount: 892,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Athletic', 'Best Seller']
  },
  {
    id: 'prod-27',
    name: 'Leather Backpack',
    description: 'Genuine leather backpack with laptop compartment and multiple pockets. Professional style meets functionality.',
    price: 129.99,
    category: 'clothing',
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400'],
    seller: sellers[2],
    rating: 4.6,
    reviewCount: 456,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Accessories']
  },
  {
    id: 'prod-28',
    name: 'Cotton T-Shirt 3-Pack',
    description: 'Premium cotton t-shirts in classic colors. Soft, breathable, and perfect for everyday wear.',
    price: 34.99,
    category: 'clothing',
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400'],
    seller: sellers[2],
    rating: 4.4,
    reviewCount: 678,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Basics']
  },
  {
    id: 'prod-29',
    name: 'Winter Wool Coat',
    description: 'Elegant wool blend coat with button closure. Warm and stylish for cold weather.',
    price: 159.99,
    category: 'clothing',
    images: ['https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400'],
    seller: sellers[2],
    rating: 4.8,
    reviewCount: 345,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Outerwear']
  },
  {
    id: 'prod-30',
    name: 'Yoga Pants High Waist',
    description: 'High-waisted yoga pants with moisture-wicking fabric. Perfect for workouts and casual wear.',
    price: 39.99,
    category: 'clothing',
    images: ['https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400'],
    seller: sellers[2],
    rating: 4.5,
    reviewCount: 567,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Athletic']
  },
  {
    id: 'prod-31',
    name: 'Sunglasses Polarized',
    description: 'Polarized sunglasses with UV400 protection. Stylish design with durable frames.',
    price: 29.99,
    category: 'clothing',
    images: ['https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400'],
    seller: sellers[2],
    rating: 4.3,
    reviewCount: 234,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Accessories']
  },
  {
    id: 'prod-32',
    name: 'Dress Shirt Button Down',
    description: 'Classic button-down dress shirt in wrinkle-resistant fabric. Professional look for work or formal events.',
    price: 44.99,
    category: 'clothing',
    images: ['https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400'],
    seller: sellers[2],
    rating: 4.6,
    reviewCount: 289,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Business']
  },
  {
    id: 'prod-33',
    name: 'Sneakers Canvas Low Top',
    description: 'Classic canvas sneakers with rubber sole. Comfortable and versatile for everyday wear.',
    price: 39.99,
    category: 'clothing',
    images: ['https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400'],
    seller: sellers[2],
    rating: 4.5,
    reviewCount: 456,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Casual']
  },
  {
    id: 'prod-34',
    name: 'Watch Stainless Steel',
    description: 'Elegant stainless steel watch with date display. Water-resistant and scratch-resistant crystal.',
    price: 89.99,
    category: 'clothing',
    images: ['https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400'],
    seller: sellers[2],
    rating: 4.7,
    reviewCount: 678,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Accessories']
  },
  {
    id: 'prod-35',
    name: 'Baseball Cap Adjustable',
    description: 'Classic baseball cap with adjustable strap. Breathable cotton fabric in multiple colors.',
    price: 19.99,
    category: 'clothing',
    images: ['https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400'],
    seller: sellers[2],
    rating: 4.4,
    reviewCount: 234,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Accessories']
  },
  {
    id: 'prod-36',
    name: 'Hoodie Pullover',
    description: 'Comfortable pullover hoodie with kangaroo pocket. Soft fleece lining for warmth.',
    price: 44.99,
    category: 'clothing',
    images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400'],
    seller: sellers[2],
    rating: 4.6,
    reviewCount: 567,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Casual']
  },

  // BOOKS
  {
    id: 'prod-37',
    name: 'The Art of Programming',
    description: 'Comprehensive guide to modern programming techniques. Learn best practices from industry experts.',
    price: 39.99,
    category: 'books',
    images: ['https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400'],
    seller: sellers[3],
    rating: 4.8,
    reviewCount: 456,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Technology']
  },
  {
    id: 'prod-38',
    name: 'Mindfulness for Beginners',
    description: 'Practical guide to mindfulness meditation and living in the present moment. Reduce stress and find peace.',
    price: 16.99,
    category: 'books',
    images: ['https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400'],
    seller: sellers[3],
    rating: 4.7,
    reviewCount: 789,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Self-Help', 'Best Seller']
  },
  {
    id: 'prod-39',
    name: 'Cooking Mastery',
    description: 'Master the fundamentals of cooking with 200+ recipes and techniques. From beginner to pro.',
    price: 29.99,
    category: 'books',
    images: ['https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400'],
    seller: sellers[3],
    rating: 4.9,
    reviewCount: 1234,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Cookbook', 'Best Seller']
  },
  {
    id: 'prod-40',
    name: 'Business Strategy Guide',
    description: 'Essential strategies for building and growing successful businesses. Real-world case studies included.',
    price: 34.99,
    category: 'books',
    images: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'],
    seller: sellers[3],
    rating: 4.6,
    reviewCount: 345,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Business']
  },
  {
    id: 'prod-41',
    name: 'Photography Techniques',
    description: 'Learn professional photography techniques from composition to post-processing. Stunning visuals included.',
    price: 44.99,
    category: 'books',
    images: ['https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400'],
    seller: sellers[3],
    rating: 4.7,
    reviewCount: 456,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Art']
  },
  {
    id: 'prod-42',
    name: 'World History Atlas',
    description: 'Comprehensive visual guide to world history with maps and timelines. Perfect for students and history buffs.',
    price: 49.99,
    category: 'books',
    images: ['https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400'],
    seller: sellers[3],
    rating: 4.8,
    reviewCount: 234,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Education']
  },
  {
    id: 'prod-43',
    name: 'Fitness Training Manual',
    description: 'Complete fitness training guide with workout plans and nutrition advice. Transform your body and health.',
    price: 24.99,
    category: 'books',
    images: ['https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400'],
    seller: sellers[3],
    rating: 4.5,
    reviewCount: 567,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Health']
  },
  {
    id: 'prod-44',
    name: 'Science Fiction Anthology',
    description: 'Collection of award-winning science fiction short stories from top authors. Mind-bending tales await.',
    price: 19.99,
    category: 'books',
    images: ['https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400'],
    seller: sellers[3],
    rating: 4.6,
    reviewCount: 678,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Fiction']
  },
  {
    id: 'prod-45',
    name: 'Gardening Encyclopedia',
    description: 'Complete guide to gardening with plant profiles and seasonal tips. Grow beautiful gardens year-round.',
    price: 39.99,
    category: 'books',
    images: ['https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400'],
    seller: sellers[3],
    rating: 4.7,
    reviewCount: 345,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Gardening']
  },
  {
    id: 'prod-46',
    name: 'Financial Freedom',
    description: 'Practical guide to personal finance, investing, and building wealth. Achieve financial independence.',
    price: 27.99,
    category: 'books',
    images: ['https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400'],
    seller: sellers[3],
    rating: 4.8,
    reviewCount: 892,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Finance', 'Best Seller']
  },
  {
    id: 'prod-47',
    name: 'Travel Photography',
    description: 'Capture stunning travel photos with expert tips and techniques. Document your adventures beautifully.',
    price: 32.99,
    category: 'books',
    images: ['https://images.unsplash.com/photo-1519791883288-dc8bd696e667?w=400'],
    seller: sellers[3],
    rating: 4.6,
    reviewCount: 234,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Photography']
  },
  {
    id: 'prod-48',
    name: 'Mystery Novel Collection',
    description: 'Three bestselling mystery novels in one collection. Gripping stories that keep you guessing.',
    price: 29.99,
    category: 'books',
    images: ['https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400'],
    seller: sellers[3],
    rating: 4.7,
    reviewCount: 567,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Fiction']
  },
  {
    id: 'prod-49',
    name: 'Leadership Principles',
    description: 'Essential leadership principles for managers and executives. Build high-performing teams.',
    price: 36.99,
    category: 'books',
    images: ['https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400'],
    seller: sellers[3],
    rating: 4.8,
    reviewCount: 456,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Business']
  },
  {
    id: 'prod-50',
    name: 'Yoga for Everyone',
    description: 'Beginner-friendly yoga guide with illustrated poses and sequences. Improve flexibility and wellness.',
    price: 22.99,
    category: 'books',
    images: ['https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400'],
    seller: sellers[3],
    rating: 4.5,
    reviewCount: 345,
    reviews: [],
    inStock: true,
    shipsFrom: 'United States',
    tags: ['Health']
  }
];

// Helper functions
export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(p =>
    p.name.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

export function getFeaturedProducts(count: number = 10): Product[] {
  return products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, count);
}
