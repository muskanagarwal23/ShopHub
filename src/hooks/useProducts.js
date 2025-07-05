import { useState, useEffect, useMemo } from 'react';



// Sample product data
const sampleProducts = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium noise-cancelling headphones with 30-hour battery life and crystal-clear audio quality.',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
    category: 'electronics',
    stock: 15,
    rating: 4.5,
    reviews: 234,
    features: ['Noise Cancelling', '30h Battery', 'Wireless', 'Fast Charging']
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Track your health and fitness with this advanced smartwatch featuring heart rate monitoring and GPS.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&q=80',
    category: 'electronics',
    stock: 8,
    rating: 4.3,
    reviews: 189,
    features: ['Heart Rate Monitor', 'GPS', 'Water Resistant', 'Sleep Tracking']
  },
  {
    id: '3',
    name: 'Minimalist Leather Backpack',
    description: 'Stylish and functional leather backpack perfect for work, travel, or everyday use.',
    price: 89.99,
    originalPrice: 120.00,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80',
    category: 'fashion',
    stock: 23,
    rating: 4.7,
    reviews: 156,
    features: ['Genuine Leather', 'Laptop Compartment', 'Multiple Pockets', 'Adjustable Straps']
  },
  {
    id: '4',
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable and sustainable organic cotton t-shirt available in multiple colors.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80',
    category: 'fashion',
    stock: 45,
    rating: 4.2,
    reviews: 298,
    features: ['Organic Cotton', 'Pre-shrunk', 'Multiple Colors', 'Sustainable']
  },
  {
    id: '5',
    name: 'Modern Table Lamp',
    description: 'Sleek and modern table lamp with adjustable brightness and USB charging port.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80',
    category: 'home',
    stock: 12,
    rating: 4.4,
    reviews: 87,
    features: ['Adjustable Brightness', 'USB Port', 'Modern Design', 'Energy Efficient']
  },
  {
    id: '6',
    name: 'Ceramic Coffee Mug Set',
    description: 'Set of 4 handcrafted ceramic coffee mugs perfect for your morning routine.',
    price: 39.99,
    originalPrice: 55.99,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=80',
    category: 'home',
    stock: 0,
    rating: 4.6,
    reviews: 143,
    features: ['Handcrafted', 'Set of 4', 'Dishwasher Safe', 'Microwave Safe']
  },
  {
    id: '7',
    name: 'Wireless Gaming Mouse',
    description: 'Professional gaming mouse with high precision sensor and customizable RGB lighting.',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80',
    category: 'electronics',
    stock: 31,
    rating: 4.8,
    reviews: 412,
    features: ['High DPI', 'RGB Lighting', 'Programmable Buttons', 'Wireless']
  },
  {
    id: '8',
    name: 'Yoga Mat Premium',
    description: 'Extra thick yoga mat with non-slip surface and carrying strap for all yoga practices.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80',
    category: 'sports',
    stock: 18,
    rating: 4.5,
    reviews: 267,
    features: ['Non-slip', 'Extra Thick', 'Eco-friendly', 'Carrying Strap']
  },
  {
    id: '9',
    name: 'Stainless Steel Water Bottle',
    description: 'Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80',
    category: 'sports',
    stock: 5,
    rating: 4.3,
    reviews: 198,
    features: ['Double Insulated', '24oz Capacity', 'BPA Free', 'Leak Proof']
  },
  {
    id: '10',
    name: 'Wireless Phone Charger',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://images.unsplash.com/photo-1633381638729-27f730955c23?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'electronics',
    stock: 27,
    rating: 4.1,
    reviews: 156,
    features: ['Fast Charging', 'Qi Compatible', 'LED Indicator', 'Compact Design']
  },

 
  {
    id: '11',
    name: 'Premium Denim Jeans',
    description: 'High-quality slim-fit denim jeans with stretch technology for all-day comfort.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80',
    category: 'fashion',
    stock: 42,
    rating: 4.4,
    reviews: 287,
    features: ['Slim Fit', 'Stretch Denim', 'Multiple Washes', 'Durable']
  },
  {
    id: '12',
    name: 'Smart LED TV 55"',
    description: '4K Ultra HD Smart TV with HDR and built-in streaming apps.',
    price: 599.99,
    originalPrice: 799.99,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&q=80',
    category: 'electronics',
    stock: 7,
    rating: 4.7,
    reviews: 342,
    features: ['4K UHD', 'HDR', 'Smart TV', 'Multiple Ports']
  },
  {
    id: '13',
    name: 'Air Fryer XL',
    description: 'Large capacity air fryer that cooks with little to no oil for healthier meals.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=400&q=80',
    category: 'home',
    stock: 14,
    rating: 4.6,
    reviews: 421,
    features: ['5.8QT Capacity', 'Digital Display', '7 Presets', 'Dishwasher Safe']
  },
  {
    id: '14',
    name: 'Running Shoes',
    description: 'Lightweight running shoes with responsive cushioning for maximum comfort.',
    price: 89.99,
    originalPrice: 120.00,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
    category: 'sports',
    stock: 36,
    rating: 4.5,
    reviews: 512,
    features: ['Breathable Mesh', 'Shock Absorption', 'Non-Slip', 'Multiple Colors']
  },
  {
    id: '15',
    name: 'Blender Pro',
    description: 'High-performance blender for smoothies, soups, and food preparation.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?w=400&q=80',
    category: 'home',
    stock: 11,
    rating: 4.8,
    reviews: 387,
    features: ['1200W Motor', '6 Blades', '8 Presets', 'BPA-Free']
  },
  {
    id: '16',
    name: 'Leather Wallet',
    description: 'Slim genuine leather wallet with RFID protection and multiple card slots.',
    price: 49.99,
    originalPrice: 69.99,
    image: 'https://images.unsplash.com/photo-1548032885-b5e38734688a?w=400&q=80',
    category: 'fashion',
    stock: 28,
    rating: 4.3,
    reviews: 194,
    features: ['Genuine Leather', 'RFID Protection', '8 Card Slots', 'Slim Design']
  },
  {
    id: '17',
    name: 'Wireless Earbuds',
    description: 'True wireless earbuds with active noise cancellation and 24-hour battery life.',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80',
    category: 'electronics',
    stock: 22,
    rating: 4.6,
    reviews: 478,
    features: ['Noise Cancelling', '24h Battery', 'Bluetooth 5.0', 'Touch Controls']
  },
  {
    id: '18',
    name: 'Yoga Block Set',
    description: 'Set of 2 high-density foam yoga blocks for support and alignment.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&q=80',
    category: 'sports',
    stock: 17,
    rating: 4.4,
    reviews: 132,
    features: ['Set of 2', 'High-Density Foam', 'Non-Slip', 'Lightweight']
  },
  {
    id: '19',
    name: 'Ceramic Dinner Set',
    description: 'Elegant 16-piece ceramic dinner set for everyday use.',
    price: 89.99,
    originalPrice: 120.00,
    image: 'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=400&q=80',
    category: 'home',
    stock: 9,
    rating: 4.7,
    reviews: 256,
    features: ['16 Pieces', 'Microwave Safe', 'Dishwasher Safe', 'Scratch Resistant']
  },
  {
    id: '20',
    name: 'Laptop Backpack',
    description: 'Water-resistant backpack with padded laptop compartment and USB charging port.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80',
    category: 'fashion',
    stock: 31,
    rating: 4.5,
    reviews: 342,
    features: ['Water-Resistant', 'USB Port', 'Padded Compartment', 'Multiple Pockets']
  },
  // Additional items 21-50...
  {
    id: '21',
    name: 'Smart Doorbell',
    description: 'Video doorbell with motion detection and two-way audio.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1633194883650-df448a10d554?q=80&w=676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'electronics',
    stock: 13,
    rating: 4.6,
    reviews: 287,
    features: ['HD Video', 'Motion Detection', 'Two-Way Audio', 'Night Vision']
  },
  {
    id: '22',
    name: 'Cotton Bed Sheets',
    description: 'Soft 100% cotton bed sheets with deep pockets for all mattress types.',
    price: 69.99,
    originalPrice: 89.99,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80',
    category: 'home',
    stock: 27,
    rating: 4.4,
    reviews: 198,
    features: ['100% Cotton', 'Deep Pockets', 'Wrinkle Resistant', 'Multiple Colors']
  },
  {
    id: '23',
    name: 'Resistance Bands Set',
    description: 'Set of 5 resistance bands with different tension levels for full-body workouts.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
    category: 'sports',
    stock: 19,
    rating: 4.3,
    reviews: 167,
    features: ['5 Bands', 'Different Tensions', 'Portable', 'Includes Accessories']
  },
  {
    id: '24',
    name: 'Wireless Keyboard',
    description: 'Slim wireless keyboard with quiet-touch keys and long battery life.',
    price: 49.99,
    originalPrice: 69.99,
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&q=80',
    category: 'electronics',
    stock: 21,
    rating: 4.2,
    reviews: 143,
    features: ['Wireless', 'Quiet Keys', '2-Year Battery', 'Slim Design']
  },
  {
    id: '25',
    name: 'Stainless Steel Cookware Set',
    description: '10-piece stainless steel cookware set with stay-cool handles.',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1583778176476-4a8b02a64c01?w=400&q=80',
    category: 'home',
    stock: 6,
    rating: 4.8,
    reviews: 312,
    features: ['10 Pieces', 'Induction Compatible', 'Stay-Cool Handles', 'Oven Safe']
  },
  // Continue adding more items following the same pattern...
  {
    id: '26',
    name: 'Fitness Tracker',
    description: 'Basic fitness tracker with step counting and sleep monitoring.',
    price: 59.99,
    image: 'https://plus.unsplash.com/premium_photo-1681433383783-661b519b154a?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'electronics',
    stock: 33,
    rating: 4.1,
    reviews: 287,
    features: ['Step Counter', 'Sleep Tracker', 'Water Resistant', '7-Day Battery']
  },
  {
    id: '27',
    name: 'Winter Parka',
    description: 'Heavy-duty winter parka with waterproof shell and insulated lining.',
    price: 199.99,
    originalPrice: 279.99,
    image: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=400&q=80',
    category: 'fashion',
    stock: 14,
    rating: 4.6,
    reviews: 178,
    features: ['Waterproof', 'Insulated', 'Multiple Pockets', 'Adjustable Hood']
  },
  {
    id: '28',
    name: 'Portable Bluetooth Speaker',
    description: 'Waterproof portable speaker with 20-hour playtime and deep bass.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&q=80',
    category: 'electronics',
    stock: 26,
    rating: 4.5,
    reviews: 421,
    features: ['Waterproof', '20h Playtime', 'Deep Bass', 'Bluetooth 5.0']
  },
  {
    id: '29',
    name: 'Non-Stick Frying Pan',
    description: 'Professional-grade non-stick frying pan with ceramic coating.',
    price: 39.99,
    originalPrice: 59.99,
    image: 'https://images.unsplash.com/photo-1583778176476-4a8b02a64c01?w=400&q=80',
    category: 'home',
    stock: 18,
    rating: 4.4,
    reviews: 256,
    features: ['Ceramic Coating', 'Oven Safe', 'Stay-Cool Handle', 'Dishwasher Safe']
  },
  {
    id: '30',
    name: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse with silent click technology.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&q=80',
    category: 'electronics',
    stock: 41,
    rating: 4.3,
    reviews: 198,
    features: ['Wireless', 'Silent Click', 'Ergonomic', '2-Year Battery']
  },
  // Continue adding more items until 50...
  {
    id: '31',
    name: 'Memory Foam Pillow',
    description: 'Contour memory foam pillow for neck pain relief and better sleep.',
    price: 49.99,
    originalPrice: 69.99,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&q=80',
    category: 'home',
    stock: 22,
    rating: 4.6,
    reviews: 342,
    features: ['Memory Foam', 'Contour Design', 'Hypoallergenic', 'Washable Cover']
  },
  {
    id: '32',
    name: 'Dumbbell Set',
    description: 'Adjustable dumbbell set with quick-change weight system.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
    category: 'sports',
    stock: 7,
    rating: 4.7,
    reviews: 187,
    features: ['Adjustable', 'Quick-Change', 'Non-Slip Grip', 'Space Saving']
  },
  {
    id: '33',
    name: 'Smart Light Bulb',
    description: 'WiFi-enabled smart bulb with color changing and scheduling features.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1711006155490-ec01a0ecf0de?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'electronics',
    stock: 35,
    rating: 4.3,
    reviews: 278,
    features: ['Color Changing', 'Scheduling', 'Voice Control', 'Energy Efficient']
  },
  {
    id: '34',
    name: 'Leather Belt',
    description: 'Genuine leather belt with stainless steel buckle.',
    price: 39.99,
    originalPrice: 49.99,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80',
    category: 'fashion',
    stock: 29,
    rating: 4.2,
    reviews: 143,
    features: ['Genuine Leather', 'Adjustable', 'Stainless Buckle', 'Multiple Sizes']
  },
  {
    id: '35',
    name: 'Electric Toothbrush',
    description: 'Sonic electric toothbrush with multiple cleaning modes and timer.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&q=80',
    category: 'health',
    stock: 16,
    rating: 4.7,
    reviews: 421,
    features: ['Sonic Technology', '3 Modes', '2-Minute Timer', 'Long Battery']
  },
  // Continue this pattern until you reach 50 items...
  {
    id: '36',
    name: 'Desk Organizer',
    description: 'Minimalist desk organizer with multiple compartments.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=400&q=80',
    category: 'home',
    stock: 24,
    rating: 4.3,
    reviews: 98,
    features: ['Multiple Compartments', 'Minimalist Design', 'Durable', 'Easy Assembly']
  },
  {
    id: '37',
    name: 'Wireless Security Camera',
    description: 'Indoor/outdoor wireless security camera with night vision.',
    price: 129.99,
    originalPrice: 179.99,
    image: 'https://images.unsplash.com/photo-1724343025504-3afb6d67566b?q=80&w=944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'electronics',
    stock: 11,
    rating: 4.5,
    reviews: 342,
    features: ['1080p HD', 'Night Vision', 'Motion Detection', 'Weatherproof']
  },
  {
    id: '38',
    name: 'Yoga Pants',
    description: 'High-waisted yoga pants with moisture-wicking fabric.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1556812191-381c7e7d96d6?w=400&q=80',
    category: 'fashion',
    stock: 38,
    rating: 4.6,
    reviews: 512,
    features: ['High Waisted', 'Moisture-Wicking', '4-Way Stretch', 'Multiple Colors']
  },
  {
    id: '39',
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with thermal carafe and timer.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?w=400&q=80',
    category: 'home',
    stock: 9,
    rating: 4.4,
    reviews: 287,
    features: ['Programmable', 'Thermal Carafe', 'Timer', 'Auto Shut-Off']
  },
  {
    id: '40',
    name: 'Gaming Keyboard',
    description: 'Mechanical gaming keyboard with RGB backlighting.',
    price: 109.99,
    originalPrice: 149.99,
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&q=80',
    category: 'electronics',
    stock: 17,
    rating: 4.8,
    reviews: 421,
    features: ['Mechanical Keys', 'RGB Lighting', 'Anti-Ghosting', 'Wrist Rest']
  },
  // Final items 41-50...
  {
    id: '41',
    name: 'Weighted Blanket',
    description: '15lb weighted blanket for better sleep and relaxation.',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1674475762498-75310193b4f4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'home',
    stock: 13,
    rating: 4.7,
    reviews: 287,
    features: ['15lb Weight', 'Breathable', 'Removable Cover', 'Multiple Colors']
  },
  {
    id: '42',
    name: 'Smart Scale',
    description: 'Bluetooth smart scale that tracks body composition metrics.',
    price: 59.99,
    originalPrice: 79.99,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
    category: 'health',
    stock: 21,
    rating: 4.3,
    reviews: 198,
    features: ['Body Composition', 'Bluetooth Sync', 'Multiple Users', 'Glass Surface']
  },
  {
    id: '43',
    name: 'Wireless Headphones',
    description: 'Over-ear wireless headphones with deep bass and clear audio.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
    category: 'electronics',
    stock: 27,
    rating: 4.5,
    reviews: 342,
    features: ['Over-Ear', '30h Battery', 'Foldable', 'Built-in Mic']
  },
  {
    id: '44',
    name: 'Cast Iron Skillet',
    description: 'Pre-seasoned cast iron skillet for even heat distribution.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1583778176476-4a8b02a64c01?w=400&q=80',
    category: 'home',
    stock: 15,
    rating: 4.8,
    reviews: 421,
    features: ['Pre-Seasoned', 'Even Heating', 'Oven Safe', 'Durable']
  },
  {
    id: '45',
    name: 'Running Shorts',
    description: 'Lightweight running shorts with built-in liner and pocket.',
    price: 34.99,
    originalPrice: 49.99,
    image: 'https://images.unsplash.com/photo-1556812191-381c7e7d96d6?w=400&q=80',
    category: 'sports',
    stock: 32,
    rating: 4.4,
    reviews: 187,
    features: ['Lightweight', 'Built-in Liner', 'Moisture-Wicking', 'Zippered Pocket']
  },
  {
    id: '46',
    name: 'Smart Plug',
    description: 'WiFi smart plug with energy monitoring and scheduling.',
    price: 19.99,
    image: 'https://plus.unsplash.com/premium_photo-1729491126310-5686343f468c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'electronics',
    stock: 41,
    rating: 4.2,
    reviews: 256,
    features: ['Energy Monitoring', 'Scheduling', 'Voice Control', 'Compact']
  },
  {
    id: '47',
    name: 'Bamboo Cutting Board',
    description: 'Eco-friendly bamboo cutting board with juice groove.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1583778176476-4a8b02a64c01?w=400&q=80',
    category: 'home',
    stock: 23,
    rating: 4.5,
    reviews: 178,
    features: ['Bamboo', 'Juice Groove', 'Non-Slip', 'Easy Clean']
  },
  {
    id: '48',
    name: 'Fitness Resistance Bands',
    description: 'Set of 3 resistance bands for strength training.',
    price: 24.99,
    originalPrice: 34.99,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
    category: 'sports',
    stock: 19,
    rating: 4.3,
    reviews: 143,
    features: ['Set of 3', 'Different Resistances', 'Portable', 'Includes Guide']
  },
  {
    id: '49',
    name: 'Wireless Earbuds Lite',
    description: 'Affordable wireless earbuds with decent sound quality.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80',
    category: 'electronics',
    stock: 37,
    rating: 4.1,
    reviews: 287,
    features: ['Wireless', '12h Battery', 'Bluetooth 5.0', 'Built-in Mic']
  },
  {
    id: '50',
    name: 'Desk Lamp',
    description: 'Adjustable LED desk lamp with multiple brightness levels.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80',
    category: 'home',
    stock: 28,
    rating: 4.4,
    reviews: 198,
    features: ['Adjustable', 'LED', 'Multiple Brightness', 'Energy Efficient']
  }
];

export const useProducts = (searchQuery, selectedCategory, priceRange) => {
  const [products] = useState(sampleProducts);
  
  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      try {
        let url = '/api/products';
        const params = new URLSearchParams();
        
        if (searchQuery) params.append('q', searchQuery);
        if (selectedCategory && selectedCategory !== 'all') params.append('category', selectedCategory);
        params.append('minPrice', priceRange[0]);
        params.append('maxPrice', priceRange[1]);
        
        const response = await fetch(`${url}?${params.toString()}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    
    fetchProducts();
  }, [searchQuery, selectedCategory, priceRange]);

  
   const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const categories = ['all', ...new Set(products.map(p => p.category))];

  return { products, filteredProducts, categories };
};