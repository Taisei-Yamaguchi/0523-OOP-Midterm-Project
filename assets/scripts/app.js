import Product from './product.js';
import ProductItem from './productItem.js';
import ProductList from './productList.js';
import ShoppingCart from './shoppingCart.js';
import Shop from './shop.js';

// class App {
//     constructor() {}
    
//     async init() {
//         const shopContainer = document.getElementById('app');

//         const productList = new ProductList('https://fakestoreapi.com/products');
//         const shoppingCart = new ShoppingCart();
//         const shop = new Shop(productList, shoppingCart);

//         // 商品データを非同期に取得
//         await productList.fetchProducts();

        
//         const shopElement = shop.render();
//         shopContainer.appendChild(shopElement);
        
//     }

//     addProductToCart(product) {
//         shoppingCart.addItem(product);
//     }
// }

class App {
    constructor() {
        this.shoppingCart=new ShoppingCart();
        this.productList = new ProductList('https://fakestoreapi.com/products',this);
        this.shop={};
    }

    init() {
        const shopContainer = document.getElementById('app');
        this.shop = new Shop(this.productList, this.shoppingCart,this); // Shop クラスに ProductList と ShoppingCart を渡す

        this.productList.fetchProducts().then(() => {
            const shopElement = this.shop.render();
            shopContainer.appendChild(shopElement);
        });
    }

    totalUpdate(){
        // 合計金額を表示する要素を取得
        const totalElement = document.querySelector('.shopping-cart .total');
        // テキストコンテンツを更新
        totalElement.textContent = `合計: $${this.shoppingCart.total}`;
    }

    // countUpadte(id){
    //     const countElement=document.querySelector(`count-${id}`);
    //     countElement.textContent=`カートに追加された回数:${}`;
    // }

    addProductToCart(product) {
        this.shoppingCart.addItem(product);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});