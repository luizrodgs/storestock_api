import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    serial: { type: String},
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
}, { versionKey: false });

const product = mongoose.model("storestock_apis_products", productSchema);

export default product;