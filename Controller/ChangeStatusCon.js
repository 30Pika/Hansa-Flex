import BuyProductSche from "../Module/BuyProductSche.js";

const ChangeStatusCon = async (req, res) => {
    try {
        let result = await BuyProductSche.updateOne({ _id: req.params.id }, { $set: req.body });
        if (result) {
            res.send({
                status: true,
                result
            })
        } else {
            res.send({
                status: false,

            })
        }
    } catch (error) {
        res.send(`Error From All Orders Data Fetching Controller : ${error}`)
    }
}

export default ChangeStatusCon;