import RegisterSche from "../Module/RegisterSche.js";
import bcrypt from "bcrypt";

const RegisterCon = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await RegisterSche.findOne({ email });
        if (user) {
            res.send({ status: "User Already Exists...!" });
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);
            const user = new RegisterSche({
                name: name,
                email: email,
                password: hashPassword,
            });
            const result = await user.save();
            if (result) {
                res.send({
                    status: true,
                    message: "User Register Successfully...",
                    user
                })
            }
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error From Register Controller",
            Error: `Error is ${error}`,
        });
    }
};

export default RegisterCon;
