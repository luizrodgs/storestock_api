import mongoose from "mongoose";
import { brandSchema } from "./Brand.js";

const productSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    model: { type: String, required: true },
    serial: { type: String},
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    brand: brandSchema,
}, { versionKey: false });

const product = mongoose.model("storestock_apis_products", productSchema);

export default product;