import { create } from 'apisauce'

import { networkCallWithApisauce } from '../../utils/APIUtils'
import { apiMethods } from '../../constants/APIConstants'

class PaginationProductService {
   api
   constructor() {
      this.api = create({
         baseURL:
            'https://9ba0cd3ggi.execute-api.ap-south-1.amazonaws.com/ecommerce'
      })
   }
   getProductsAPI = (limit, offset) => {
      const endPoint = `/products?limit=${limit}&offset=${offset}`

      return networkCallWithApisauce(this.api, endPoint, {}, apiMethods.get)
   }
}
export default PaginationProductService
