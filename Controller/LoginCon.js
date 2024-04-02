import RegisterSche from "../Module/RegisterSche.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const JWT_Secret_Key = process.env.JWT_Secret_Key;
const JWT_Key_ExpireIn = process.env.JWT_Key_ExpireIn;

const LoginCon = async (req, res) => {
    try {
        const admin_email = "admin@gmail.com";
        const admin_pass = "admin123";
        const { email, password } = req.body;
        if ((password === admin_pass) && (email === admin_email)) {
            const admin = { admin_email, admin_pass };
            jwt.sign(
                { email: email },
                JWT_Secret_Key,
                { expiresIn: JWT_Key_ExpireIn },
                (err, token) => {
                    if (err) {
                        res.send({ Error: `From Token${err}` });
                    } else {
                        if (token) {
                            res.json({
                                status: true,
                                admin,
                                token
                            })
                        }
                    }
                }
            )
        } else {
            const user = await RegisterSche.findOne({ email: email });
            if (user) {
                const isMatch = await bcrypt.compare(password, user.password);
                if (isMatch) {
                    jwt.sign(
                        { _id: user._id },
                        JWT_Secret_Key,
                        { expiresIn: JWT_Key_ExpireIn },
                        (err, token) => {
                            if (err) {
                                res.send({ Error: `From Token${err}` });
                            } else {
                                if (token) {
                                    res.json({
                                        status: true,
                                        user,
                                        token
                                    })
                                }
                            }
                        }
                    )
                } else {
                    res.send({
                        status: false,
                        meassage: "Invalid Email && Password"
                    })
                }
            } else {
                res.send({
                    status: false,
                    message: "Invalid Email && Password"
                })
            }
        }

    } catch (error) {
        res.send({
            status: true,
            message: `Error From Login Controller `,
            Error: error
        })
    }
}

export default LoginCon;