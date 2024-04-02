import BuyProductSche from "../Module/BuyProductSche.js";

const CartBuyProductCon = async (req, res) => {
    try {
        const result = await BuyProductSche.find({ userId: req.params.id });
        if (result) {
            res.send({
                status: true,
                result
            })
        } else {
            res.send({
                status: false,
                message: "Erro From Cart Buy Product Fetching Data"
            })
        }

    } catch (error) {
        res.send(`Error From Cart Buy Product Controller : ${error}`)
    }
}

export default CartBuyProductCon;