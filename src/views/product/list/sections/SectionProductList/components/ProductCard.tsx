import { ButtonBase, styled } from '@mui/material'

const ProductCard = styled(ButtonBase)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(4),
}))

export default ProductCard
