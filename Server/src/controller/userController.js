import { user } from "../model/user_model.js";

const registerUser = (req, res) => {
  res.status(200).json({
    message: "Hello This is My First  controller For testing Purpose",
  });

  //    REGISTER USER STEP BY STEP  ALGORITHM
  //  1. TAKE DATA FROM  FROUNTEND
  //  2 . CHECK DATA IS NOT EMPTY
  //  3 CHECK THIS DATA IS  NOT  ALREADY EXICTED IN YOU DATABASE IF  IT IS EXECTID THEN THROUGH ERROR
  //    4. CREATE AN NEW ENTRY IN THE DATABASE
  //  5 . CHECK  IN DATABASE USER IS CREATED OR NOT

  const { Name, Email, Password } = req.body;
  console.log("Name is", Name);
  console.log("user Email is ", Email);
  console.log("User password is ", Password);
};
export { registerUser };
