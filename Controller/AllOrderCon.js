import BuyProductSche from "../Module/BuyProductSche.js";

const AllOrderCon = async (req, res) => {
    try {
        const data = await BuyProductSche.find();
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
        res.send(`Error From All Orders Data Fetching Controller : ${error}`)
    }
}

export default AllOrderCon;