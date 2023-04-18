import { create } from 'zustand'
import { useEZVQuery } from '@ezv/utils/hooks'
import { Product } from '@ezv/services/dummyjson/types'
import { ProductStates } from './types/states'
import { ProductActions } from './types/actions'

const useProductStore = create<ProductActions & ProductStates>()(() => ({
  getProductByID(id) {
    const product = useEZVQuery.getData('product')
    return product.products.find((e) => e.id === id) as Product
  },
}))

export default useProductStore
