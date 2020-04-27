// import { CartStore } from "./CartStore";
// export default CartStore;
import productStore from "../../Botique/stores";

import CartStore from "./CartStore";

const cartStore = new CartStore(productStore);

export default cartStore;
