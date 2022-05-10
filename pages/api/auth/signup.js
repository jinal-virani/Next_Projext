import { hashPassword } from "../../../lib/auth";
import connectDB from "../../../middleware/mongodb";
const User = require('../../../models/user');

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(400);
  }

  const data = req.body;

  const { email, password, phone, firstName, lastName } = data;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 5 ||
    !phone ||
    !firstName ||
    !lastName
  ) {
    res.status(422).json({
      message: "Invalid input.",
    });
    return;
  }
  const hashedPass = await hashPassword(password);
  const newUser = new User({
    firstName: firstName,
    lastName: lastName,
    password: hashedPass,
    email: email,
    phone: phone,
    resetPasswordToken:''
  });

  const savedUser = await newUser.save();
  return res
    .status(201)
    .json({
      status: 201,
      message: "User Successfully Created!",
      user: savedUser,
    });
};

export default connectDB(handler);
