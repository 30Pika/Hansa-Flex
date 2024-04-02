import ProductsSche from "../Module/ProductsSche.js";

const FetchCategory = async (req, res) => {
    try {
        const data = await ProductsSche.find({
            $or: [
                { category: { $regex: req.params.key } }
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
                message: "Erro From Category Filed Fetching Data"
            })
        }

    } catch (error) {
        res.send(`Error From Category Filed Fetching Data Controller : ${error}`)
    }
}

export default FetchCategory;