import { json } from "express";
import { user } from "../model/user_model.js";
import { validationResult } from "express-validator";
const registerUser = async (req, res) => {
  // res.status(200).json({
  //   message: "Hello This is My First  controller For testing Purpose",
  // });

  //    REGISTER USER STEP BY STEP  ALGORITHM
  //  1. TAKE DATA FROM  FROUNTEND
  //  2 . CHECK DATA IS NOT EMPTY
  //  3 CHECK THIS DATA IS  NOT  ALREADY EXICTED IN YOU DATABASE IF  IT IS EXECTID THEN THROUGH ERROR
  //    4. CREATE AN NEW ENTRY IN THE DATABASE
  //  5 . CHECK  IN DATABASE USER IS CREATED OR NOT

  const { name, email, password } = req.body;
  {
    const userExecited = await user.findOne({ email });
    if (userExecited) {
      return res.status(400).json({ msg: "user is Alredy  Execited" });
    }
  }
  console.log("Name is", name);
  console.log("user Email is ", email);
  console.log("User password is ", password);

  return res.status(200).json(email, name, password);
};
export { registerUser };
