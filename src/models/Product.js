import mongoose from "mongoose";
import { brandSchema } from "./Brand.js";

const productSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    model: { type: String, required: [true, "O campo MODELO do produto é obrigatório"] },
    serial: { type: String},
    quantity: { type: Number, required: [true, "O campo QUANTIDADE do produto é obrigatório"] },
    price: { type: Number, required: [true, "O campo PREÇO do produto é obrigatório"] },
    brand: brandSchema,
}, { versionKey: false });

const product = mongoose.model("storestock_apis_products", productSchema);

export default product;