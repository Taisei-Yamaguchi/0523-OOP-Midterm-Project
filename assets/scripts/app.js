import ProductList from './productList.js';
import ShoppingCart from './shoppingCart.js';
import Shop from './shop.js';


class App {
    constructor() {
        this.shoppingCart=new ShoppingCart();
        this.productList = new ProductList('https://fakestoreapi.com/products',this);
        this.shop={};
    }

    init() {
        const shopContainer = document.getElementById('app');
        this.shop = new Shop(this.productList, this.shoppingCart,this); // send shopCart and productList to shop.

        this.productList.fetchProducts().then(() => {
            const shopElement = this.shop.render();
            shopContainer.appendChild(shopElement);
        });
    }

    //update every elemnt when items are added.
    update(){
        this.shoppingCart.setter();
    }

    //process of change of each entity when items are added.
    addProductToCart(product) {
        this.shoppingCart.addItem(product);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});