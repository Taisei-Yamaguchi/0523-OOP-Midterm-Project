import ProductItem from './productItem.js';

class ProductList{
    constructor(apiUrl,app){
        this.products=[];
        this.apiUrl=apiUrl;
        this.app = app;
    }

    
    // get all products info from API
    async fetchProducts() {
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) {
                throw new Error('cannot get information from API');
            }
            const data = await response.json();
            this.products = data; // set data into this.products property
            
        } catch (error) {
            console.error('Error:', error);
        }
    }

    render(){

        // create <ul> which includes product lists
        const productListElement = document.createElement('ul');
        productListElement.classList.add('product-list');

        // create each product list
        this.products.forEach((productData) => {
            const productItem = new ProductItem(productData,this.app);
            const productItemElement = productItem.render();
            
            productListElement.appendChild(productItemElement);
        });

        return productListElement;
    }
}

export default ProductList; 