class ShoppingCart{
    constructor(){
        this.items=[];
        this.total = 0; // total amount
    }

    // method : add products into cart
    addItem(product) {
        // check existing the product in the cart.
        const existingItem = this.items.find(item => item.product.id === product.id);

        if (existingItem) {
            // if existing count up
            existingItem.count += 1;
        } else {
            // if not existing, create new list
            this.items.push({ product, count: 1 });
        }

        this.total += product.price;
        // this.total=Math.floor(this.total);
        console.log(this.items);
        console.log(`Total: ${this.total}`)
    }


    //method: update total when button are added.
    setter(){
        const totalElement = document.querySelector('.cart .total')
        totalElement.textContent = `Total: $${Math.floor(this.total)}`;
    }

    render(){
        const shoppingCartElement = document.createElement('section');
        shoppingCartElement.classList.add('cart');

        const totalElement = document.createElement('div');
        totalElement.classList.add('total');
        totalElement.textContent = `Total: $${Math.floor(this.total)}`;

        const cartItemList=document.createElement('ul');
        cartItemList.classList.add('cart-items');

        const orderButton=document.createElement('button');
        orderButton.classList.add('button','order-button');
        orderButton.textContent='Order Now';
        // Order Button click event
        orderButton.addEventListener('click', () => {
            if (this.items.length === 0) {
                window.alert('No items in the cart. Please add any products into the cart and order again!');
            }else{
                var mes='\n'
                this.items.forEach((item)=>{
                    mes += `・${item.product.title} ✖️ ${item.count}\n`;
                });
                const confirmOrder = window.confirm(`Are you sure you want to place the order?

                ${mes}
                Total Cost: $${Math.floor(this.total)}
                `);
                
                if (confirmOrder) {
                    alert('Order Complete');
                    // reload page
                    window.location.reload();
                }
            }
            
        });


        const cartMainFuncElement=document.createElement('div');
        cartMainFuncElement.classList.add('cart-main-content');

        cartMainFuncElement.appendChild(totalElement);
        cartMainFuncElement.appendChild(orderButton);

        shoppingCartElement.appendChild(cartMainFuncElement);
        shoppingCartElement.appendChild(cartItemList);
        

        return shoppingCartElement;
    }
}

export default ShoppingCart; 