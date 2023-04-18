/* eslint-disable no-unused-vars */
import { Product } from '@ezv/services/dummyjson/types'

export type ProductActions = {
  getProductByID(id: number): Product
}
