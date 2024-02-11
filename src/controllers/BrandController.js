import { brand } from "../models/Brand.js";
import product from "../models/Product.js"

class BrandController {
    static async getAllBrands (req, res) {
        try {
            const brandsList = await brand.find({});
            res.status(200).json(brandsList);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - get all brands failed`});
        }
    };

    static async getBrandByID (req, res) {
        try {
            const id = req.params.id;
            const brandFinded = await brand.findById(id);
            res.status(200).json(brandFinded);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - get brand by id failed`});
        }
    };

    static async getAllProductsByBrand (req, res) {
        try {
            const id = req.params.id;
            const brandFinded = await brand.findById(id);
            const productsList = await product.find({ brand: brandFinded });
            res.status(200).json(productsList);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - get products by brand failed`});
        }
    }

    static async updateBrandByID (req, res) {
        try {
            const id = req.params.id;
            await brand.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Brand successfully updated on database"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - get brand by id failed`});
        }
    };

    static async createBrand (req, res) {
        try {
            const newBrand = await brand.create(req.body);
            res.status(201).json({ message: "Brand successfully added to database", brand: newBrand});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - brand creation failed`});
        }
    };

    static async deleteBrandByID (req, res) {
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