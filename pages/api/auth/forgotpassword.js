import connectDB from "../../../middleware/mongodb";
const User = require('../../../models/user');

const handler = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(400);
    }

    const data = req.body;

    const { email } = data;

    if (
        !email ||
        !email.includes("@")
    ) {
        res.status(422).json({
            message: "Invalid input.",
        });
        return;
    }

    User.findOne({ email: email }).then(user => {
        if (!user)
            return res
                .status(201)
                .json({
                    message: 'The email address ' + email + ' is Invalid.please, try again.'
                })
        user.generatePasswordReset()

        user.save()
            .then(user => {
                const value = user.email + '|' + new Date();
                const encryptedData = btoa(value)

                User.findByIdAndUpdate({ _id: user._id }, { resetPasswordToken: encryptedData }).then((response) => {
                    return res
                    .status(201)
                    .json({
                        status: 201,
                        message: "Your password has been updated.",
                        data: response
                    });
                })

              }).catch(err => res.status(500).json({ message: err.message }));
    }).catch(err => res.status(500).json({ message: err.message }));
};

export default connectDB(handler);
