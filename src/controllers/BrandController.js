import { brand } from "../models/Brand.js";
import product from "../models/Product.js";

class BrandController {
    static getAllBrands = async (req, res) => {
        try {
            const brandsList = await brand.find({});
            res.status(200).json(brandsList);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - get all brands failed`});
        }
    };

    static getBrandByID = async (req, res) => {
        try {
            const id = req.params.id;
            const brandFinded = await brand.findById(id);
            res.status(200).json(brandFinded);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - get brand by id failed`});
        }
    };

    static getAllProductsByBrand = async (req, res) => {
        try {
            const id = req.params.id;
            const brandFinded = await brand.findById(id);
            const productsList = await product.find({ brand: brandFinded });
            res.status(200).json(productsList);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - get products by brand failed`});
        }
    };

    static updateBrandByID = async (req, res) => {
        try {
            const id = req.params.id;
            await brand.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Brand successfully updated on database"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - get brand by id failed`});
        }
    };

    static createBrand = async (req, res) => {
        try {
            const newBrand = await brand.create(req.body);
            res.status(201).json({ message: "Brand successfully added to database", brand: newBrand});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - brand creation failed`});
        }
    };

    static deleteBrandByID = async (req, res) => {
        try {
            const id = req.params.id;
            await brand.findByIdAndDelete(id);
            res.status(200).json({ message: "Brand successfully deleted on database"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - get brand by id failed`});
        }
    };
}

export default BrandController;