import product from "../models/Product.js";

class ProductController {
    static async getAllProducts (req, res) {
        try {
            const productsList = await product.find({});
            res.status(200).json(productsList);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - get all products failed`});
        }
    };

    static async getProductByID (req, res) {
        try {
            const id = req.params.id;
            const productFinded = await product.findById(id);
            res.status(200).json(productFinded);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - get product by id failed`});
        }
    };

    static async updateProductByID (req, res) {
        try {
            const id = req.params.id;
            await product.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Product successfully updated on database"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - get product by id failed`});
        }
    };

    static async createProduct (req, res) {
        try {
            const newProduct = await product.create(req.body);
            res.status(201).json({ message: "Product successfully added to database", product: newProduct});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - product creation failed`});
        }
    };

    static async deleteProductByID (req, res) {
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