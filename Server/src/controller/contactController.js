import { decode } from "jsonwebtoken";
import { Contact } from "../model/contact_model.js";
import jwt from "jsonwebtoken";

const addContact = async (req, res) => {
  const { Name, Email, Phone, Address } = req.body;

  console.log("data Send By user ", req.body);

  try {
    const token = req.headers.authorization.split(" ")[1];

    const decode = jwt.verify(token, process.env.JWT_SECRECT_KEY);
    console.log("Decode Secrcet ", decode);
    const newContact = new Contact({
      Name,
      Email,
      Phone,
      Address,
      provided_by: decode._id,
    }); // Fixed the typo: newContct -> newContact
    await newContact.save();
    console.log(newContact);
    return res.status(201).json({
      success: true,
    }); // Responding with the created contact and appropriate status
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      error: "Something went wrong",
      details: error.message, // More informative error message
    });
  }
};

const accessContact = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const decode = jwt.verify(token, process.env.JWT_SECRECT_KEY);
    console.log("Access Token Secrect key : ", decode);
    const contacts = await Contact.find({
      provided_by: decode._id,
    }); // Fetching all contacts from the database
    res.json(contacts);
    console.log("Contact data:", contacts); // Fixed the typo: Contact -> Contact
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: "Something went wrong",
      details: error.message, // More informative error message
    });
  }
};

export { addContact, accessContact };
