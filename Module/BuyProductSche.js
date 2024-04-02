import mongoose from "mongoose";

const BuySche = new mongoose.Schema({
    userId: { type: String, require: true },
    name: { type: String, require: true },
    price: { type: String, require: true },
    category: { type: String, require: true },
    subcategory: { type: String, require: true },
    company: { type: String, require: true },
    quntity: { type: String, require: true },
    bill: { type: String, require: true },
    status: { type: String, require: true, default: "pending" },
    image:{type:Object, require:true}
})

export default mongoose.model('buyproducts', BuySche);