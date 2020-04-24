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
    imageURL;
    constructor(ProductObj) {
        this.productId = ProductObj.productId;
        this.availableSizes = ProductObj.availableSizes;
        this.currencyFormat = ProductObj.currencyFormat;
        this.currencyId = ProductObj.currencyId;
        this.description = ProductObj.description;
        this.installmentsCount = ProductObj.installmentsCount;
        this.isFreeShipping = ProductObj.isFreeShipping;
        this.price = ProductObj.price;
        this.printStyle = ProductObj.printStyle;
        this.title = ProductObj.title;
        this.imageURL = ProductObj.imageURL;
    }
}
export default ProductModel;
