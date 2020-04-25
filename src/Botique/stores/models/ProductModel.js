class ProductModel {
    productId;
    availableSizes;
    currencyFormat;
    currencyId;
    description;
    installmentsCount;
    isFreeShipping;
    price;
    printStyle;
    title;
    image;
    id;
    constructor(ProductObj) {
        this.productId = ProductObj.productId;
        this.availableSizes = ProductObj.availableSizes;
        this.currencyFormat = ProductObj.currencyFormat;
        this.currencyId = ProductObj.currencyId;
        this.description = ProductObj.description;
        this.id = ProductObj.id;
        this.installments = ProductObj.installments;
        this.isFreeShipping = ProductObj.isFreeShipping;
        this.price = ProductObj.price;
        this.style = ProductObj.style;
        this.title = ProductObj.title;
        this.image = ProductObj.image;
    }
}
export default ProductModel;
