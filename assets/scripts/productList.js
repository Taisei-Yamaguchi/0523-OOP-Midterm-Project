import ProductItem from './productItem.js';

class ProductList{
    constructor(apiUrl,app){
        this.products=[];
        this.apiUrl=apiUrl;
        this.app = app;
    }

    
    // APIからデータを取得するメソッド
    async fetchProducts() {
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) {
                throw new Error('APIからデータを取得できませんでした。');
            }
            const data = await response.json();
            this.products = data; // データをクラスのプロパティに設定
            
        } catch (error) {
            console.error('エラー:', error);
        }
    }

    render(){

        // 商品リストを含む <ul> 要素を作成
        const productListElement = document.createElement('ul');
        productListElement.classList.add('product-list');

        // 商品リストをループして各商品を描画
        this.products.forEach((productData) => {
            const productItem = new ProductItem(productData,this.app);
            const productItemElement = productItem.render();
            
            productListElement.appendChild(productItemElement);
        });

        return productListElement;
    }
}

export default ProductList; 