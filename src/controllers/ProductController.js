import product from "../models/Product.js";
import { brand } from "../models/Brand.js";

class ProductController {
    static getAllProducts = async (req, res, next) => {
        try {
            const productsList = await product.find({});
            res.status(200).json(productsList);
        } catch (erro) {
            next(erro);
        }
    };

    static getProductByID = async (req, res, next) => {
        try {
            const id = req.params.id;
            const productFinded = await product.findById(id);
            res.status(200).json(productFinded);
        } catch (erro) {
            next(erro);
        }
    };

    static updateProductByID = async (req, res, next) => {
        try {
            const id = req.params.id;
            await product.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Product successfully updated on database"});
        } catch (erro) {
            next(erro);
        }
    };

    static createProduct = async (req, res, next) => {
        const productToCreate = req.body;
        try {
            const brandFinded = await brand.findById(productToCreate.brand);
            const newProduct = { ...productToCreate, brand: { ... brandFinded._doc } };
            const createdProduct = await product.create(newProduct);
            res.status(201).json({ message: "Product successfully added to database", product: createdProduct});
        } catch (erro) {
            next(erro);
        }
    };

    static deleteProductByID = async (req, res, next) => {
        try {
            const id = req.params.id;
            await product.findByIdAndDelete(id);
            res.status(200).json({ message: "Product successfully deleted on database"});
        } catch (erro) {
            next(erro);
        }
    };
}

export default ProductController;