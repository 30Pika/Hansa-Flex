import ProductsSche from "../Module/ProductsSche.js";

const ProductUpdateCon = async (req, res) => {
    try {
        const result = await ProductsSche.updateOne(
            { _id: req.params.id },
            {
                $set: req.body,
            }
        );
        if (result) {
            res.send({
                status: true,
                result
            })
        } else {
            res.send({
                status: false,
                message: "Data Not Updated...!"
            })
        }
    } catch (error) {
        res.send(`Error From Update Product Controller : ${error}`)
    }
}

export default ProductUpdateCon;