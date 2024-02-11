import mongoose from "mongoose";

const brandSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    country: { type: String, required: true },
    fiscalCode: { type: String},
}, { versionKey: false });

const brand = mongoose.model("storestock_apis_brands", brandSchema);

export { brand, brandSchema } ;