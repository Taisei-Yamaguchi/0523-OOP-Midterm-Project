class ShoppingCart{
    constructor(){
        this.items=[];
        this.total = 0; // 合計金額を追加
    }

    // カートに商品を追加するメソッド
    addItem(product) {
        this.items.push(product);
        this.total += product.price;
        console.log(this.items);
        console.log(`Total: ${this.total}`)
    }


    render(){
        const shoppingCartElement = document.createElement('section');
        shoppingCartElement.classList.add('shopping-cart');

        const totalElement = document.createElement('div');
        totalElement.classList.add('total');
        totalElement.textContent = `合計: $${this.total}`;

        // レンダリングのコードを追加

        shoppingCartElement.appendChild(totalElement);

        return shoppingCartElement;
    }
}

export default ShoppingCart; 