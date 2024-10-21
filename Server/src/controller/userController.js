import { json } from "express";
import { user } from "../model/user_model.js";
import { validationResult } from "express-validator";
import bycrpt from "bcrypt";
import jwt from "jsonwebtoken";
const registerUser = async (req, res) => {
  const errors = validationResult(req);

  const { name, email, password } = req.body;
  console.log("Name is", name);
  console.log("user Email is ", email);
  console.log("User password is ", password);
  try {
    {
      const userExecited = await user.findOne({ email });
      if (userExecited) {
        return res.status(400).json({
          errors: [{ msg: "user is Alredy  Execited" }],
        });
      }
      const hashpassword = await bycrpt.hash(password, 10);
      const newUser = new user({ name, email, password: hashpassword });
      const result = await newUser.save();
      result._doc.password = undefined;
      return res.status(200).json({ success: true, ...result._id });
    }
  } catch (error) {
    {
      console.log(error);
      return res.status(500).json({ err: error.message });
    }
  }

  return res.status(200).json(email, name, password);
};

const loginUser = async (req, res) => {
  const errors = validationResult(req);

  const { email, password } = req.body;

  console.log("user Email is :", email);
  console.log("User password is:", password);

  try {
    const User = await user.findOne({
      email,
    });
    console.log(User);
    if (!User) {
      res.status(401).json({
        errors: [{ msg: " User is Not Registerd" }],
      });
    }

    const isPasswordValid = await bycrpt.compare(password, User.password);

    if (!isPasswordValid) {
      res.status(402).json({
        errors: [{ msg: "Wrong Password " }],
      });
    }
    const token = jwt.sign({ _id: User._id }, process.env.JWT_SECRECT_KEY, {
      expiresIn: "3d",
    });
    console.log("Generated Token:", token);
    const userData = { ...User._doc, password: undefined };
    return res.status(200).json({ success: true, user: userData, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ err: error.message });
  }
};

const Auth = async (req, res) => {
  return res.status(200).json({ success: true, ...req.user._doc });
};
const logoutuser = async (req, res) => {};
export { registerUser, loginUser, Auth };
