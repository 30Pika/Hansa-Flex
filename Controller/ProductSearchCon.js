import ProductsSche from "../Module/ProductsSche.js";

const ProductSearchCon = async (req, res) => {
    try {
        const data = await ProductsSche.find({
            $or: [
                { name: { $regex: req.params.key } }
            ],
        });
        if (data) {
            res.send({
                status: true,
                data
            })
        }
    } catch (error) {
        res.send({
            status: false,
            message: `Error From Product Search Controller : ${error}`
        })
    }
}

export default ProductSearchCon;