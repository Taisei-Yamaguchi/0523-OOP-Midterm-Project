class Shop {
    constructor(productList, shoppingCart, app) {
        this.productList = productList;
        this.shoppingCart = shoppingCart;
        this.app = app;
    }

    render() {
        // get shoppingCart
        const shoppingCartElement = this.shoppingCart.render();
        // get ProductionList
        const productListElement = this.productList.render();

        // create shop container
        const shopContainer = document.createElement('div');
        shopContainer.classList.add('shop-container');

        // add shoppingCart & productionList
        shopContainer.appendChild(shoppingCartElement);
        shopContainer.appendChild(productListElement);
        return shopContainer; 
    }
}

export default Shop;
