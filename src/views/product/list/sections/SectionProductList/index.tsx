import { useEZVQuery } from '@ezv/utils/hooks'
import React from 'react'
import Image from 'next/image'
import { Box, Chip, Divider, Grid, Rating, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { ProductCard } from './components'

export default function SectionProductList() {
  const product = useEZVQuery('product')
  const router = useRouter()
  return (
    <Stack>
      {product.data?.products.map((e, i, arr) => (
        <React.Fragment key={i}>
          <ProductCard
            onClick={() =>
              router.push({
                pathname: '/product/detail/[id]',
                query: { id: e.id },
              })
            }
          >
            <Grid container columns={3} gap={2}>
              <Grid item xs={3} sm={1}>
                <Box key={i} width="100%" height={256} position="relative">
                  <Image
                    src={e.thumbnail}
                    alt="Product Image"
                    fill
                    sizes="100%"
                    placeholder="blur"
                    blurDataURL={e.thumbnail}
                    style={{ objectFit: 'cover', borderRadius: 8 }}
                  />
                </Box>
              </Grid>
              <Grid item container xs columns={2} gap={1} textAlign="start">
                <Grid item xs={2} sm>
                  <Typography sx={{ fontWeight: 'bold' }}>
                    {e.title} - {e.brand}
                  </Typography>
                </Grid>
                <Grid item xs="auto">
                  <Typography>$ {e.price.toLocaleString()}</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography>{e.description}</Typography>
                </Grid>
                <Grid item xs={2} sm>
                  <Chip label={e.category} />
                </Grid>
                <Grid item xs="auto">
                  <Rating value={e.rating} readOnly />
                </Grid>
              </Grid>
            </Grid>
          </ProductCard>
          {i + 1 !== arr.length && <Divider />}
        </React.Fragment>
      ))}
    </Stack>
  )
}
