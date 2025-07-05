export const createProduct = (data) => ({
  id: data.id,
  name: data.name,
  description: data.description,
  price: data.price,
  originalPrice: data.originalPrice,
  image: data.image,
  category: data.category,
  stock: data.stock,
  rating: data.rating,
  reviews: data.reviews,
  features: data.features || []
});

export const createCartItem = (product, quantity = 1) => ({
  ...product,
  quantity
});

export const createCategory = (data) => ({
  id: data.id,
  name: data.name,
  image: data.image,
  productCount: data.productCount
});