import ProductsSche from "../Module/ProductsSche.js";

const ProductsCon = async (req, res) => {
    try {
        const { name, price, category, subcategory, userId, company, quntity } = req.body;
        const { imagedata } = req.file;
        // console.log(req.file);
        // console.log(imagedata)
        const data = new ProductsSche({
            name: name,
            price: price,
            category: category,
            subcategory: subcategory,
            userId: userId,
            company: company,
            quntity: quntity,
            image: req.file
        });
        const result = await data.save();
        if (result) {
            res.send({
                status: true,
                message: "Product Data Store Successfully..."
            });
        }
    } catch (error) {
        res.send({
            status: false,
            message: "Error from Products Controller",
            error
        })
    }
}

export default ProductsCon;