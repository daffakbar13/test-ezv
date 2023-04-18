export interface Product {
  brand: string
  category: string
  description: string
  discountPercentage: string
  id: number
  images: string[]
  price: number
  rating: number
  stock: number
  thumbnail: string
  title: string
}

export interface ProductList {
  products: Product[]
  limit: number
  skip: number
  total: number
}
