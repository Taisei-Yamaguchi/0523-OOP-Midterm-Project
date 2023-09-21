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

        
        // element of cart list
        const cartItemList = document.querySelector('.cart-items');

        // create a new element of a product
        const itemId = `cart-item-${this.product.id}`;
        let cartItem = document.querySelector(`.${itemId}`);
        const itemText = `${this.product.title} ✖️ ${this.count}`;

        // check if exsisting of cartItem or not
        if (cartItem) {
            // if existing, update existing element.
            cartItem.textContent = itemText;
        } else {
            // if not existing, create  new element
            cartItem = document.createElement('li');
            cartItem.classList.add(itemId);
            cartItem.textContent = itemText;
            cartItemList.appendChild(cartItem); 
        }
    }

    
    setCount(){
        this.app.update();
        // update counts of Item
        const countElement = document.querySelector(`.count-${this.product.id}`);
        if (countElement !== null) {
            countElement.textContent = `Counts: ${this.count}`;
        }
    }

    render(){
        // create productItem element
        const productItemElement = document.createElement('li');
        productItemElement.classList.add('product-item',`item-${this.product.id}`);

        // product image
        const imageElement = document.createElement('img');
        imageElement.classList.add('product-image')
        imageElement.setAttribute('src', this.product.image);
        imageElement.setAttribute('alt', this.product.title); 
        productItemElement.appendChild(imageElement);

        const detailElement = document.createElement('div');
        detailElement.classList.add('product-item__content');

        // product title
        const titleElement = document.createElement('h3');
        titleElement.textContent = this.product.title;
        detailElement.appendChild(titleElement);

        //product description
        const descElement = document.createElement('p');
        descElement.textContent = `Description: ${this.product.description}`;
        detailElement.appendChild(descElement);

        // product price
        const priceElement = document.createElement('p');
        priceElement.textContent = `Price:${this.product.price}`;
        detailElement.appendChild(priceElement);

        // add button
        const addToCartButton = document.createElement('button');
        addToCartButton.classList.add(`button-${this.product.id}`)
        addToCartButton.textContent = 'Add';
        addToCartButton.addEventListener('click', () => {
            // implement in app
            this.addToCart();
            this.setCount();
        });
        detailElement.appendChild(addToCartButton);

        // show counts of added items
        const countElement = document.createElement('p');
        countElement.classList.add(`count-${this.product.id}`)
        countElement.textContent = `Counts: ${this.count}`;
        detailElement.appendChild(countElement);

        productItemElement.appendChild(detailElement);
        return productItemElement;
    }
}

export default ProductItem; 