import Product from "./product.js";

class ProductsController {
    constructor(currentId = 0) {
        this.products = [];
        this.currentId = currentId;
    }

    addProduct(prodName='Default Product', description='Default Product description', img=undefined, price=0, rating=0) {     
        const newProduct = new Product(prodName, description, img, price, rating, this.currentId);
        this.currentId++;

        this.products.push(newProduct);
    }

    getProduct(id) {
        if (isNaN(id) || id < 0 || id > this.products.length) {
            throw new TypeError("Please enter a valid numerical product ID");
        }
        else {
            return this.products[id];
        }
    }

    getProducts() {
        return this.products;
    }

    removeProduct(id) {
        if (isNaN(id) || id < 0 || id >= this.products.length) {
            throw new TypeError("Please enter a valid numerical product ID");
        }
        else {
            this.products.splice(id,1);
        }
    }

    loadProductFromLocalStorage() {
        const storageItems = localStorage.getItem("items");
        if (storageItems) {
            const items = JSON.parse(storageItems);
            for (let i=0; i < items.length; i++) {
                this.items.push(items[i]);
            }
        }
    }
}

export default ProductsController;