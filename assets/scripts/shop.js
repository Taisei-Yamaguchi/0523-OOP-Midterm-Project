class Shop {
    constructor(productList, shoppingCart, app) {
        this.productList = productList;
        this.shoppingCart = shoppingCart;
        this.app = app;
    }

    render() {
        // ProductListの要素を取得し、商品リストを描画
        const productListElement = this.productList.render();

        // ShoppingCartの要素を取得し、ショッピングカートを描画
        const shoppingCartElement = this.shoppingCart.render();

        // ショップ全体のコンテナ要素を作成
        const shopContainer = document.createElement('div');
        shopContainer.classList.add('shop-container');

        // 商品リストとショッピングカートをコンテナに追加
        shopContainer.appendChild(productListElement);
        shopContainer.appendChild(shoppingCartElement);

        return shopContainer; // ショップ全体の要素を返す
    }
}

export default Shop;
