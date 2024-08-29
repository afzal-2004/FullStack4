import { Contact } from "../model/contact_model.js";

const addcontact = async (req, res) => {
  const { Name, Email, Phone, Address } = req.body;
  // console.log("name", Name);
  // console.log("Email :", Email);
  // console.log("Phone:", Phone);
  // console.log("Address:", Address);
  try {
    const newContct = new Contact({ Name, Email, Phone, Address });
    await newContct.save();
    console.log(newContct);
  } catch (error) {
    console.log(error);
    return res(401).json({
      error: "Someting went wrong ",
    });
  }
};
const AccessConatct = async (req, res) => {
  const data = await res.data;
  // console.log("Afzal");
  try {
    Contact.find({}).then(function (contact) {
      res.json(contact);
      console.log("Conatct dat is :", contact);
    });
  } catch (error) {
    return res(400).json("Something Went Wrong ");
  }
};
export { addcontact, AccessConatct };
