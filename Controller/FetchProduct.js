import ProductsSche from "../Module/ProductsSche.js";

const FetchProduct = async (req, res) => {
    try {
        const data = await ProductsSche.find({
            $or: [
                { company: { $regex: req.params.key } }
            ],
        });
        if (data) {
            res.send({
                status: true,
                data
            })
        } else {
            res.send({
                status: false,
                message: "Erro From Company Filed Fetching Data"
            })
        }

    } catch (error) {
        res.send(`Error From Company Filed Fetching Data Controller : ${error}`)
    }
}

export default FetchProduct;