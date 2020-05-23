class ProductModel {
   productId
   availableSizes
   currencyFormat
   currencyId
   description
   installmentsCount
   isFreeShipping
   price
   printStyle
   title
   imageURL

   constructor(ProductObj) {
      this.productId = ProductObj.id
      this.availableSizes = ProductObj.availableSizes
      this.currencyFormat = ProductObj.currencyFormat
      this.currencyId = ProductObj.currencyId
      this.description = ProductObj.description
      this.installmentsCount = ProductObj.installments
      this.isFreeShipping = ProductObj.isFreeShipping
      this.price = ProductObj.price
      this.printStyle = ProductObj.style
      this.title = ProductObj.title
      this.imageURL = ProductObj.image
   }
}
export default ProductModel
