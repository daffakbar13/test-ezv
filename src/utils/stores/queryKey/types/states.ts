import { ProductList } from '@ezv/services/dummyjson/types'
import { UseQueryOptions } from '@tanstack/react-query'

export type QueryKeyStates = {
  product: UseQueryOptions<ProductList> & { queryKey: string[] }
}
