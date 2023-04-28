import { assert } from "chai";
import ProductsController from '../scripts/productsController.js';
import Product from '../scripts/product.js';

describe('ProductsController', () => {
    describe('.addProduct', () => {
        it('creates a product when given appropriate data', () => {
            //Setup
            const expected = new Product ('Thing', 'A Thing', undefined, 0, 0);
            const myProdController = new ProductsController();
            //Execute
            myProdController.addProduct('Thing', 'A Thing', undefined, 0);
            const result = myProdController.getProduct(0);
            //Verify
            assert.deepEqual(result, expected);
        });
        it('creates default product when given no data', () => {
            //Setup
            const expected = new Product ('Default Product', 'Default Product description', undefined, 0, 0);
            const myProdController = new ProductsController();
            //Execute
            myProdController.addProduct();
            const result = myProdController.getProduct(0);
            //Verify
            assert.deepEqual(result, expected);
        });
    });
    describe('.getProduct', () => {
        it('returns an error if passed a non-number value', () => {
            //Setup
            const expected = new TypeError;
            const myProdController = new ProductsController();
            const input = "Alpha";
            //Execute and Verify
            assert.throws(
                () => myProdController.getProduct(input),
                TypeError
            );
        });
        it('returns an error if passed a number less than zero', () => {
            //Setup
            const expected = new TypeError;
            const myProdController = new ProductsController();
            const input = -1;
            //Execute and Verify
            assert.throws(
                () => myProdController.getProduct(input),
                TypeError
            );
        });
        it('returns an error if passed a number greater than the number of products', () => {
            //Setup
            const expected = new TypeError;
            const myProdController = new ProductsController();
            const input = 1;
            //Execute and Verify
            assert.throws(
                () => myProdController.getProduct(input),
                TypeError
            );
        });
    });
    describe('.getProducts', () => {
        it('returns an empty array when products array is empty', () => {
            //Setup
            const expected = [];
            const myProdController = new ProductsController();
            //Execute
            const result = myProdController.getProducts();
            //Verify
            assert.deepEqual(result, expected);
        });
        it('returns the correct array when products array has a single entry', () => {
            //Setup
            const expected = [new Product('Thing', 'A Thing', undefined, 0, 0)];
            const myProdController = new ProductsController();
            myProdController.addProduct('Thing', 'A Thing', undefined, 0);
            //Execute
            const result = myProdController.getProducts();
            //Verify
            assert.deepEqual(result, expected);
        });
        it('returns the correct array when products array has multiple entries', () => {
            //Setup
            const expected = [new Product('Game', 'A Game', undefined, 30, 0),
                new Product('Thing', 'A Thing', undefined, 0, 1),
                new Product('Stick', 'A Stick', undefined, 1, 2)];
            const myProdController = new ProductsController();
            myProdController.addProduct('Game', 'A Game', undefined, 30);
            myProdController.addProduct('Thing', 'A Thing', undefined, 0);
            myProdController.addProduct('Stick', 'A Stick', undefined, 1);
            //Execute
            const result = myProdController.getProducts();
            //Verify
            assert.deepEqual(result, expected);
        });
    });
    describe('.removeProduct', () => {
        it('returns an error if passed a non-number value', () => {
            //Setup
            const expected = new TypeError;
            const myProdController = new ProductsController();
            const input = "Alpha";
            //Execute and Verify
            assert.throws(
                () => myProdController.removeProduct(input),
                TypeError
            );
        });
        it('returns an error if passed a number less than zero', () => {
            //Setup
            const expected = new TypeError;
            const myProdController = new ProductsController();
            const input = -1;
            //Execute and Verify
            assert.throws(
                () => myProdController.removeProduct(input),
                TypeError
            );
        });
        it('returns an error if passed a number greater than the number of products', () => {
            //Setup
            const expected = new TypeError;
            const myProdController = new ProductsController();
            const input = "4";
            //Execute and Verify
            assert.throws(
                () => myProdController.removeProduct(input),
                TypeError
            );
        });
        it('removes correct element when given an id', () => {
            //Setup
            const expected = [new Product('Game', 'A Game', undefined, 30, 0), 
                new Product('Stick', 'A Stick', undefined, 1, 2)];
            const myProdController = new ProductsController();
            myProdController.addProduct('Game', 'A Game', undefined, 30);
            myProdController.addProduct('Thing', 'A Thing', undefined, 0);
            myProdController.addProduct('Stick', 'A Stick', undefined, 1);
            //Execute
            myProdController.removeProduct(1);
            const result = myProdController.getProducts();
            //Verify
            assert.deepEqual(result, expected);
        });
    });
});