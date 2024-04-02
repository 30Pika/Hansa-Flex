import ProductsSche from "../Module/ProductsSche.js";

const ProductDeleteCon = async (req, res) => {
    try {
        const result = await ProductsSche.deleteOne({ _id: req.params.id });
        if (result) {
            res.send({
                status: true,
                result
            })
        } else {
            res.send({
                status: false,
                message: "Data Not Deleted..."
            })
        }
    } catch (error) {
        res.send(`Error From Delete Controller : ${error}`);
    }
}

export default ProductDeleteCon;