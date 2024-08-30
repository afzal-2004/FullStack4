import { Contact } from "../model/contact_model.js";

const addContact = async (req, res) => {
  const { Name, Email, Phone, Address, provided_by } = req.body;  // Fixed the typo: probided_by -> provided_by

  try {
    const newContact = new Contact({ Name, Email, Phone, Address, provided_by });  // Fixed the typo: newContct -> newContact
    await newContact.save();
    console.log(newContact);
    return res.status(201).json(newContact);  // Responding with the created contact and appropriate status
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      error: "Something went wrong",
      details: error.message  // More informative error message
    });
  }
};

const accessContact = async (req, res) => {
  try {
    const contacts = await Contact.find({});  // Fetching all contacts from the database
    res.json(contacts);
    console.log("Contact data:", contacts);  // Fixed the typo: Contact -> Contact
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: "Something went wrong",
      details: error.message  // More informative error message
    });
  }
};

export { addContact, accessContact };
