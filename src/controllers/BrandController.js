import NotFound from "../errors/NotFound.js";
import { brand } from "../models/Brand.js";
import product from "../models/Product.js";

class BrandController {
    static getAllBrands = async (req, res, next) => {
        try {
            const brandsList = await brand.find({});
            res.status(200).json(brandsList);
        } catch (erro) {
            next(erro);
        }
    };

    static getBrandByID = async (req, res, next) => {
        try {
            const id = req.params.id;
            const brandFinded = await brand.findById(id);

            if (brandFinded !== null){
                res.status(200).json(brandFinded);
            } else {
                next(new NotFound("Brand ID not found"));
            }
        } catch (erro) {
            next(erro);
        }
    };

    static getAllProductsByBrand = async (req, res, next) => {
        try {
            const id = req.params.id;
            const brandFinded = await brand.findById(id);
            if (brandFinded !== null){
                const productsList = await product.find({ brand: brandFinded });
                res.status(200).json(productsList);
            } else {
                next(new NotFound("Brand ID not found"));
            }
            
        } catch (erro) {
            next(erro);
        }
    };

    static updateBrandByID = async (req, res, next) => {
        try {
            const id = req.params.id;
            const brandFinded = await brand.findById(id);
            if (brandFinded !== null){
                await brand.findByIdAndUpdate(id, req.body);
                res.status(200).json({ message: "Brand successfully updated on database"});
            } else {
                next(new NotFound("Brand ID not found"));
            }

        } catch (erro) {
            next(erro);
        }
    };

    static createBrand = async (req, res, next) => {
        try {
            const newBrand = await brand.create(req.body);
            res.status(201).json({ message: "Brand successfully added to database", brand: newBrand});
        } catch (erro) {
            next(erro);
        }
    };

    static deleteBrandByID = async (req, res, next) => {
        try {
            const id = req.params.id;
            const brandFinded = await brand.findById(id);
            if (brandFinded !== null){
                await brand.findByIdAndDelete(id);
                res.status(200).json({ message: "Brand successfully deleted on database"});
            } else {
                next(new NotFound("Brand ID not found"));
            }

        } catch (erro) {
            next(erro);
        }
    };
}

export default BrandController;