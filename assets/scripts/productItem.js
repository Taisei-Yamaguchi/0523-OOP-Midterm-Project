class ProductItem{
    constructor(product,app){
        this.product=product;
        this.app = app;
        this.count=0
    }

    addToCart(){
        this.count++;
        this.app.addProductToCart(this.product);
        console.log(this.product.title+':'+this.count);
    }

    

    render(){
        // 商品要素を作成
        const productItemElement = document.createElement('li');
        productItemElement.classList.add('product-item',`item-${this.product.id}`);

        // 商品のタイトルを表示
        const titleElement = document.createElement('h2');
        titleElement.textContent = this.product.title;
        productItemElement.appendChild(titleElement);

        // 商品の価格を表示
        const priceElement = document.createElement('p');
        priceElement.textContent = `価格: $${this.product.price}`;
        productItemElement.appendChild(priceElement);

        // カートに追加ボタンを作成
        const addToCartButton = document.createElement('button');
        addToCartButton.classList.add(`button-${this.product.id}`)
        addToCartButton.textContent = 'カートに追加';
        addToCartButton.addEventListener('click', () => {
            //appで実装
            this.addToCart();
            this.app.totalUpdate();

            //ここで直接レンダリングを実行
            // 商品の数量を表示する要素を取得
            const countElement = document.querySelector(`.count-${this.product.id}`);
            // テキストコンテンツを更新
            if (countElement !== null) {
                countElement.textContent = `カートに追加された回数: ${this.count}`;
            }
        });
        productItemElement.appendChild(addToCartButton);

        // カートに追加された回数を表示
        const countElement = document.createElement('p');
        countElement.classList.add(`count-${this.product.id}`)
        countElement.textContent = `カートに追加された回数: ${this.count}`;
        productItemElement.appendChild(countElement);

        return productItemElement;
    }
}

export default ProductItem; 