import product from "../models/Product.js";
import { brand } from "../models/Brand.js";

class ProductController {
    static getAllProducts = async (req, res) => {
        try {
            const productsList = await product.find({});
            res.status(200).json(productsList);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - get all products failed`});
        }
    };

    static getProductByID = async (req, res) => {
        try {
            const id = req.params.id;
            const productFinded = await product.findById(id);
            res.status(200).json(productFinded);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - get product by id failed`});
        }
    };

    static updateProductByID = async (req, res) => {
        try {
            const id = req.params.id;
            await product.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Product successfully updated on database"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - get product by id failed`});
        }
    };

    static createProduct = async (req, res) => {
        const productToCreate = req.body;
        try {
            const brandFinded = await brand.findById(productToCreate.brand);
            const newProduct = { ...productToCreate, brand: { ... brandFinded._doc } };
            const createdProduct = await product.create(newProduct);
            res.status(201).json({ message: "Product successfully added to database", product: createdProduct});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - product creation failed`});
        }
    };

    static deleteProductByID = async (req, res) => {
        try {
            const id = req.params.id;
            await product.findByIdAndDelete(id);
            res.status(200).json({ message: "Product successfully deleted on database"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - get product by id failed`});
        }
    };
}

export default ProductController;