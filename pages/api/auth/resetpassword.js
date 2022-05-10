import { hashPassword } from "../../../lib/auth";
import connectDB from "../../../middleware/mongodb";
const User = require('../../../models/user');

const handler = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(400);
    }

    const data = req.body;

    const { password } = data;

    if (
        !password ||
        password.trim().length < 5
    ) {
        res.status(422).json({
            message: "Invalid input.",
        });
        return;
    }
    const hashedPass = await hashPassword(req.body.password);
    User.findOne({email:req.query.email}).then((user) => {

        user.password = hashedPass;
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;
            console.log('user', user)
            user.save((err, user) => {
                if (err) return res.status(500).json({message: err.message});

                return res
                    .status(201)
                    .json({
                        status: 201,
                        message: "Your password has been updated.",
                        data: user
                    });
            });
        });
};

export default connectDB(handler);
