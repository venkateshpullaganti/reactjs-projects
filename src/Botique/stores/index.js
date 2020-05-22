import ProductService from '../services/ProductService'
import PaginationProductService from '../services/PaginationProductService'

import { ProductStore } from './ProductStore'
import { PaginationProductStore } from './PaginationProductStore'

const productService = new ProductService()
const productStore = new ProductStore(productService)

const paginationProductService = new PaginationProductService()
const paginationProductStore = new PaginationProductStore(
   paginationProductService
)

export default { productStore, paginationProductStore }
