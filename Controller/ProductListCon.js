import ProductsSche from "../Module/ProductsSche.js";

const ProductListCon = async (req, res) => {
    try {
        const data = await ProductsSche.find();
        if (data) {
            res.send({
                status: true,
                data
            })
        } else {
            res.send({
                status: false,
                result: "Product List is Empty"
            });
        }
    } catch (error) {
        res.send(`Error From Product List Fetching Controller : ${error}`)
    }
}

export default ProductListCon;