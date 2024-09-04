import { decode } from "jsonwebtoken";
import { Contact } from "../model/contact_model.js";
import jwt from "jsonwebtoken";

const addContact = async (req, res) => {
  const { Name, Email, Phone, Address } = req.body;

  console.log("data Send By user ", req.body);

  try {
    const token = req.headers.authorization.split(" ")[1];

    const decode = jwt.verify(token, process.env.JWT_SECRECT_KEY);
    // console.log("Decode Secrcet ", decode);
    const newContact = new Contact({
      Name,
      Email,
      Phone,
      Address,
      provided_by: decode._id,
    }); // Fixed the typo: newContct -> newContact
    await newContact.save();
    // console.log(newContact);
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
    // console.log(token);
    const decode = jwt.verify(token, process.env.JWT_SECRECT_KEY);
    // console.log("Access Token Secrect key : ", decode);
    const contacts = await Contact.find({
      provided_by: decode._id,
    }); // Fetching all contacts from the database
    res.json(contacts);
    // console.log("Contact data:", contacts); // Fixed the typo: Contact -> Contact
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: "Something went wrong",
      details: error.message, // More informative error message
    });
  }
};
const deleteContact = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteContect = await Contact.findByIdAndDelete({ _id: id });
    if (!deleteContact) {
      return res.status(404).json({
        error: "Somethng went  Wrong",
      });
    }
    return res.json(deleteContact);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: "Somethng went  Wrong",
      details: error.message,
    });
  }
};

const getupdateContact = async (req, res) => {
  try {
    const id = req.params.id;
    // console.log(id);
    const userDetail = await Contact.findById(id);
    // console.log(userDetail);
    if (userDetail) {
      return res.json(userDetail);
    }
    return res.status(500).json({
      error: "Please try Some time later",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: "Something Went Wrong ",
      details: error.message,
    });
  }
};

const UpdateuserContact = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    // const updateUser = Contact.findByIdAndUpdate(id);
    const updatedUser = await Contact.findByIdAndUpdate(id, updateData, {
      new: true, // Return the updated document
      runValidators: true, // Ensure that the data passes schema validation
    });
    console.log(updatedUser);
    if (!updatedUser) {
      return res.status(404).json({
        error: "User  Name is execited  ",
      });
    }
    return res.status(201).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      error: "Something went Wrong ",
      details: error.message,
    });
  }
};

export {
  addContact,
  accessContact,
  deleteContact,
  getupdateContact,
  UpdateuserContact,
};
