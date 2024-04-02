import jwt from "jsonwebtoken";

const VerifyToken = async (req, res, next) => {
    try {
        const decode = jwt.verify(
            req.headers.authorization,
            process.env.JWT_Secret_Key
        );
        req.user = decode;
        next();
    } catch (error) {
        res.send({
            status: false,
            Error: `From Verify Token ${error}`
        })
    }
};

export default VerifyToken;