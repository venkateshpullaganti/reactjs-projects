// import { CartStore } from "./CartStore";
// export default CartStore;
import productStores from '../../Botique/stores'

import CartStore from './CartStore'

const { paginationProductStore, productStore } = productStores

const cartStore = new CartStore(paginationProductStore)

export default cartStore
