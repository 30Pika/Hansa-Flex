import mongoose from "mongoose";

const ProductsSche = new mongoose.Schema({
    name: { type: String, require: true },
    price: { type: String, require: true },
    category: { type: String, require: true },
    subcategory: { type: String, require: true },
    userId: { type: String, require: true },
    company: { type: String, require: true },
    quntity: { type: String, require: true },
    image: { type: Object, require:true }
});

export default mongoose.model('products', ProductsSche);