import { useQueries } from '@tanstack/react-query'
import useQueryKeyStore from '@ezv/utils/stores/queryKey'
import React from 'react'

export default function Queries() {
  const q = useQueryKeyStore()
  useQueries({ queries: [q.product] })

  return <></>
}
