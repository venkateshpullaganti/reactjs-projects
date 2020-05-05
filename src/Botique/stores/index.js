import { ProductStore } from "./ProductStore";

import ProductService from "../services/ProductService";

const productService = new ProductService();
const productStore = new ProductStore(productService);

export default productStore;
