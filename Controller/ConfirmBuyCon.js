import BuyProductSche from "../Module/BuyProductSche.js";

const BuyProductCon = async (req, res) => {
    try {
        const data = new BuyProductSche(req.body);
        const result = await data.save();
        if (result) {
            res.send(
                {
                    status: true,
                    message: "Buying Successfull...!",
                    result
                }
            )
        } else {
            res.send({
                status: false,
                message: "Buying Not Successfull...!",
                result
            })
        }
    } catch (error) {
        res.send(`Error From Confirm Buy Product Controller : ${error}`)
    }
}

export default BuyProductCon;